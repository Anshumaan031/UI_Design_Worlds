(() => {
  const s = $('#os-stage'), wins = $$('.os-s__win', s), tasks = $('#os-tasks'), menu = $('#os-menu'), start = $('#os-start');
  let z = 10;
  const syncTasks = () => {
    tasks.innerHTML = '';
    wins.filter(w => !w.hidden).forEach(w => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'os-s__btn'; b.textContent = w.dataset.title;
      b.setAttribute('aria-pressed', w.classList.contains('top'));
      b.addEventListener('click', () => front(w));
      tasks.appendChild(b);
    });
  };
  const front = w => { wins.forEach(x => x.classList.toggle('top', x === w)); w.style.zIndex = ++z; syncTasks(); };
  const open = id => { const w = $('#' + id, s); w.hidden = false; front(w); };
  const close = w => {
    w.hidden = true; w.classList.remove('top');
    const vis = wins.filter(x => !x.hidden);
    if (vis.length) front(vis.reduce((a, b) => (+a.style.zIndex > +b.style.zIndex ? a : b))); else syncTasks();
  };
  wins.forEach(w => {
    const bar = $('.os-s__bar', w);
    w.addEventListener('pointerdown', () => { if (!w.classList.contains('top')) front(w); });
    $('.os-s__x', w).addEventListener('click', () => close(w));
    $$('[data-close]', w).forEach(b => b.addEventListener('click', () => close(w)));
    let d = null;
    bar.addEventListener('pointerdown', e => {
      if (e.target.closest('button')) return;
      bar.setPointerCapture(e.pointerId);
      d = { x: e.clientX - w.offsetLeft, y: e.clientY - w.offsetTop };
    });
    bar.addEventListener('pointermove', e => {
      if (!d) return;
      const maxX = s.clientWidth - w.offsetWidth, maxY = s.clientHeight - 38 - bar.offsetHeight - 6;
      w.style.left = Math.max(0, Math.min(maxX, e.clientX - d.x)) + 'px';
      w.style.top = Math.max(0, Math.min(maxY, e.clientY - d.y)) + 'px';
    });
    const end = () => { d = null; };
    bar.addEventListener('pointerup', end); bar.addEventListener('pointercancel', end);
  });
  const icons = $$('.os-s__icon', s);
  icons.forEach(i => {
    i.addEventListener('click', () => {
      if (i.classList.contains('sel')) open(i.dataset.open);
      icons.forEach(x => x.classList.toggle('sel', x === i));
    });
    i.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); open(i.dataset.open); } });
  });
  $$('.os-s__win [data-open], .os-s__menu [data-open]', s).forEach(b => b.addEventListener('click', () => { open(b.dataset.open); menu.hidden = true; start.setAttribute('aria-expanded', 'false'); }));
  start.addEventListener('click', () => { menu.hidden = !menu.hidden; start.setAttribute('aria-expanded', String(!menu.hidden)); });
  s.addEventListener('pointerdown', e => { if (!menu.hidden && !e.target.closest('#os-menu, #os-start')) { menu.hidden = true; start.setAttribute('aria-expanded', 'false'); } });

  const clock = $('#os-clock');
  const tick = () => { clock.textContent = new Date().toTimeString().slice(0, 5); };
  tick(); setInterval(tick, 10000);

  const prog = $('#os-prog'), file = $('#os-file'), N = 20;
  const files = ['rag.dll', 'agents.sys', 'evals.ini', 'finetune.cab', 'deploy.bat'];
  let n = 0;
  const paint = () => {
    prog.innerHTML = '<i></i>'.repeat(n);
    prog.setAttribute('aria-valuenow', Math.round((n / N) * 100));
    file.textContent = n >= N ? 'Setup complete. 5 skills installed.' : `Copying ${files[Math.floor((n / N) * files.length)]}…`;
  };
  if (reduced) { n = N; paint(); }
  else setInterval(() => { n = n >= N + 8 ? 0 : n + 1; if (n <= N || n === 0) paint(); }, 260);
  front($('#os-install')); front($('#os-about'));
})();
