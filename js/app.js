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
/*
//FUNCTION DECLARATION EXAMPLE
essaPalavraEUmPalindromo();
function essaPalavraEUmPalindromo () {
    var palavra = "rever";
    var separandoAsLetrasDaPalavra = palavra.split("");
    console.log(separandoAsLetrasDaPalavra);
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`);
    } else {
        console.log(`A palavra ${palavra} NÃO é um palíndromo!`);
    }
}
*/

//FUNCTION EXPRESSION EXAMPLE
const essaPalavraEUmPalindromo = function(palavra) {
    //var palavra = "rever";
    // Normalize a string para remover os acentos e converter para minúsculas
    const palavraNormalizada = palavra
        .normalize("NFD") // Decompõe as letras combinadas em letras base e diacríticos(acentos)
        .replace(/[\u0300-\u036f]/g, "") // Remove os diacríticos
        .replace(/[^a-z0-9]/gi, "") // Remove caracteres não alfanuméicos(incluindo espaços e pontuações)
        .toLowerCase(); // Converte para minúsculas

    // Classifica o tipo de entrada
    let tipoEntrada;
    let artigo = "A";
    if (/^\d+$/.test(palavraNormalizada)) {
        tipoEntrada = "número";
        artigo = "O";
    } else if (/^\w+$/.test(palavra)) { // Verifica se é uma única palavra (com ou sem acentos)
        tipoEntrada = "palavra";
    } else {
        tipoEntrada = "frase"; // Qualquer outra entrada é considerada uma frase
    }

    // Reverte para a string normalizada
    let separandoAsLetrasDaPalavra = palavraNormalizada.split("");
    console.log(separandoAsLetrasDaPalavra);
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    // Verifica se a string normalizada é igual à sua versão invertida
    if (palavraNormalizada === palavraInvertida) {
        console.log(`${artigo} ${tipoEntrada} ${palavra} é um palíndromo!`);
    } else {
        console.log(`${artigo} ${tipoEntrada} ${palavra} NÃO é um palíndromo!`);
    }
}

// Casos de teste
essaPalavraEUmPalindromo("rever"); // Deve detectar como palíndromo
essaPalavraEUmPalindromo("Radar"); // Deve detectar como palíndromo
essaPalavraEUmPalindromo("afã"); // Deve detectar como palíndromo
essaPalavraEUmPalindromo("aérea"); // Deve detectar como palíndromo
essaPalavraEUmPalindromo("somÁvamos"); // Deve detectar como palíndromo
essaPalavraEUmPalindromo("nada"); // Não deve detectar como palíndromo
essaPalavraEUmPalindromo("101"); // Deve detectar como palíndromo
essaPalavraEUmPalindromo("0101"); // Não deve detectar como palíndromo
essaPalavraEUmPalindromo("Socorram-me, subi no ônibus em Marrocos"); // Deve detectar como palíndromo
essaPalavraEUmPalindromo("A vida é uma só e não pode ser repetida"); // Não deve detectar como palíndromo

// Permite que o usuário insira uma palavra, frase ou número pelo console
const entradaUsuario = prompt("Digite uma palavra, frase ou número para verificar se é um palíndromo:");
if(entradaUsuario) {
    essaPalavraEUmPalindromo(entradaUsuario);
} else {
    console.log("Nenhuma entrada fornecida.");
}

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados> 1, 3, 5"