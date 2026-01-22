
const hamburguer = document.getElementById('hamburguer');
const menuMobile = document.getElementById('menu-mobile');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menuMobile.classList.toggle('active');
});

// Fecha menu ao clicar em link
document.querySelectorAll('.menu-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    hamburguer.classList.remove('active');
    menuMobile.classList.remove('active');
  });
});

// === PROJETOS AUDIOVISUAIS ===
const projetos = [
  { nome: "Os Saltimbancos Trapalhões - Rumo a Hollywood", link: "https://pt.wikipedia.org/w/index.php?curid=6730657", imagem: "imagens/saltimbrancos.jpg" },
  { nome: "Ilhados com a Sogra", link: "https://pt.wikipedia.org/wiki/Ilhados_com_a_Sogra", imagem: "imagens/ilhados.jpg" },
  { nome: "Tem que Suar", link: "https://pt.wikipedia.org/wiki/Tem_que_Suar", imagem: "imagens/temquesuar.jpeg" },
  { nome: "O Dono do Lar", link: "#", imagem: "imagens/donodolar.jpeg" },
  { nome: "Mundo da Lua", link: "https://pt.wikipedia.org/w/index.php?curid=7626678", imagem: "imagens/mundodalua.jpg" },
  { nome: "Shark Tank", link: "https://pt.wikipedia.org/w/index.php?curid=4640077", imagem: "imagens/shark.jpg" },
  { nome: "O Shaolin do Sertão", link: "https://pt.wikipedia.org/w/index.php?curid=6247830", imagem: "imagens/shaolin.jpg" },
  { nome: "Túnel do Amor", link: "https://pt.wikipedia.org/w/index.php?curid=7110650", imagem: "imagens/tuneldoamor.jpg" },
  
  { nome: "Perfekta: Uma Aventura da Escola de Gênios", link: "https://pt.wikipedia.org/wiki/Perfekta:_Uma_Aventura_da_Escola_de_G%C3%AAnios", imagem: "imagens/perfekta.jpg" },
  { nome: "Abdelmassih", link: "#", imagem: "imagens/abdelmassih.jpeg" },
  // Adicione mais projetos aqui
];
let paginaAtual = 0;
const MAX_POR_PAGINA = 4;

function renderizarProjetos() {
  const grade = document.getElementById("grade-videos");
  grade.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const inicio = paginaAtual * MAX_POR_PAGINA;
  const fim = inicio + MAX_POR_PAGINA;
  const projetosPagina = projetos.slice(inicio, fim);

  projetosPagina.forEach(projeto => {
    const card = document.createElement("article");
    card.className = "cartao-video";
    card.innerHTML = `
      <a class="thumb" href="${projeto.link}" target="_blank" rel="noopener">
        <img loading="lazy" src="${projeto.imagem}" alt="${escapeHtml(projeto.nome)}">
      </a>
      <h4>${escapeHtml(projeto.nome)}</h4>
    `;
    fragment.appendChild(card);
  });

  grade.appendChild(fragment);
  atualizarControles();
}

function atualizarControles() {
  const btnPrev = document.getElementById("btn-anterior");
  const btnNext = document.getElementById("btn-proximo");

  const totalPaginas = Math.ceil(projetos.length / MAX_POR_PAGINA);

  btnPrev.hidden = paginaAtual === 0;
  btnNext.hidden = paginaAtual >= totalPaginas - 1;
}

// Navegação
document.addEventListener("DOMContentLoaded", () => {
  const btnPrev = document.getElementById("btn-anterior");
  const btnNext = document.getElementById("btn-proximo");

  if (btnPrev) btnPrev.addEventListener("click", () => {
    if (paginaAtual > 0) paginaAtual--;
    renderizarProjetos();
  });

  if (btnNext) btnNext.addEventListener("click", () => {
    const totalPaginas = Math.ceil(projetos.length / MAX_POR_PAGINA);
    if (paginaAtual < totalPaginas - 1) paginaAtual++;
    renderizarProjetos();
  });

  renderizarProjetos();
});

// util para evitar quebrar HTML com caracteres especiais
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ANIMAÇÃO DE SURGIMENTO
function animarScroll() {
  const elementos = document.querySelectorAll('.surgir, .surgir-direita, .surgir-esquerda, .surgir-baixo');
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;
    if (posicao < alturaTela - 100) {
      el.classList.add('aparecendo');
    } else {
      el.classList.remove('aparecendo');
    }
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);


