// Optional. Runs when the design opens. Available: root, $, $$ (scoped to the sample), reduced (prefers-reduced-motion),
// and tracked setInterval / setTimeout / requestAnimationFrame that stop when you leave the design.
$('#xx-btn').addEventListener('click', e => { e.currentTarget.textContent = 'Clicked'; });
