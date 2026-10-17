(() => {
  const head = $('#rn-head'), input = $('#rn-input');
  const FONTS = [["'Fraunces', serif", 900], ["'Archivo', sans-serif", 800], ["'Big Shoulders Stencil Display', sans-serif", 900], ["'Instrument Serif', serif", 400], ["'VT323', monospace", 400], ["'Permanent Marker', cursive", 400], ["'Unbounded', sans-serif", 800], ["'Special Elite', monospace", 400], ["'Chakra Petch', sans-serif", 700], ["'Doto', monospace", 900]];
  const PAPERS = [['#FFFFFF', '#121212'], ['#121212', '#ECEAE3'], ['#FFE600', '#121212'], ['#FF3EA5', '#121212'], ['#DCD6C8', '#121212'], ['#2B59FF', '#FFFFFF'], ['#FF5A1F', '#121212']];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const esc = c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] || c);
  const p = (x0, x1, y0, y1) => `${rnd(x0, x1).toFixed(1)}% ${rnd(y0, y1).toFixed(1)}%`;
  const jag = () => `polygon(${p(0, 8, 0, 10)}, ${p(40, 60, 0, 6)}, ${p(92, 100, 0, 10)}, ${p(94, 100, 45, 55)}, ${p(92, 100, 90, 100)}, ${p(40, 60, 94, 100)}, ${p(0, 8, 90, 100)}, ${p(0, 6, 45, 55)})`;
  const cut = text => {
    const t = text.trim().slice(0, 28) || 'Cut and paste';
    head.setAttribute('aria-label', t);
    head.innerHTML = [...t].map((ch, i) => {
      if (ch === ' ') return '<span class="rn-s__gap"></span>';
      const [f, w] = pick(FONTS), [bg, fg] = pick(PAPERS);
      const c = Math.random() < 0.5 ? ch.toUpperCase() : ch.toLowerCase();
      return `<span class="rn-s__l" aria-hidden="true" style="font-family:${f};font-weight:${w};background:${bg};color:${fg};rotate:${rnd(-9, 9).toFixed(1)}deg;font-size:${rnd(0.85, 1.2).toFixed(2)}em;clip-path:${jag()};animation-delay:${i * 40}ms">${esc(c)}</span>`;
    }).join('');
  };
  $('#rn-form').addEventListener('submit', e => { e.preventDefault(); cut(input.value); });
  cut(input.value);
})();
