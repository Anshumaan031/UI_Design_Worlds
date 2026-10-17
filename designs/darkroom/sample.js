$('#dk-btn').addEventListener('click', e => {
  const on = $('#dk-stage').classList.toggle('lights');
  e.currentTarget.setAttribute('aria-pressed', on);
  e.currentTarget.textContent = on ? 'Safelight' : 'Lights on';
});
