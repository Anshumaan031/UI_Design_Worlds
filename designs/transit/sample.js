(() => {
  const map = $('#tr-map'), info = $('#tr-info');
  const stops = [
    [40, 160, 'Idea', 'Green line · origin', 'below'], [160, 160, 'Spike', 'Green line', 'below'], [300, 100, 'Prototype', 'Interchange · Green & Orange', 'above'],
    [440, 100, 'Pilot', 'Interchange · Green & Purple', 'above'], [600, 100, 'Production', 'Green line · terminus', 'above'], [120, 40, 'Research', 'Orange line', 'right'], [440, 190, 'Evaluation', 'Purple line', 'right'],
  ];
  const NS = 'http://www.w3.org/2000/svg';
  stops.forEach(([x, y, name, line, pos]) => {
    const g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'stop'); g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.setAttribute('aria-label', `${name}, ${line}`);
    const inter = line.startsWith('Interchange');
    const tx = pos === 'right' ? x + 16 : x, ty = pos === 'below' ? y + 30 : pos === 'above' ? y - 18 : y + 5;
    g.innerHTML = `<circle cx="${x}" cy="${y}" r="${inter ? 9 : 7}" class="${inter ? 'st ic' : 'st'}"/><text x="${tx}" y="${ty}" text-anchor="${pos === 'right' ? 'start' : 'middle'}">${name}</text>`;
    const say = () => { info.textContent = `${name} · ${line}`; };
    g.addEventListener('pointerenter', say); g.addEventListener('focus', say);
    map.appendChild(g);
  });
  if (reduced) map.querySelector('animateMotion').remove();
})();
