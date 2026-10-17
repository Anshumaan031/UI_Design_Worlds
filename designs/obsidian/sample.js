const s = $('#ob-stage'), h = $('#ob-h'), m = $('#ob-m'), sec = $('#ob-sec'), lume = $('#ob-lume');
const tick = () => {
  const d = new Date(), ms = d.getMilliseconds(), sc = d.getSeconds() + ms / 1000, mi = d.getMinutes() + sc / 60, hr = (d.getHours() % 12) + mi / 60;
  h.style.setProperty('--r', (hr * 30) + 'deg');
  m.style.setProperty('--r', (mi * 6) + 'deg');
  sec.style.setProperty('--r', ((reduced ? Math.floor(sc) : sc) * 6) + 'deg');
};
tick();
if (reduced) setInterval(tick, 1000);
else { const loop = () => { tick(); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }
s.addEventListener('pointermove', e => {
  const r = $('.ob-s__dial').getBoundingClientRect();
  s.style.setProperty('--x', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
  s.style.setProperty('--y', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
});
lume.addEventListener('click', () => {
  const on = s.classList.toggle('is-lume');
  lume.setAttribute('aria-pressed', on);
  lume.textContent = 'Lume: ' + (on ? 'on' : 'off');
});
