/* One design: load its data file, render its notes, run its live sample, export it. Exposes window.DW.detail. */
(() => {
  const DW = (window.DW = window.DW || {});

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ticks = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>'); // `code` in design.json text
  const fontsUrl = fonts => (fonts.length ? `https://fonts.googleapis.com/css2?${fonts.map(f => 'family=' + f).join('&')}&display=swap` : '');
  const swatchBg = p => p.css || p.hex;

  // ── loading ──
  const pending = {};
  function load(id) {
    const store = (window.DW_DESIGNS = window.DW_DESIGNS || {});
    if (store[id]) return Promise.resolve(store[id]);
    return (pending[id] ||= new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = `data/${encodeURIComponent(id)}.js`;
      s.onload = () => (store[id] ? resolve(store[id]) : reject(new Error('data file did not register ' + id)));
      s.onerror = () => { delete pending[id]; reject(new Error(`Could not load data/${id}.js. Run: node scripts/build.mjs`)); };
      document.head.appendChild(s);
    }));
  }

  // ── the notes below the live sample ──
  const card = (title, body, cls = '') => `<section class="card ${cls}"><h3>${title}</h3>${body}</section>`;
  const list = items => `<ul>${items.map(i => `<li>${ticks(i)}</li>`).join('')}</ul>`;

  function notes(d) {
    const out = [];
    if (d.borrowed) out.push(card('Borrowed from', `<p>${ticks(d.borrowed)}</p>`));
    if (d.mood) out.push(card('Mood and fit', `<p>${ticks(d.mood)}</p>`));
    if (d.palette?.length) out.push(card('Palette', `<ul class="swatches">${d.palette.map(p =>
      `<li style="--c:${esc(swatchBg(p))}"><b>${esc(p.name)}</b><code>${esc(p.hex)}</code><span>${esc(p.role || '')}</span></li>`).join('')}</ul>`, 'card--wide'));
    if (d.type?.length) out.push(card('Type', `<div class="specimens">${d.type.map(t =>
      `<div class="spec"><span class="spec__sample" style="${esc(t.style)}">${t.sample}</span><span class="spec__meta">${esc(t.meta)}</span></div>`).join('')}</div>`));
    if (d.patterns?.length) out.push(card('Patterns and textures', `<div class="tiles">${d.patterns.map(p =>
      `<div class="tile"><i style="${esc(p.css)}"></i><span>${esc(p.label)}</span></div>`).join('')}</div>`));
    if (d.motion?.length) out.push(card('Motion and interaction', list(d.motion)));
    if (d.watchouts?.length) out.push(card('Watch-outs', list(d.watchouts)));
    if (d.tokens) out.push(card('Tokens <button class="copy" type="button" data-copy="tokens">Copy</button>', `<pre class="tokens">${esc(d.tokens)}</pre>`, 'card--wide'));
    if (d.spec) out.push(card('Extended spec', `<details><summary>Show the full written spec</summary><pre class="tokens tokens--long">${esc(d.spec)}</pre></details>`, 'card--wide'));
    return `<div class="notes">${out.join('')}</div>`;
  }

  // ── the live sample ──
  const loadedFonts = new Set();
  function mount(d, el) {
    const url = fontsUrl(d.fonts || []);
    if (url && !loadedFonts.has(url)) {
      loadedFonts.add(url);
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = url;
      document.head.appendChild(l);
    }
    const style = document.createElement('style');
    style.dataset.dwSample = d.id;
    style.textContent = d.css;
    document.head.appendChild(style);
    el.innerHTML = d.html;

    // timers started by the sample are tracked so leaving the design stops them
    const timers = new Set(), frames = new Set();
    const interval = (fn, ms, ...a) => { const id = setInterval(fn, ms, ...a); timers.add(id); return id; };
    const timeout = (fn, ms, ...a) => { const id = setTimeout(fn, ms, ...a); timers.add(id); return id; };
    const frame = fn => { const id = requestAnimationFrame(t => { frames.delete(id); fn(t); }); frames.add(id); return id; };
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = (s, r = el) => r.querySelector(s);
    const $$ = (s, r = el) => [...r.querySelectorAll(s)];
    if (d.js) {
      try { new Function('root', '$', '$$', 'reduced', 'setInterval', 'setTimeout', 'requestAnimationFrame', d.js)(el, $, $$, reduced, interval, timeout, frame); }
      catch (e) { console.error(`[${d.id}] sample.js failed`, e); }
    }
    return () => {
      timers.forEach(id => { clearInterval(id); clearTimeout(id); });
      frames.forEach(id => cancelAnimationFrame(id));
      style.remove();
      el.innerHTML = '';
    };
  }

  // ── exports ──
  function standalone(d) {
    const url = fontsUrl(d.fonts || []);
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(d.name)} · sample</title>
${url ? `<link href="${url}" rel="stylesheet">\n` : ''}<style>
body { margin: 0; padding: 24px; background: #e9e8e4; }
.stage { position: relative; overflow: hidden; min-height: 360px; isolation: isolate; border-radius: 16px; }
${d.css}</style>
</head>
<body>
<div id="mount">
${d.html}</div>
${d.js ? `<script>
(function () {
  const root = document.getElementById('mount');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = root) => r.querySelector(s);
  const $$ = (s, r = root) => [...r.querySelectorAll(s)];
${d.js.replace(/^(?=.)/gm, '  ')}})();
</script>
` : ''}</body>
</html>
`;
  }

  function download(name, text, type) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) {
      const t = document.createElement('textarea');
      t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (e2) {}
      t.remove(); return ok;
    }
  }

  DW.detail = { load, notes, mount, standalone, download, copy, esc, ticks };
})();
