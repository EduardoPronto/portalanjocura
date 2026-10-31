// Cabeçalho: fundo ao rolar
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  header.classList.toggle('menu-open', open);
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Revelar seções ao rolar
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('show'));
}

// Céu estrelado
document.querySelectorAll('.stars').forEach(field => {
  const count = Number(field.dataset.count) || 80;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement('i');
    const size = Math.random() < 0.1 ? 2.6 : 0.8 + Math.random() * 1.4;
    if (Math.random() < 0.15) star.className = 'gold';
    star.style.cssText =
      `left:${(Math.random() * 100).toFixed(2)}%;top:${(Math.random() * 100).toFixed(2)}%;` +
      `width:${size.toFixed(1)}px;height:${size.toFixed(1)}px;` +
      `animation-delay:${(Math.random() * 5).toFixed(2)}s;animation-duration:${(3 + Math.random() * 4).toFixed(2)}s`;
    frag.appendChild(star);
  }
  field.appendChild(frag);
});

// Anjo em 3D: inclina acompanhando o mouse
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const tiltArea = document.querySelector('[data-tilt]');
if (tiltArea && !reduceMotion && window.matchMedia('(hover: hover)').matches) {
  const angel = tiltArea.querySelector('.angel-3d');
  const hero = document.querySelector('.hero');
  hero.addEventListener('pointermove', (e) => {
    const rect = tiltArea.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
    const y = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
    angel.classList.add('is-tilting');
    angel.style.setProperty('--ry', `${(x * 28).toFixed(2)}deg`);
    angel.style.setProperty('--rx', `${(-y * 20).toFixed(2)}deg`);
  });
  hero.addEventListener('pointerleave', () => {
    angel.classList.remove('is-tilting');
    angel.style.setProperty('--ry', '0deg');
    angel.style.setProperty('--rx', '0deg');
  });
}

// Mensagem de luz do dia
const mensagens = [
  'Você não precisa ter todas as respostas hoje. Um passo de cada vez também é caminho.',
  'A sua luz continua aí, mesmo nos dias nublados. Permita-se reencontrá-la.',
  'Respire. Este momento difícil não define quem você é.',
  'Cuidar de si não é egoísmo: é o primeiro gesto de amor que o mundo recebe de você.',
  'Você merece ser ouvido com carinho, inclusive por você mesmo.',
  'Seu ritmo é sagrado. Floresça no seu próprio tempo.',
  'Deixe ir o que pesa. Há espaço em você para a leveza voltar.',
  'Cada recomeço carrega uma bênção escondida. Confie no caminho.',
  'Você não está sozinho. Há sempre uma mão estendida e uma luz a guiar seus passos.',
  'Acolha suas emoções como quem acolhe uma criança: com paciência e ternura.',
  'A paz que você procura começa no silêncio de uma respiração consciente.',
  'Hoje, escolha ser gentil com você. O resto pode esperar um pouco.'
];
const mensagemTexto = document.getElementById('mensagem-texto');
const mensagemBtn = document.getElementById('mensagem-btn');
if (mensagemTexto && mensagemBtn) {
  let atual = 0;
  mensagemBtn.addEventListener('click', () => {
    let proxima;
    do { proxima = Math.floor(Math.random() * mensagens.length); } while (proxima === atual);
    atual = proxima;
    mensagemTexto.classList.add('is-changing');
    setTimeout(() => {
      mensagemTexto.textContent = `“${mensagens[atual]}”`;
      mensagemTexto.classList.remove('is-changing');
    }, reduceMotion ? 0 : 400);
  });
}

// Ano no rodapé
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();
