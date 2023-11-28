
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

cheet('a b a', function () {
    window.location.href = "egg.html";
    
});


function iniciarJogo() {
    pontuacaoJogador = 0;
    pontuacaoComputador = 0;
    cartasJogador = [];
    cartasComputador = [];
    jogoEncerrado = false;
    res.innerHTML = 'aaaaaaaaaaaaaaaaaaa';
    res.style.visibility = "hidden";
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

    document.getElementById('pontuacaoJogador').innerHTML = pontuacaoJogador;
    document.getElementById('pontuacaoComputador').innerHTML = pontuacaoComputador;

    if (pontuacaoJogador === 21 && cartasJogador.length === 2) {
        res.style.visibility = "visible";
        res.innerHTML = 'Blackjack! Você venceu!';
        count+=1;
        jogoEncerrado = true;
        encerrarJogo();
    }

    if (pontuacaoJogador > 21) {
        res.style.visibility = "visible";
        res.innerHTML = 'Você estourou! Computador vence!';
        count2+=1;
        jogoEncerrado = true;
        encerrarJogo();
    }

    if (pontuacaoComputador === 21) {
        res.style.visibility = "visible";
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
        res.style.visibility = "visible";
        res.innerHTML  = 'Computador estourou. Você venceu!';
        count+=1;
        ponto.innerHTML = 'Pontuação Total: '+ count;
        localStorage.setItem('pontuacaoTotal', count);
        jogoEncerrado = true;
        encerrarJogo();
    } else if (pontuacaoComputador > pontuacaoJogador) {
        count2+=1;
        res.style.visibility = "visible";
        res.innerHTML  = 'Computador vence!';
        localStorage.setItem('pontuacaoTotal', count);
        localStorage.setItem('pontuacaoTotalC', count2);
        jogoEncerrado = true;
        encerrarJogo();
    } else if (pontuacaoComputador < pontuacaoJogador) {
        res.style.visibility = "visible";
        res.innerHTML = 'Você venceu!';
        count+=1;
        ponto.innerHTML = 'Pontuação Total: '+ count;
        localStorage.setItem('pontuacaoTotal', count);
        jogoEncerrado = true;
        encerrarJogo();
    } else {
        res.style.visibility = "visible";
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


document.addEventListener('DOMContentLoaded', function () {
    const cor = document.querySelectorAll('.cor');
    const resetar = document.querySelector('.resetar');
    const el = document.querySelector('.abs');
    const ela = document.querySelector('.a');
    const fre1 = document.getElementById('frente');
    const fre2 = document.getElementById('frente2');

    for (let i = 0; i < cor.length; i++) {
        const op = cor[i];

        op.addEventListener('click', function () {
            const corselec = this.getAttribute('data-color');
            el.style.backgroundColor = corselec;
            ela.style.backgroundColor = corselec;
            fre1.style.backgroundColor = corselec;
            fre2.style.backgroundColor = corselec;
        });

        resetar.addEventListener('click', function () {
            const pad1 = '#1abc9c';
            const pad2 = '#333';
            el.style.backgroundColor = pad2;
            ela.style.backgroundColor = pad1;
            fre1.style.backgroundColor = pad1;
            fre2.style.backgroundColor = pad1;
        });
    }
});
