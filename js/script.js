
let nj = document.getElementById('novoJogo');
let cp = document.getElementById('comprar');
let pa = document.getElementById('parar');
let res = document.getElementById('resultado');
let ponto = document.getElementById('ponto');
let n1 = document.getElementById('name1');
let p1 = document.getElementById('pos1');
let n2 = document.getElementById('name2');
let p2 = document.getElementById('pos2');
let count = 0;
let count2 = 0;

nj.addEventListener('click', iniciarJogo);
cp.addEventListener('click', comprar);
pa.addEventListener('click', parar);

let pontuacaoJogador, pontuacaoComputador, cartasJogador, cartasComputador, jogoEncerrado;

count = parseInt(localStorage.getItem('pontuacaoTotal')) || 0;
ponto.innerHTML = 'Pontuação Total: ' + count;

count2 = parseInt(localStorage.getItem('pontuacaoTotalC')) || 0;

if (count > count2) {
    n1.innerHTML = "Player";
    p1.innerHTML = count;
    n2.innerHTML = "Computador";
    p2.innerHTML = count2;
} else if (count < count2) {
    n2.innerHTML = "Player";
    p2.innerHTML = count;
    n1.innerHTML = "Computador";
    p1.innerHTML = count2;
}


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
        count+=1;
        jogoEncerrado = true;
        encerrarJogo();
    }

    if (pontuacaoJogador > 21) {
        res.innerHTML = 'Você estourou! Computador vence!';
        count2+=1;
        jogoEncerrado = true;
        encerrarJogo();
    }

    if (pontuacaoComputador === 21) {
        res.innerHTML = 'Computador fez Blackjack. Você perdeu!';
        count2+=1;
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
        count+=1;
        ponto.innerHTML = 'Pontuação Total: '+ count;
        localStorage.setItem('pontuacaoTotal', count);
        jogoEncerrado = true;
        encerrarJogo();
    } else if (pontuacaoComputador > pontuacaoJogador) {
        count2+=1;
        res.innerHTML  = 'Computador vence!';
        localStorage.setItem('pontuacaoTotal', count);
        localStorage.setItem('pontuacaoTotalC', count2);
        jogoEncerrado = true;
        encerrarJogo();
    } else if (pontuacaoComputador < pontuacaoJogador) {
        res.innerHTML = 'Você venceu!';
        count+=1;
        ponto.innerHTML = 'Pontuação Total: '+ count;
        localStorage.setItem('pontuacaoTotal', count);
        jogoEncerrado = true;
        encerrarJogo();
    } else {
        res.innerHTML  = 'Empate!';
        localStorage.setItem('pontuacaoTotal', count);
        jogoEncerrado = true;
        encerrarJogo();
    }


}

function encerrarJogo() {
    
    nj.disabled = false;
    cp.disabled = true;
    pa.disabled = true;
    localStorage.setItem('pontuacaoTotal', count);
    localStorage.setItem('pontuacaoTotalC', count2);
    if (count > count2) {
        n1.innerHTML = "Player";
        p1.innerHTML = count;
        n2.innerHTML = "Computador";
        p2.innerHTML = count2;
    } else if (count < count2) {
        n2.innerHTML = "Player";
        p2.innerHTML = count;
        n1.innerHTML = "Computador";
        p1.innerHTML = count2;
    }
}
