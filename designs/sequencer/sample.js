(() => {
  const knob = $('#sq-knob'), fill = $('#sq-fill'), cap = $('#sq-cap'), steps = $('#sq-steps'), bpmEl = $('#sq-bpm'), nameEl = $('#sq-name');
  const pads = $$('.sq-s__pad');
  for (let i = 0; i < 16; i++) steps.insertAdjacentHTML('beforeend', `<i class="${i % 4 === 0 ? 'beat' : ''}"></i>`);
  const leds = $$('i', steps);
  let bpm = 96, step = 0, playing = !reduced, timer = 0, sel = 0;
  const render = () => {
    const t = (bpm - 60) / 120;
    fill.style.strokeDasharray = `${t * 100} 100`;
    cap.setAttribute('transform', `rotate(${-135 + t * 270} 50 50)`);
    knob.setAttribute('aria-valuenow', bpm);
    knob.setAttribute('aria-valuetext', `${bpm} bpm`);
    const live = playing ? Math.floor(step / 4) % 4 : sel;
    bpmEl.textContent = `BPM ${String(bpm).padStart(3, '0')} · ${playing ? 'PLAY' : 'STOP'}`;
    nameEl.textContent = `PAD ${live + 1}`;
    leds.forEach((l, i) => l.classList.toggle('on', i === step % 16));
    pads.forEach((p, i) => p.classList.toggle('lit', i === live));
  };
  const run = () => { clearInterval(timer); if (playing) timer = setInterval(() => { step = (step + 1) % 64; render(); }, (60 / bpm / 4) * 1000); };
  const setBpm = v => { bpm = Math.max(60, Math.min(180, Math.round(v))); render(); run(); };
  let drag = null;
  knob.addEventListener('pointerdown', e => { knob.setPointerCapture(e.pointerId); drag = { y: e.clientY, v: bpm }; });
  knob.addEventListener('pointermove', e => { if (drag) setBpm(drag.v + (drag.y - e.clientY) * 0.75); });
  knob.addEventListener('pointerup', () => { drag = null; });
  knob.addEventListener('keydown', e => {
    const s = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') { e.preventDefault(); setBpm(bpm + s); }
    if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') { e.preventDefault(); setBpm(bpm - s); }
  });
  pads.forEach((p, i) => p.addEventListener('click', () => {
    if (playing || sel !== i) { playing = false; sel = i; } else { playing = true; }
    run(); render();
  }));
  render(); run();
})();
