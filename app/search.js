/* Search + faceted filtering. Pure logic, no DOM. Exposes window.DW.search. */
(() => {
  const DW = (window.DW = window.DW || {});

  const FACETS = [
    { key: 'tone', label: 'Tone', get: d => [d.tone], order: ['light', 'dark'] },
    { key: 'play', label: 'Interactivity', get: d => [d.play], order: ['low', 'medium', 'high'] },
    { key: 'use', label: 'Good for', get: d => d.use },
    { key: 'feel', label: 'Feel', get: d => d.feel },
    { key: 'color', label: 'Colour', get: d => d.families, order: ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple', 'pink', 'neutral'] },
    { key: 'status', label: 'Status', get: d => [d.status], order: ['built', 'proposed'] },
  ];

  const SORTS = {
    name: { label: 'A to Z', cmp: (a, b) => a.name.localeCompare(b.name) },
    play: { label: 'Most interactive', cmp: (a, b) => rank(b.play) - rank(a.play) || a.name.localeCompare(b.name) },
    built: { label: 'Built first', cmp: (a, b) => (b.status === 'built') - (a.status === 'built') || a.name.localeCompare(b.name) },
  };
  const rank = p => ['low', 'medium', 'high'].indexOf(p);

  const norm = s => String(s).toLowerCase();

  // searchable text per design, lowercased once
  const prepare = d => {
    d._f = {
      name: norm(d.name),
      tags: norm([...d.use, ...d.feel, ...d.families, ...d.fontNames].join(' | ')),
      meta: norm(`${d.tone} ${d.play} ${d.status}`),
      keywords: norm(d.keywords),
      fit: norm(d.fit),
      idea: norm(d.idea),
      palette: norm(d.palette.map(p => `${p.name} ${p.hex}`).join(' ')).replaceAll('#', ''),
    };
    return d;
  };

  const WEIGHTS = { name: 10, tags: 6, keywords: 4, palette: 3, fit: 3, meta: 2, idea: 1 };

  // prose fields only match at the start of a word, so "inter" doesn't hit "painter" or "winter"
  const PROSE = new Set(['idea', 'fit', 'meta']);
  const find = (text, t, wordStart) => {
    let at = text.indexOf(t);
    while (wordStart && at > 0 && /[a-z0-9]/.test(text[at - 1])) at = text.indexOf(t, at + 1);
    return at;
  };

  // every token must match somewhere; score = best field weight per token (+ bonuses)
  function score(d, tokens) {
    let total = 0;
    for (const t of tokens) {
      let best = 0;
      for (const [field, w] of Object.entries(WEIGHTS)) {
        const text = d._f[field];
        const at = find(text, t, PROSE.has(field));
        if (at < 0) continue;
        let s = w;
        if (at === 0 || /[\s|]/.test(text[at - 1])) s += 2; // word start beats mid-word
        if (field === 'name' && at === 0) s += 3;
        if (s > best) best = s;
      }
      if (!best) return 0;
      total += best;
    }
    return total;
  }

  const tokensOf = q => norm(q).replaceAll('#', '').split(/[\s,]+/).filter(Boolean);

  const passes = (d, filters, skip) =>
    FACETS.every(f => {
      const sel = filters[f.key];
      if (f.key === skip || !sel || !sel.length) return true;
      const have = f.get(d);
      return sel.some(v => have.includes(v));
    });

  /** Designs matching text + filters, ordered. Returns [{d, score}] */
  function run(items, state, skipFacet) {
    const tokens = tokensOf(state.q);
    let out = [];
    for (const d of items) {
      if (!passes(d, state.f, skipFacet)) continue;
      if (tokens.length) {
        const s = score(d, tokens);
        if (s) out.push({ d, score: s });
      } else out.push({ d, score: 0 });
    }
    const byRelevance = tokens.length && (state.sort === 'relevance' || !state.sort);
    const cmp = byRelevance ? (a, b) => b.score - a.score || a.d.name.localeCompare(b.d.name) : (a, b) => (SORTS[state.sort] || SORTS.name).cmp(a.d, b.d);
    return out.sort(cmp);
  }

  /** Options for a facet with counts that ignore that facet's own selection (so you can still widen it). */
  function facetOptions(items, state, facet) {
    const base = run(items, state, facet.key).map(r => r.d);
    const counts = new Map();
    for (const d of base) for (const v of facet.get(d)) counts.set(v, (counts.get(v) || 0) + 1);
    for (const v of state.f[facet.key] || []) if (!counts.has(v)) counts.set(v, 0);
    for (const d of items) for (const v of facet.get(d)) if (!counts.has(v)) counts.set(v, 0);
    const vals = [...counts.keys()];
    if (facet.order) vals.sort((a, b) => facet.order.indexOf(a) - facet.order.indexOf(b));
    else vals.sort((a, b) => counts.get(b) - counts.get(a) || a.localeCompare(b));
    return vals.map(v => ({ value: v, count: counts.get(v), on: (state.f[facet.key] || []).includes(v) }));
  }

  // ── state <-> URL query ──
  const emptyState = () => ({ q: '', sort: '', f: Object.fromEntries(FACETS.map(f => [f.key, []])) });

  function toQuery(state) {
    const p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    if (state.sort && state.sort !== 'relevance') p.set('sort', state.sort);
    for (const f of FACETS) if (state.f[f.key].length) p.set(f.key, state.f[f.key].join(','));
    return p.toString();
  }
  function fromQuery(str) {
    const s = emptyState();
    const p = new URLSearchParams(str || '');
    s.q = p.get('q') || '';
    s.sort = SORTS[p.get('sort')] ? p.get('sort') : '';
    for (const f of FACETS) s.f[f.key] = (p.get(f.key) || '').split(',').filter(Boolean);
    return s;
  }
  const activeCount = state => FACETS.reduce((n, f) => n + state.f[f.key].length, 0);

  /** Designs most like `d`, for the "More like this" row. */
  function similar(items, d, n = 3) {
    const overlap = (a, b) => a.filter(x => b.includes(x)).length;
    return items
      .filter(x => x.id !== d.id)
      .map(x => ({ x, s: overlap(x.use, d.use) * 2 + overlap(x.feel, d.feel) * 2 + overlap(x.families, d.families) + (x.tone === d.tone ? 1 : 0) + (x.play === d.play ? 1 : 0) }))
      .sort((a, b) => b.s - a.s || a.x.name.localeCompare(b.x.name))
      .slice(0, n).map(r => r.x);
  }

  DW.search = { FACETS, SORTS, prepare, run, facetOptions, emptyState, toQuery, fromQuery, activeCount, similar, tokensOf };
})();
