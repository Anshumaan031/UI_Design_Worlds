(() => {
  const svg = $('#rt-dial'), NS = 'http://www.w3.org/2000/svg', C = 100, HR = 70, STOP = 120;
  const theta = k => 60 - 30 * k, need = k => 60 + 30 * k, digit = k => (k === 9 ? 0 : k + 1);
  const at = (deg, r) => { const a = (deg * Math.PI) / 180; return [C + r * Math.sin(a), C - r * Math.cos(a)]; };
  let html = `<defs><mask id="rt-s-mask"><circle cx="${C}" cy="${C}" r="94" fill="#fff"/>`;
  for (let k = 0; k < 10; k++) { const [x, y] = at(theta(k), HR); html += `<circle cx="${x}" cy="${y}" r="13.5" fill="#000"/>`; }
  html += `<circle cx="${C}" cy="${C}" r="42" fill="#000"/></mask></defs><circle cx="${C}" cy="${C}" r="98" class="plate"/>`;
  for (let k = 0; k < 10; k++) { const [x, y] = at(theta(k), HR); html += `<circle cx="${x}" cy="${y}" r="13" class="well"/><text x="${x}" y="${y + 6}" text-anchor="middle" class="dg">${digit(k)}</text>`; }
  html += `<g id="rt-wheel"><circle cx="${C}" cy="${C}" r="94" class="wheel" mask="url(#rt-s-mask)"/>`;
  for (let k = 0; k < 10; k++) { const [x, y] = at(theta(k), HR); html += `<circle cx="${x}" cy="${y}" r="14" class="hole" role="button" tabindex="0" aria-label="Dial ${digit(k)}" data-k="${k}"/>`; }
  html += `</g><circle cx="${C}" cy="${C}" r="40" class="card"/><circle cx="${C}" cy="${C}" r="35" class="ring"/><text x="${C}" y="${C + 11}" text-anchor="middle" class="num" id="rt-num">–</text>`;
  html += `<g transform="rotate(${STOP + 9} ${C} ${C})"><path class="stop" d="M${C - 5} ${C - 101} L ${C + 5} ${C - 101} L ${C + 3} ${C - 76} Q ${C} ${C - 71} ${C - 3} ${C - 76} Z"/></g>`;
  svg.innerHTML = html;
  const wheel = $('#rt-wheel'), num = $('#rt-num'), lamp = $('#rt-lamp'), status = $('#rt-status');
  let busy = false;
  const setRot = r => wheel.setAttribute('transform', `rotate(${r} ${C} ${C})`);
  const anim = (from, to, ms, ease, onP, done) => {
    const t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / ms); setRot(from + (to - from) * ease(p)); onP && onP(p); p < 1 ? requestAnimationFrame(step) : done && done(); };
    requestAnimationFrame(step);
  };
  const dial = k => {
    if (busy) return;
    busy = true;
    const d = digit(k), pulses = d || 10, n = need(k);
    status.textContent = 'Dialling…';
    lamp.classList.remove('on');
    const finish = () => { num.textContent = d; status.textContent = `Connected · extension ${d}`; lamp.classList.add('on'); busy = false; };
    if (reduced) { finish(); return; }
    anim(0, n, 240 + n * 1.5, x => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2), null, () => setTimeout(() => {
      let sent = 0;
      anim(n, 0, 180 + (n / 330) * 950, x => x, p => {
        const due = Math.min(pulses, Math.floor(p * pulses + 1e-6));
        while (sent < due) { sent++; num.textContent = sent % 10; lamp.classList.toggle('on'); }
      }, () => { status.textContent = `Ringing extension ${d}`; setTimeout(finish, 700); });
    }, 90));
  };
  $$('.hole', svg).forEach(h => {
    h.addEventListener('click', () => dial(+h.dataset.k));
    h.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); dial(+h.dataset.k); } });
  });
})();
