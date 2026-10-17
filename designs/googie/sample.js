$('#gg-btn').addEventListener('click', e => {
  const on = $('#gg-stage').classList.toggle('dusk');
  e.currentTarget.setAttribute('aria-pressed', on);
  e.currentTarget.textContent = on ? 'Back to daylight' : 'Light the sign';
});
if (reduced) $$('#gg-stage animateMotion').forEach(a => a.remove());
