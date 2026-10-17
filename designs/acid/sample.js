(() => {
  const s = $('#ac-stage');
  s.addEventListener('pointermove', e => {
    const r = s.getBoundingClientRect();
    s.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    s.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  });
  s.addEventListener('pointerleave', () => { s.style.setProperty('--mx', 0); s.style.setProperty('--my', 0); });
})();
