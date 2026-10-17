(() => {
  const s = $('#ab-stage'), depth = $('#ab-depth'), btn = $('#ab-btn');
  let x = 0.34, y = 0.42;
  const set = () => {
    s.style.setProperty('--x', (x * 100).toFixed(2) + '%');
    s.style.setProperty('--y', (y * 100).toFixed(2) + '%');
    depth.textContent = '−' + Math.round(200 + y * 10800).toLocaleString('en-US') + ' m';
  };
  s.addEventListener('pointermove', e => {
    const r = s.getBoundingClientRect();
    x = (e.clientX - r.left) / r.width; y = (e.clientY - r.top) / r.height; set();
  });
  s.addEventListener('keydown', e => {
    const k = { ArrowLeft: [-0.04, 0], ArrowRight: [0.04, 0], ArrowUp: [0, -0.05], ArrowDown: [0, 0.05] }[e.key];
    if (!k || e.target !== s) return;
    e.preventDefault();
    x = Math.min(1, Math.max(0, x + k[0])); y = Math.min(1, Math.max(0, y + k[1])); set();
  });
  btn.addEventListener('click', () => {
    const on = s.classList.toggle('surface');
    btn.setAttribute('aria-pressed', on);
    btn.textContent = on ? 'Dive' : 'Surface';
  });
  set();
})();
