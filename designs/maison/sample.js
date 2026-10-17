const data = [
  { name: 'Cape', cap: 'Oxblood satin, 14 m', note: 'Cut from one length of cloth, it falls to the ankle and closes at the throat with a single hook.' },
  { name: 'Column', cap: 'Black duchesse, 9 m', note: 'One seam, cut on the bias. It holds the body without ever gripping it, and moves a half-second late.' },
  { name: 'Smoking', cap: 'Bone crêpe, 11 m', note: 'The evening jacket, undone: no tie, a collar open to the breastbone, trousers hemmed by hand.' }
];
const stage = $('#mn-stage'), name = $('#mn-name'), note = $('#mn-note'), cap = $('#mn-cap');
const tabs = $$('#mn-looks button');
const pick = i => {
  stage.dataset.look = i;
  tabs.forEach((t, k) => t.setAttribute('aria-selected', k === i));
  name.textContent = data[i].name; note.textContent = data[i].note; cap.textContent = data[i].cap;
  if (!reduced) { name.classList.remove('is-in'); void name.offsetWidth; name.classList.add('is-in'); }
};
tabs.forEach((t, i) => {
  t.addEventListener('click', () => pick(i));
  t.addEventListener('keydown', e => {
    const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!d) return;
    e.preventDefault(); const n = (i + d + tabs.length) % tabs.length; tabs[n].focus(); pick(n);
  });
});
