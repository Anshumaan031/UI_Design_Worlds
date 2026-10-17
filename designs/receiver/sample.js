(() => {
  const LO = 87.5, HI = 108.5;
  const st = [{ f: 91.5, n: 'MULTI-TENANT RAG' }, { f: 98.0, n: 'VOICE AGENTS' }, { f: 104.5, n: 'FINE-TUNING FACTORY' }];
  const NOISE = '░▒▓#%*+=~:/';
  const scale = $('#rx-scale'), needle = $('#rx-needle'), range = $('#rx-range'), stage = $('#rx-stage');
  const pct = f => ((f - LO) / (HI - LO)) * 100;
  [88, 92, 96, 100, 104, 108].forEach(n => scale.insertAdjacentHTML('beforeend', `<span class="rx-s__num" style="left:${pct(n)}%">${n}</span>`));
  st.forEach((s, i) => scale.insertAdjacentHTML('beforeend', `<span class="rx-s__stn" style="left:${pct(s.f)}%">S${i + 1}</span>`));
  const stns = $$('.rx-s__stn', scale);
  let f = 100;
  const draw = () => {
    let best = 0;
    st.forEach((s, i) => { if (Math.abs(s.f - f) < Math.abs(st[best].f - f)) best = i; });
    const c = Math.max(0, 1 - Math.abs(st[best].f - f) / 1.1) ** 2;
    stage.style.setProperty('--c', c.toFixed(3));
    needle.style.left = pct(f) + '%';
    $('#rx-freq').textContent = f.toFixed(1);
    const name = st[best].n;
    $('#rx-name').textContent = c > 0.96 ? name : name.split('').map(ch => (ch !== ' ' && Math.random() < (1 - c) * 0.95 ? NOISE[Math.floor(Math.random() * NOISE.length)] : ch)).join('');
    stns.forEach((s, i) => s.classList.toggle('on', i === best && c > 0.9));
    const open = 10 + (1 - c) * 120, r = 44;
    const a0 = ((-90 - open / 2) * Math.PI) / 180, a1 = ((-90 + open / 2) * Math.PI) / 180;
    $('#rx-shade').setAttribute('d', `M50 50 L ${50 + r * Math.cos(a0)} ${50 + r * Math.sin(a0)} A ${r} ${r} 0 0 1 ${50 + r * Math.cos(a1)} ${50 + r * Math.sin(a1)} Z`);
    $('#rx-glow').style.opacity = 0.45 + 0.55 * c;
    range.setAttribute('aria-valuetext', `${f.toFixed(1)}, ${c > 0.9 ? name : 'between stations'}`);
    return c;
  };
  range.addEventListener('input', () => { f = +range.value; draw(); });
  range.addEventListener('change', () => {
    const near = st.reduce((a, s) => (Math.abs(s.f - f) < Math.abs(a.f - f) ? s : a));
    if (Math.abs(near.f - f) < 0.7) { f = near.f; range.value = f; draw(); }
  });
  draw();
  if (!reduced) setInterval(() => { if (draw() < 0.96) {} }, 110);
})();
