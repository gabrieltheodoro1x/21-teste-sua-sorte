
let nj = document.getElementById('novoJogo');
let cp = document.getElementById('comprar');
let pa = document.getElementById('parar');
let res = document.getElementById('resultado');

nj.addEventListener('click', iniciarJogo);
cp.addEventListener('click', comprar);
pa.addEventListener('click', parar);

let pontuacaoJogador, pontuacaoComputador, cartasJogador, cartasComputador, jogoEncerrado;

function iniciarJogo() {
    pontuacaoJogador = 0;
    pontuacaoComputador = 0;
    cartasJogador = [];
    cartasComputador = [];
    jogoEncerrado = false;
    res.innerHTML = '';
    nj.disabled = true;
    cp.disabled = false;
    pa.disabled = false;

    cartasJogador.push(obterProximaCarta());
    cartasJogador.push(obterProximaCarta());
    cartasComputador.push(obterProximaCarta());

    atualizarPontuacoes();
}

function obterProximaCarta() {
    const cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const indiceAleatorio = Math.floor(Math.random() * cartas.length);
    const carta = cartas[indiceAleatorio];
    return carta;
}

function obterValorCarta(carta) {
    if (carta === 'K' || carta === 'Q' || carta === 'J') {
        return 10;
    } else if (carta === 'A') {
        return 11;
    } else {
        return parseInt(carta);
    }
}

function atualizarPontuacoes() {
    pontuacaoJogador = calcularPontuacao(cartasJogador);
    pontuacaoComputador = calcularPontuacao(cartasComputador);

    document.getElementById('pontuacaoJogador').innerHTML = 'Sua pontuação: ' + pontuacaoJogador;
    document.getElementById('pontuacaoComputador').innerHTML = 'Pontuação do Computador: ' + pontuacaoComputador;

    if (pontuacaoJogador === 21 && cartasJogador.length === 2) {
        res.innerHTML = 'Blackjack! Você venceu!';
        jogoEncerrado = true;
        encerrarJogo();
    }

    if (pontuacaoJogador > 21) {
        res.innerHTML = 'Você estourou! Computador vence!';
        jogoEncerrado = true;
        encerrarJogo();
    }

    if (pontuacaoComputador === 21) {
        res.innerHTML = 'Computador fez Blackjack. Você perdeu!';
        jogoEncerrado = true;
        encerrarJogo();
    }
}

function calcularPontuacao(cartas) {
    let pontuacao = 0;
    let countAs = 0;

    for (const carta of cartas) {
        pontuacao += obterValorCarta(carta);

        if (carta === 'A') {
            countAs++;
        }
    }

    while (countAs > 0 && pontuacao > 21) {
        pontuacao -= 10;
        countAs--;
    }

    return pontuacao;
}


function comprar() {
    if (jogoEncerrado == true) return;

    cartasJogador.push(obterProximaCarta());
    atualizarPontuacoes();
}

function parar() {
    if (jogoEncerrado == true) return;

    while (pontuacaoComputador < 17) {
        cartasComputador.push(obterProximaCarta());
        atualizarPontuacoes();
    }

    if (pontuacaoComputador > 21) {
        res.innerHTML  = 'Computador estourou. Você venceu!';
    } else if (pontuacaoComputador > pontuacaoJogador) {
        res.innerHTML  = 'Computador vence!';
    } else if (pontuacaoComputador < pontuacaoJogador) {
        res.innerHTML = 'Você venceu!';
    } else {
        res.innerHTML  = 'Empate!';
    }

    jogoEncerrado = true;
    encerrarJogo();
}

function encerrarJogo() {
    nj.disabled = false;
    cp.disabled = true;
    pa.disabled = true;
}

