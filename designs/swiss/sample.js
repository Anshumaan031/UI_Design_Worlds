$('#sw-grid-btn').addEventListener('click', e => {
  const on = $('#sw-stage').classList.toggle('show-grid');
  e.currentTarget.setAttribute('aria-pressed', on);
  e.currentTarget.textContent = on ? 'Hide grid' : 'Show grid';
});
