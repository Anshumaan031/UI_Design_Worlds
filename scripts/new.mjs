#!/usr/bin/env node
// Scaffold a design:  node scripts/new.mjs <id> "Display Name" [prefix]
// Copies designs/_template/ to designs/<id>/ and swaps in the id, name and CSS prefix.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [id, name, prefixArg] = process.argv.slice(2);
if (!id || !/^[a-z][a-z0-9-]*$/.test(id)) {
  console.error('Usage: node scripts/new.mjs <id> "Display Name" [prefix]\n  id: lowercase letters, digits, hyphens');
  process.exit(1);
}
const dest = path.join(ROOT, 'designs', id);
if (fs.existsSync(dest)) { console.error(`designs/${id} already exists.`); process.exit(1); }

const prefix = (prefixArg || id.replace(/[^a-z0-9]/g, '').slice(0, 3)).toLowerCase();
const display = name || id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
fs.mkdirSync(dest, { recursive: true });
for (const f of fs.readdirSync(path.join(ROOT, 'designs', '_template'))) {
  const text = fs.readFileSync(path.join(ROOT, 'designs', '_template', f), 'utf8')
    .replaceAll('"id": "my-world"', `"id": "${id}"`)
    .replaceAll('My World', display)
    .replaceAll('xx-', prefix + '-');
  fs.writeFileSync(path.join(dest, f), text);
}
console.log(`Created designs/${id}/ (CSS prefix "${prefix}-").\nEdit the files, then run: node scripts/build.mjs --watch`);
