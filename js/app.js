let jogosAlugados = 0;
let jogosDisponiveis = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function contarEExibirJogosDisponíveis() {
    console.log(`Total de jogos disponíveis: ${jogosDisponiveis}`);
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //alert(nomeJogo.textContent);

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
            jogosDisponiveis++;
        }
    } else {
        // Adiciona uma confirmação antes de alugar o jogo
        if (confirm(`Você tem certeza que deseja alugar o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            jogosAlugados++;
            jogosDisponiveis--;
        }
    }

    contarEExibirJogosAlugados();
    contarEExibirJogosDisponíveis();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    jogosDisponiveis = document.querySelectorAll('.dashboard__item__img').length - jogosAlugados;
    contarEExibirJogosAlugados();
    contarEExibirJogosDisponíveis();
})