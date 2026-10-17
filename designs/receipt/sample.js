(() => {
  const items = [['Discovery workshop', '1.00'], ['Prototype, 2 weeks', '1.00'], ['RAG pipeline', '1.00'], ['Agent orchestration', '1.00'], ['Evaluation harness', '1.00'], ['Production deploy', '1.00']];
  const box = $('#rc-lines'), btn = $('#rc-btn');
  const print = () => {
    btn.disabled = true;
    const rows = items.map(([a, b]) => `<div class="rc-s__line"><span>${a}</span><span>${b}</span></div>`);
    rows.push('<hr class="rc-s__line">', '<div class="rc-s__line rc-s__total"><span>TOTAL</span><span>1 SYSTEM</span></div>', '<div class="rc-s__line c">Thank you. Ship it.</div>', '<div class="rc-s__line rc-s__bar" aria-hidden="true"></div>');
    box.innerHTML = rows.join('');
    const lines = $$('.rc-s__line', box);
    lines.forEach((l, i) => (reduced ? l.classList.add('in') : setTimeout(() => l.classList.add('in'), 110 * i)));
    setTimeout(() => { btn.disabled = false; btn.textContent = 'Print again'; }, reduced ? 0 : 110 * lines.length);
  };
  btn.addEventListener('click', print);
  print();
})();
