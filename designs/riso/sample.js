const rz = $('#rz-stage');
rz.addEventListener('pointermove', e => {
  const r = rz.getBoundingClientRect();
  rz.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
  rz.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
});
rz.addEventListener('pointerleave', () => { rz.style.setProperty('--mx', 0); rz.style.setProperty('--my', 0); });
