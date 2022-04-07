const divImagens = document.querySelectorAll(".quartos-img");

function adicionarImagens() {
  divImagens.forEach((valor, posicao) => {
    valor.style.backgroundImage = `url('../imagens/nossos-servicos/img${posicao}.jpg')`;
  });
}

adicionarImagens();
