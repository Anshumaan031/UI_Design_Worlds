// Shared helpers for the build: DESIGN.md generation and colour-family detection.

const strip = s => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const cell = s => String(s).replace(/\|/g, '\\|');

export const fontsUrl = fonts => (fonts.length ? `https://fonts.googleapis.com/css2?${fonts.map(f => 'family=' + f).join('&')}&display=swap` : '');

// ── colour families, so the gallery can filter by "has some green" ──
function hexOf(p) {
  const m = (/^#[0-9a-f]{3,8}$/i.test(p.hex) ? p.hex : (p.css || '').match(/#[0-9a-f]{3,8}/i)?.[0]) || '';
  if (m.length === 4) return '#' + [...m.slice(1)].map(c => c + c).join('');
  return m.length >= 7 ? m.slice(0, 7) : '';
}
function hsl(hex) {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
  if (!d) return [0, 0, l];
  const s = d / (1 - Math.abs(2 * l - 1));
  let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [(h * 60 + 360) % 360, s, l];
}
const BUCKETS = [['red', 15], ['orange', 40], ['yellow', 70], ['green', 165], ['teal', 200], ['blue', 255], ['purple', 300], ['pink', 345]];
export function families(palette) {
  const out = new Set();
  for (const p of palette) {
    const hex = hexOf(p);
    if (!hex) continue;
    const [h, s, l] = hsl(hex);
    if (s < 0.25 || l < 0.12 || l > 0.92) continue; // greys, near-black, near-white carry no hue
    out.add((BUCKETS.find(([, max]) => h < max) || ['red'])[0]);
  }
  return out.size ? [...out] : ['neutral'];
}

// ── DESIGN.md: the portable form of a design ──
export function designMd(d, spec = '') {
  const L = [];
  L.push('---', `name: ${d.name}`, `id: ${d.id}`, `tone: ${d.tone}`, `interactivity: ${d.play}`, `status: ${d.status}`);
  if (d.use.length) L.push(`good-for: [${d.use.join(', ')}]`);
  if (d.feel.length) L.push(`feel: [${d.feel.join(', ')}]`);
  L.push('---', '', `# ${d.name}`, '', `> ${d.idea}`, '');
  if (d.borrowed) L.push('## Borrowed from', '', d.borrowed, '');
  L.push('## Mood & fit', '', d.mood || '', '', `Good fit for: ${d.fit}.`, '');

  L.push('## Palette', '', '| Name | Value | Role |', '| --- | --- | --- |');
  for (const p of d.palette) L.push(`| ${cell(p.name)} | \`${cell(p.css || p.hex)}\` | ${cell(p.role || '')} |`);
  L.push('');

  if (d.type?.length) {
    L.push('## Typography', '');
    for (const t of d.type) L.push(`- **${strip(t.sample).trim()}** — ${t.meta}`);
    L.push('');
    if (d.fonts.length) L.push('```css', `@import url('${fontsUrl(d.fonts)}');`, '```', '');
  }
  if (d.patterns?.length) {
    L.push('## Patterns & textures', '');
    for (const p of d.patterns) L.push(`- **${p.label}**`, '  ```css', `  .pattern { ${p.css.replace(/;\s*$/, '')}; }`, '  ```');
    L.push('');
  }
  if (d.motion?.length) L.push('## Motion & interaction', '', ...d.motion.map(m => `- ${m}`), '');
  if (d.watchouts?.length) L.push("## Watch-outs", '', ...d.watchouts.map(m => `- ${m}`), '');
  if (d.tokens) L.push('## Tokens', '', '```css', d.tokens.trim(), '```', '');
  if (spec.trim()) L.push('## Extended spec', '', spec.trim(), '');
  return L.join('\n');
}
