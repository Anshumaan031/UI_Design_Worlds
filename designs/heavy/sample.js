const words = ['MULTI-TENANT RAG', 'VOICE AGENTS', 'FINE-TUNING', 'FORECASTING'];
const CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';
const LEN = 16;
const flap = $('#hv-flap');
for (let i = 0; i < LEN; i++) flap.insertAdjacentHTML('beforeend', '<span class="hv-s__cell"> </span>');
const cells = $$('.hv-s__cell', flap);
let wi = 0;
const show = word => {
  const target = word.padEnd(LEN, ' ').slice(0, LEN);
  flap.setAttribute('aria-label', word);
  cells.forEach((cell, i) => {
    if (reduced) { cell.textContent = target[i]; return; }
    let n = 0;
    const id = setInterval(() => {
      n++;
      if (n > 6 + i) { cell.textContent = target[i]; clearInterval(id); }
      else cell.textContent = CH[Math.floor(Math.random() * CH.length)];
    }, 48);
  });
};
show(words[0]);
$('#hv-next').addEventListener('click', () => { wi = (wi + 1) % words.length; show(words[wi]); });
