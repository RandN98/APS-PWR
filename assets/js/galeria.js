const imagensGaleria = [
  {
    src: "assets/img/tragedia/img_atropelamento_1.jpg",
    alt: "Imagem relacionada ao impacto das rodovias na fauna"
  },
  {
    src: "assets/img/tragedia/img_atropelamento_2.jpg",
    alt: "Imagem relacionada ao impacto das rodovias na fauna"
  },
  {
    src: "assets/img/tragedia/img_atropelamento_3.jpg",
    alt: "Imagem relacionada ao impacto das rodovias na fauna"
  }
];

let imagemAtual = 0;

const abrirGaleria = document.getElementById("abrirGaleria");
const fecharGaleria = document.getElementById("fecharGaleria");
const fecharGaleriaOverlay = document.getElementById("fecharGaleriaOverlay");
const modalGaleria = document.getElementById("modalGaleria");
const imagemGaleria = document.getElementById("imagemGaleria");
const legendaGaleria = document.getElementById("legendaGaleria");
const imagemAnterior = document.getElementById("imagemAnterior");
const proximaImagem = document.getElementById("proximaImagem");

function atualizarImagemGaleria() {
  imagemGaleria.src = imagensGaleria[imagemAtual].src;
  imagemGaleria.alt = imagensGaleria[imagemAtual].alt;

  legendaGaleria.textContent = `Imagem ${imagemAtual + 1} de ${imagensGaleria.length}`;
}

function abrirModalGaleria() {
  imagemAtual = 0;
  atualizarImagemGaleria();

  modalGaleria.classList.add("ativo");
  modalGaleria.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");
}

function fecharModalGaleria() {
  modalGaleria.classList.remove("ativo");
  modalGaleria.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

function mostrarImagemAnterior() {
  imagemAtual--;

  if (imagemAtual < 0) {
    imagemAtual = imagensGaleria.length - 1;
  }

  atualizarImagemGaleria();
}

function mostrarProximaImagem() {
  imagemAtual++;

  if (imagemAtual >= imagensGaleria.length) {
    imagemAtual = 0;
  }

  atualizarImagemGaleria();
}

abrirGaleria.addEventListener("click", abrirModalGaleria);
fecharGaleria.addEventListener("click", fecharModalGaleria);
fecharGaleriaOverlay.addEventListener("click", fecharModalGaleria);
imagemAnterior.addEventListener("click", mostrarImagemAnterior);
proximaImagem.addEventListener("click", mostrarProximaImagem);

document.addEventListener("keydown", function (event) {
  const galeriaEstaAberta = modalGaleria.classList.contains("ativo");

  if (!galeriaEstaAberta) {
    return;
  }

  if (event.key === "Escape") {
    fecharModalGaleria();
  }

  if (event.key === "ArrowLeft") {
    mostrarImagemAnterior();
  }

  if (event.key === "ArrowRight") {
    mostrarProximaImagem();
  }
});