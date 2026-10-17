const s = $('#sm-stage'), go = $('#sm-go'), clock = $('#sm-clock'), temp = $('#sm-temp'), label = $('#sm-state'), ring = $('#sm-ring'), dry = $('#sm-dry');
const teas = $$('#sm-teas button');
const RATE = 12; // demo speed: 1 real second = 12 steeping seconds
let tea = { t: 'Sencha', c: 80, s: 90 }, left = tea.s, last = 0, running = false, timer = 0;
const fmt = n => Math.floor(n / 60) + ':' + String(n % 60).padStart(2, '0');
const paint = () => {
  clock.textContent = fmt(Math.max(0, Math.ceil(left)));
  const f = 1 - left / tea.s;
  ring.style.strokeDasharray = (92 * (running || s.dataset.state === 'done' ? f : 1)) + ' 100';
  dry.style.strokeDasharray = (60 * (running || s.dataset.state === 'done' ? f : 1)) + ' 100';
};
const reset = () => {
  clearInterval(timer); running = false; left = tea.s; s.dataset.state = 'idle';
  ring.style.strokeDasharray = ''; dry.style.strokeDasharray = '';
  temp.textContent = tea.c + '°C'; label.textContent = tea.t; clock.textContent = fmt(tea.s); go.textContent = 'Begin steeping';
};
teas.forEach(b => b.addEventListener('click', () => {
  teas.forEach(x => x.setAttribute('aria-checked', x === b));
  tea = { t: b.dataset.t, c: +b.dataset.c, s: +b.dataset.s }; reset();
}));
go.addEventListener('click', () => {
  if (running) { reset(); return; }
  reset(); running = true; s.dataset.state = 'steeping'; label.textContent = 'Steeping'; go.textContent = 'Pour it out';
  last = performance.now();
  timer = setInterval(() => {
    const now = performance.now(); left -= (now - last) / 1000 * RATE; last = now;
    if (left <= 0) {
      left = 0; clearInterval(timer); running = false; s.dataset.state = 'done';
      label.textContent = 'Ready'; go.textContent = 'Steep again'; ring.style.strokeDasharray = ''; dry.style.strokeDasharray = '';
    }
    paint();
  }, 80);
});
reset();
