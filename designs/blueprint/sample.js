$('#bp-stamp-btn').addEventListener('click', () => {
  const s = $('#bp-stamp');
  s.classList.remove('is-on'); void s.offsetWidth; s.classList.add('is-on');
});
