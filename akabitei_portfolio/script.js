(() => {
  const canvas = document.getElementById('leaves');
  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0, height = 0, leaves = [], frame = 0;
  const colors = ['#9e1b2b', '#bd3a35', '#c77d35', '#d3a14d', '#7d2026', '#e0b45e'];
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = width * dpr; canvas.height = height * dpr;
    canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(34, Math.max(14, Math.floor(width / 38)));
    leaves = Array.from({length: count}, () => makeLeaf(true));
  }
  function makeLeaf(initial = false) {
    const size = 5 + Math.random() * 11;
    return {
      x: Math.random() * width,
      y: initial ? Math.random() * height : -25 - Math.random() * 90,
      size,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - .5) * .025,
      drift: (Math.random() - .5) * .65,
      sway: .4 + Math.random() * 1.25,
      phase: Math.random() * Math.PI * 2,
      speed: .22 + Math.random() * .5,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.floor(Math.random() * 4),
      alpha: .42 + Math.random() * .48
    };
  }
  function drawLeaf(leaf) {
    ctx.save(); ctx.translate(leaf.x, leaf.y); ctx.rotate(leaf.rotation); ctx.globalAlpha = leaf.alpha;
    ctx.fillStyle = leaf.color; ctx.strokeStyle = 'rgba(50,12,14,.45)'; ctx.lineWidth = .6;
    const s = leaf.size;
    ctx.beginPath();
    if (leaf.shape === 0) {
      ctx.moveTo(0, -s); ctx.quadraticCurveTo(s * .35, -s * .55, s, -s * .2); ctx.quadraticCurveTo(s * .55, s * .2, s * .2, s); ctx.quadraticCurveTo(-s * .2, s * .4, -s * .7, s * .1); ctx.quadraticCurveTo(-s * .4, -s * .3, 0, -s);
    } else if (leaf.shape === 1) {
      ctx.moveTo(0, -s); ctx.lineTo(s * .35, -s * .35); ctx.lineTo(s, -s * .2); ctx.lineTo(s * .42, s * .15); ctx.lineTo(s * .2, s); ctx.lineTo(-s * .2, s * .45); ctx.lineTo(-s * .7, s * .25); ctx.lineTo(-s * .42, -.1 * s); ctx.closePath();
    } else if (leaf.shape === 2) {
      ctx.moveTo(0, -s); ctx.bezierCurveTo(s * 1.1, -s * .55, s * .7, s * .7, 0, s); ctx.bezierCurveTo(-s * .7, s * .7, -s * 1.1, -s * .55, 0, -s);
    } else {
      ctx.moveTo(0, -s); ctx.lineTo(s * .25, -s * .4); ctx.lineTo(s * .85, -s * .25); ctx.lineTo(s * .4, s * .12); ctx.lineTo(s * .55, s * .75); ctx.lineTo(0, s * .42); ctx.lineTo(-s * .55, s * .75); ctx.lineTo(-s * .4, s * .12); ctx.lineTo(-s * .85, -s * .25); ctx.lineTo(-s * .25, -s * .4); ctx.closePath();
    }
    ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, -s * .7); ctx.lineTo(0, s * .65); ctx.strokeStyle = 'rgba(238,190,119,.4)'; ctx.stroke(); ctx.restore();
  }
  function animate() {
    ctx.clearRect(0, 0, width, height);
    leaves.forEach((leaf) => {
      drawLeaf(leaf);
      leaf.y += leaf.speed; leaf.x += leaf.drift + Math.sin(frame * .012 * leaf.sway + leaf.phase) * .42;
      leaf.rotation += leaf.spin;
      if (leaf.y > height + 30 || leaf.x < -40 || leaf.x > width + 40) Object.assign(leaf, makeLeaf());
    });
    frame++;
    if (!reducedMotion) requestAnimationFrame(animate);
  }
  resize(); animate();
  window.addEventListener('resize', resize);

  const upload = document.getElementById('backgroundUpload');
  upload.addEventListener('change', (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById('heroImage').style.backgroundImage = `linear-gradient(90deg,rgba(16,13,13,.88) 0%,rgba(16,13,13,.56) 42%,rgba(16,13,13,.12) 100%),url("${reader.result}")`;
    };
    reader.readAsDataURL(file);
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰';
  }));
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === button));
    const category = button.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  }));
})();
