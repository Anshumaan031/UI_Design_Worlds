#!/usr/bin/env node
// Build the library from designs/<id>/ folders.
//
//   node scripts/build.mjs           build once
//   node scripts/build.mjs --watch   rebuild when a design file changes
//
// Reads    designs/<id>/{design.json, sample.html, sample.css, sample.js?, spec.md?}
// Writes   designs/<id>/DESIGN.md      portable spec, safe to copy into any project
//          data/manifest.js            light index the gallery searches and filters
//          data/<id>.js                full design, loaded only when it is opened
//
// Plain scripts are used instead of fetch()/modules so index.html also works from file://.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { designMd, families } from './lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DESIGNS = path.join(ROOT, 'designs');
const DATA = path.join(ROOT, 'data');

const TONES = ['light', 'dark'];
const PLAYS = ['low', 'medium', 'high'];
const STATUSES = ['built', 'proposed'];
const REQUIRED = ['id', 'name', 'tone', 'play', 'status', 'fit', 'idea', 'palette'];

const read = (dir, file) => {
  const p = path.join(dir, file);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n') : '';
};
const write = (file, text) => {
  if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') === text) return;
  fs.writeFileSync(file, text);
};

function build() {
  const problems = [];
  const index = [];
  fs.mkdirSync(DATA, { recursive: true });

  const ids = fs.readdirSync(DESIGNS, { withFileTypes: true })
    .filter(e => e.isDirectory() && !e.name.startsWith('_') && fs.existsSync(path.join(DESIGNS, e.name, 'design.json')))
    .map(e => e.name).sort();

  for (const id of ids) {
    const dir = path.join(DESIGNS, id);
    let d;
    try { d = JSON.parse(read(dir, 'design.json')); } catch (e) { problems.push(`${id}: design.json is not valid JSON (${e.message})`); continue; }
    const bad = msg => problems.push(`${id}: ${msg}`);
    if (d.id !== id) bad(`"id" is "${d.id}" but the folder is "${id}"`);
    for (const k of REQUIRED) if (d[k] == null) bad(`missing "${k}"`);
    if (!TONES.includes(d.tone)) bad(`tone must be ${TONES.join(' | ')}`);
    if (!PLAYS.includes(d.play)) bad(`play must be ${PLAYS.join(' | ')}`);
    if (!STATUSES.includes(d.status)) bad(`status must be ${STATUSES.join(' | ')}`);

    const html = read(dir, 'sample.html');
    if (!html) bad('sample.html is missing or empty');
    const css = read(dir, 'sample.css');
    const js = read(dir, 'sample.js');
    const spec = read(dir, 'spec.md');

    d.use ||= []; d.feel ||= []; d.keywords ||= ''; d.fonts ||= [];
    d.families = families(d.palette || []);

    const md = designMd(d, spec);
    write(path.join(dir, 'DESIGN.md'), md);
    write(path.join(DATA, `${id}.js`), `(window.DW_DESIGNS = window.DW_DESIGNS || {})[${JSON.stringify(id)}] = ${JSON.stringify({ ...d, html, css, js, spec, md })};\n`);

    index.push({
      id, name: d.name, tone: d.tone, play: d.play, status: d.status, fit: d.fit, idea: d.idea,
      use: d.use, feel: d.feel, keywords: d.keywords, families: d.families,
      fontNames: d.fonts.map(f => f.split(':')[0].replaceAll('+', ' ')),
      palette: (d.palette || []).map(p => ({ name: p.name, hex: p.hex, ...(p.css ? { css: p.css } : {}) })),
    });
  }

  // drop data files for designs that no longer exist
  for (const f of fs.readdirSync(DATA)) {
    if (f === 'manifest.js') continue;
    if (!ids.includes(f.replace(/\.js$/, ''))) fs.unlinkSync(path.join(DATA, f));
  }
  write(path.join(DATA, 'manifest.js'), `window.DW_INDEX = ${JSON.stringify(index, null, 1)};\n`);

  console.log(`Built ${index.length} designs.`);
  for (const p of problems) console.warn('  ! ' + p);
  return problems.length === 0;
}

const ok = build();
if (process.argv.includes('--watch')) {
  let t;
  fs.watch(DESIGNS, { recursive: true }, (_, file) => {
    if (!file || /DESIGN\.md$/.test(file)) return; // our own output
    clearTimeout(t);
    t = setTimeout(build, 120);
  });
  console.log('Watching designs/ …');
} else if (!ok) process.exitCode = 1;
