/* Gallery shell: routing, the results grid with filters, the detail page. */
(() => {
  const DW = window.DW;
  const S = DW.search;
  const { esc } = DW.detail;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const items = (window.DW_INDEX || []).map(S.prepare);
  const byId = Object.fromEntries(items.map(d => [d.id, d]));
  const view = $('#view');
  const input = $('#q');

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const HUES = { red: '#E5484D', orange: '#F08A24', yellow: '#F2C230', green: '#3FA66B', teal: '#1FA8A0', blue: '#3B6FE0', purple: '#8A5CD6', pink: '#E55FA8', neutral: 'linear-gradient(135deg,#fff 50%,#161613 50%)' };
  const FACET_LABEL = { tone: cap, play: cap, status: cap, color: cap, use: s => s, feel: s => s };
  const label = (key, v) => FACET_LABEL[key](v);

  let state = S.emptyState();      // the list's search + filters; survives a trip to a detail page
  let cleanup = null;              // stops the open design's sample
  let routeToken = 0;
  let listScroll = 0;

  // ── small helpers ──
  const toast = msg => {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('is-on');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('is-on'), 1800);
  };
  const listHash = () => '#/' + (S.toQuery(state) ? '?' + S.toQuery(state) : '');
  const results = () => S.run(items, state);
  const mark = (text, tokens) => {
    let out = esc(text);
    for (const t of tokens) if (t.length > 1) out = out.replace(new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![^<]*>)`, 'ig'), '<mark>$1</mark>');
    return out;
  };

  // ── theme ──
  const themeBtn = $('#theme');
  let theme = null;
  try { theme = localStorage.getItem('dw-theme'); } catch (e) {}
  const applyTheme = () => {
    if (theme) document.documentElement.dataset.theme = theme; else delete document.documentElement.dataset.theme;
    themeBtn.textContent = theme ? cap(theme) : 'Auto';
  };
  applyTheme();
  themeBtn.addEventListener('click', () => {
    theme = theme === null ? 'light' : theme === 'light' ? 'dark' : null;
    applyTheme();
    try { theme ? localStorage.setItem('dw-theme', theme) : localStorage.removeItem('dw-theme'); } catch (e) {}
  });

  // ── list view ──
  function facetGroup(facet) {
    const opts = S.facetOptions(items, state, facet);
    const body = opts.map(o => {
      const off = !o.count && !o.on;
      const attrs = `type="button" class="opt opt--${facet.key}" data-f="${facet.key}:${esc(o.value)}" aria-pressed="${o.on}" ${off ? 'data-empty' : ''}`;
      if (facet.key === 'color') return `<button ${attrs} title="${cap(o.value)} · ${o.count}" aria-label="${cap(o.value)}, ${o.count}"><i style="background:${HUES[o.value]}"></i></button>`;
      return `<button ${attrs}><span>${esc(label(facet.key, o.value))}</span><em>${o.count}</em></button>`;
    }).join('');
    return `<fieldset class="fgroup fgroup--${facet.key}"><legend>${facet.label}</legend><div class="opts">${body}</div></fieldset>`;
  }

  function chips() {
    const c = [];
    if (state.q) c.push(`<button type="button" class="chip" data-clear="q">“${esc(state.q)}” <b aria-hidden="true">×</b><span class="sr">Remove</span></button>`);
    for (const f of S.FACETS) for (const v of state.f[f.key]) c.push(`<button type="button" class="chip" data-clear="${f.key}:${esc(v)}">${esc(label(f.key, v))} <b aria-hidden="true">×</b><span class="sr">Remove</span></button>`);
    return c.length ? c.join('') + '<button type="button" class="chip chip--text" data-clear="all">Clear all</button>' : '';
  }

  function dots(play) {
    const n = ['low', 'medium', 'high'].indexOf(play) + 1;
    return `<span class="dots" title="${cap(play)} interactivity" aria-label="${cap(play)} interactivity">${[1, 2, 3].map(i => `<i${i <= n ? ' class="on"' : ''}></i>`).join('')}</span>`;
  }

  function cardHtml(d, tokens) {
    const pal = d.palette.slice(0, 7).map(p => `<i style="background:${esc(p.css || p.hex)}"></i>`).join('');
    return `<li class="dcard"><a href="#/d/${d.id}">
      <div class="dcard__pal" aria-hidden="true">${pal}</div>
      <div class="dcard__body">
        <h2>${mark(d.name, tokens)}</h2>
        <p>${esc(d.fit)}</p>
        <div class="dcard__meta"><span class="tag">${cap(d.tone)}</span>${dots(d.play)}<span class="status status--${d.status}">${cap(d.status)}</span></div>
      </div></a></li>`;
  }

  function emptyHtml() {
    const tips = ['Portfolio', 'Retro', 'Playful', 'green', 'Editorial'];
    return `<div class="empty"><p class="empty__t">Nothing matches${state.q ? ` “${esc(state.q)}”` : ' those filters'}.</p>
      <p>Try fewer words, or start from a common one:</p>
      <div class="chips">${tips.map(t => `<button type="button" class="chip" data-try="${t}">${t}</button>`).join('')}<button type="button" class="chip chip--text" data-clear="all">Clear all</button></div></div>`;
  }

  function renderList(restoreFocus) {
    const res = results();
    const tokens = S.tokensOf(state.q);
    const sorts = { ...(state.q ? { relevance: { label: 'Best match' } } : {}), ...S.SORTS };
    const sortVal = state.q && !state.sort ? 'relevance' : state.sort || 'name';
    const active = S.activeCount(state);
    document.title = 'Design Worlds';
    view.innerHTML = `
      <div class="list">
        <aside class="filters" id="filters" aria-label="Filters">
          <div class="filters__head"><b>Filters</b><button type="button" class="btn btn--quiet" data-act="close-filters">Show ${res.length}</button></div>
          ${S.FACETS.map(facetGroup).join('')}
        </aside>
        <section class="results" aria-label="Results">
          <p class="intro">${items.length} live design worlds. Search or filter, open one to see it move, then take its <code>DESIGN.md</code>.</p>
          <div class="bar">
            <button type="button" class="btn filters-toggle" data-act="open-filters">Filters${active ? ` · ${active}` : ''}</button>
            <p class="count" aria-live="polite"><b>${res.length}</b> of ${items.length} designs</p>
            <label class="sort">Sort <select id="sort">${Object.entries(sorts).map(([k, v]) => `<option value="${k}"${k === sortVal ? ' selected' : ''}>${v.label}</option>`).join('')}</select></label>
          </div>
          <div class="chips chips--active">${chips()}</div>
          ${res.length ? `<ul class="grid">${res.map(r => cardHtml(r.d, tokens)).join('')}</ul>` : emptyHtml()}
        </section>
      </div>`;
    if (restoreFocus) { const el = $(`[data-f="${restoreFocus}"]`) || $('#sort'); el && el.focus({ preventScroll: true }); }
  }

  function setState(next, focusKey) {
    state = next;
    if (input.value !== state.q) input.value = state.q;
    history.replaceState(null, '', listHash());
    renderList(focusKey);
  }

  function toggleFilter(key, value) {
    const cur = state.f[key];
    state = { ...state, f: { ...state.f, [key]: cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value] } };
    setState(state, `${key}:${value}`);
  }

  // ── detail view ──
  const pill = d => `<span class="status status--${d.status}">${cap(d.status)}</span>`;

  async function renderDetail(id) {
    const token = ++routeToken;
    const meta = byId[id];
    if (!meta) { view.innerHTML = `<div class="empty"><p class="empty__t">No design called “${esc(id)}”.</p><p><a href="${listHash()}">Back to all designs</a></p></div>`; return; }
    document.title = `${meta.name} · Design Worlds`;
    view.innerHTML = `<p class="loading">Loading ${esc(meta.name)}…</p>`;
    let d;
    try { d = await DW.detail.load(id); } catch (e) { if (token === routeToken) view.innerHTML = `<div class="empty"><p class="empty__t">Couldn’t load this design.</p><p>${esc(e.message)}</p></div>`; return; }
    if (token !== routeToken) return;

    const ids = results().map(r => r.d.id);
    const inList = ids.includes(id);
    const seq = inList ? ids : items.map(x => x.id);
    const at = seq.indexOf(id);
    const nb = n => `#/d/${seq[(at + n + seq.length) % seq.length]}`;
    const chipLink = (key, v) => `<a class="tag tag--link" href="#/?${key}=${encodeURIComponent(v)}">${esc(v)}</a>`;
    const more = S.similar(items, meta);

    view.innerHTML = `
      <article class="detail">
        <nav class="crumbs" aria-label="Design navigation">
          <a class="btn btn--quiet" href="${listHash()}" id="back">← All designs${inList && S.activeCount(state) + (state.q ? 1 : 0) ? ' (filtered)' : ''}</a>
          <span class="crumbs__pos">${at + 1} of ${seq.length}</span>
          <span class="crumbs__nav"><a class="btn btn--icon" href="${nb(-1)}" aria-label="Previous design" rel="prev">←</a><a class="btn btn--icon" href="${nb(1)}" aria-label="Next design" rel="next">→</a></span>
        </nav>
        <header class="dhead">
          <h1>${esc(d.name)} ${pill(d)}</h1>
          <p class="dhead__idea">${DW.detail.ticks(d.idea)}</p>
          <div class="tags"><span class="tag">${cap(d.tone)}</span><span class="tag">${cap(d.play)} interactivity</span>${d.use.map(v => chipLink('use', v)).join('')}${d.feel.map(v => chipLink('feel', v)).join('')}</div>
          <div class="actions">
            <button type="button" class="btn btn--solid" data-act="copy-md">Copy DESIGN.md</button>
            <button type="button" class="btn" data-act="dl-md">Download DESIGN.md</button>
            <button type="button" class="btn" data-act="dl-html">Download sample.html</button>
            <span class="actions__hint">Folder: <code>designs/${esc(d.id)}/</code></span>
          </div>
        </header>
        <div class="stage-mount" id="mount"></div>
        ${d.note ? `<p class="stage-note">${DW.detail.ticks(d.note)}</p>` : ''}
        ${DW.detail.notes(d)}
        <section class="more"><h2>More like this</h2><ul class="grid grid--small">${more.map(x => cardHtml(x, [])).join('')}</ul></section>
      </article>`;
    cleanup = DW.detail.mount(d, $('#mount'));
    view.focus({ preventScroll: true });

    view.onclick = e => {
      const b = e.target.closest('[data-act],[data-copy]');
      if (!b) return;
      if (b.dataset.copy === 'tokens') return copyTo(d.tokens, 'Tokens copied', b);
      if (b.dataset.act === 'copy-md') copyTo(d.md, 'DESIGN.md copied');
      if (b.dataset.act === 'dl-md') { DW.detail.download(`${d.id}.DESIGN.md`, d.md, 'text/markdown'); toast('Saved DESIGN.md'); }
      if (b.dataset.act === 'dl-html') { DW.detail.download(`${d.id}.sample.html`, DW.detail.standalone(d), 'text/html'); toast('Saved sample.html'); }
    };
  }

  async function copyTo(text, msg, btn) {
    const ok = await DW.detail.copy(text);
    toast(ok ? msg : 'Copy blocked by the browser. Use Download instead.');
    if (btn && ok) { const old = btn.textContent; btn.textContent = 'Copied'; setTimeout(() => (btn.textContent = old), 1200); }
  }

  // ── routing ──
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    view.onclick = null;
    document.body.classList.remove('filters-open');
    const h = location.hash || '#/';
    const m = h.match(/^#\/d\/([^?]+)/);
    if (m) {
      listScroll = window.scrollY || listScroll;
      window.scrollTo(0, 0);
      renderDetail(decodeURIComponent(m[1]));
      return;
    }
    routeToken++;
    const q = h.includes('?') ? h.slice(h.indexOf('?') + 1) : '';
    state = q ? S.fromQuery(q) : state;     // a bare "#/" keeps the last search
    if (input.value !== state.q) input.value = state.q;
    renderList();
    window.scrollTo(0, listScroll);
    listScroll = 0;
  }
  window.addEventListener('hashchange', route);

  // ── list events (delegated) ──
  view.addEventListener('click', e => {
    const f = e.target.closest('[data-f]');
    if (f) { const [k, ...v] = f.dataset.f.split(':'); return toggleFilter(k, v.join(':')); }
    const c = e.target.closest('[data-clear]');
    if (c) {
      const [k, ...v] = c.dataset.clear.split(':');
      if (k === 'all') return setState(S.emptyState());
      if (k === 'q') return setState({ ...state, q: '' });
      return toggleFilter(k, v.join(':'));
    }
    const t = e.target.closest('[data-try]');
    if (t) return setState({ ...S.emptyState(), q: t.dataset.try });
    const a = e.target.closest('[data-act]');
    if (a?.dataset.act === 'open-filters') document.body.classList.add('filters-open');
    if (a?.dataset.act === 'close-filters') document.body.classList.remove('filters-open');
  });
  view.addEventListener('change', e => {
    if (e.target.id === 'sort') setState({ ...state, sort: e.target.value }, 'sort');
  });

  // ── search box ──
  input.addEventListener('input', () => {
    state = { ...state, q: input.value };
    if (/^#\/d\//.test(location.hash)) { location.hash = listHash(); return; }   // typing from a design jumps to results
    history.replaceState(null, '', listHash());
    renderList();
  });
  $('#search-form').addEventListener('submit', e => {
    e.preventDefault();
    const first = results()[0];
    if (first) location.hash = `#/d/${first.d.id}`;
  });

  // ── keyboard ──
  document.addEventListener('keydown', e => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName);
    if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey) { e.preventDefault(); input.focus(); input.select(); return; }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); input.focus(); input.select(); return; }
    if (e.key === 'Escape') {
      if (document.activeElement === input) { if (input.value) { input.value = ''; input.dispatchEvent(new Event('input')); } else input.blur(); return; }
      if (document.body.classList.contains('filters-open')) { document.body.classList.remove('filters-open'); return; }
      if (/^#\/d\//.test(location.hash)) location.hash = listHash();
      return;
    }
    if (typing || e.metaKey || e.ctrlKey || e.altKey || !/^#\/d\//.test(location.hash)) return;
    const link = e.key === 'ArrowLeft' ? $('[rel=prev]') : e.key === 'ArrowRight' ? $('[rel=next]') : null;
    if (link) { e.preventDefault(); location.hash = link.getAttribute('href'); }
  });

  DW.toast = toast;
  route();
})();
