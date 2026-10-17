const clock = $('#tt-clock');
const tick = () => { clock.textContent = new Date().toTimeString().slice(0, 8); };
tick(); setInterval(tick, 1000);
const mosaic = $('#tt-mosaic');
const art = ['000111111000', '001100001100', '011011110110', '001100001100', '000111111000', '000000000000'];
art.join('').split('').forEach(c => mosaic.insertAdjacentHTML('beforeend', `<i class="${c === '1' ? 'on' : ''}"></i>`));
const pages = [
  ['<span class="r">SYSTEMS</span>', '<span class="w">Six shipped systems, one per row.</span>', '<span class="c">Rows open on keypress.</span>'],
  ['<span class="g">WORK</span>', '<span class="w">Roles listed like a TV schedule.</span>', '<span class="c">Dates in cyan, firms in white.</span>'],
  ['<span class="y">SKILLS</span>', '<span class="w">Grouped in coloured bands.</span>', '<span class="g">Never a second typeface.</span>'],
  ['<span class="c">CONTACT</span>', '<span class="w">Page 199 always reaches you.</span>', '<span class="y">Press any key to continue.</span>'],
];
$$('#tt-screen .tt-s__fast button').forEach(b => b.addEventListener('click', () => {
  const body = $('#tt-body');
  body.innerHTML = pages[+b.dataset.p].map(l => `<span class="tt-s__row">${l}</span>`).join('\n');
  body.style.animation = 'none'; void body.offsetWidth; body.style.animation = '';
}));
