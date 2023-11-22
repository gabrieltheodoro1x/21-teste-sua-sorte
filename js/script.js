let bot = document.getElementById("botao");
let pass = document.getElementById("passar");
let somaPlayer = document.getElementById("soma");
let somaComputador = document.getElementById("somac");
let breaks = 0;
let numbers = [];
let numbersComputador = [];


function vencedor(){
    let p = 0;
    let c = 0;
    if(breaks >= 2){
        if(somaPlayer <= 21){
            p = 1;
        }else if(somaPlayer > 21){
            p = 2;
        }

        if(somaComputador <= 21){
            c = 1;
        }else if(somaComputador > 21){
            c = 2;
        }

        if(p == 1 && c == 2){
            window.alert("Vc ganhou");
        }else if(p == 2 && c == 1){
            window.alert("Vc perdeu");
        }else if(p == 2 && c == 2){
            if(p>c){
                window.alert("Vc perdeu"); 
            }else{
                window.alert("Vc ganhou");
            }
        }else if(p == 1 && c == 1){
            if(p>c){
                window.alert("Vc ganhou"); 
            }else{
                window.alert("Vc perdeu");
            }
        }
    }
}

let sim;
let nao;


bot.addEventListener('click', function f(){
    if(breaks >= 2){
        vencedor();
        bot.removeEventListener('click', f);
    }

    breaks +=1;
    let num = Math.random();
    let numc = Math.random();

    sim = num;
    nao = numc;

    //player
    if(num>0 && num<0.10){
        numbers.push(1);
    }
    else if(num>=0 && num<=0.10){
        numbers.push(2);
    }
    else if(num>0.1 && num<=0.20){
        numbers.push(3);
    }
    else if(num>0.2 && num<=0.30){
        numbers.push(4);
    }
    else if(num>0.3 && num<=0.40){
        numbers.push(5);
    }
    else if(num>0.4 && num<=0.50){
        numbers.push(6);
    }
    else if(num>0.5 && num<=0.60){
        numbers.push(7);
    }
    else if(num>0.6 && num<=0.70){
        numbers.push(8);
    }
    else if(num>0.7 && num<=0.80){
        numbers.push(9);
    }
    else if(num>0.8 && num<=0.90){
        numbers.push(10);
    }else if(num>0.9 && num<=1){
        numbers.push(11);
    }
    //computador
    if(numc>0 && numc<0.10){
        numbersComputador.push(1);
    }
    else if(numc>=0 && numc<=0.10){
        numbersComputador.push(2);
    }
    else if(numc>0.1 && numc<=0.20){
        numbersComputador.push(3);
    }
    else if(numc>0.2 && numc<=0.30){
        numbersComputador.push(4);
    }
    else if(numc>0.3 && numc<=0.40){
        numbersComputador.push(5);
    }
    else if(numc>0.4 && numc<=0.50){
        numbersComputador.push(6);
    }
    else if(numc>0.5 && numc<=0.60){
        numbersComputador.push(7);
    }
    else if(numc>0.6 && numc<=0.70){
        numbersComputador.push(8);
    }
    else if(numc>0.7 && numc<=0.80){
        numbersComputador.push(9);
    }
    else if(numc>0.8 && numc<=0.90){
        numbersComputador.push(10);
    }else if(numc>0.9 && numc<=1){
        numbersComputador.push(11);
    }

    let s = 0;
    let sc = 0;
    for(let i = 0; i<numbers.length; i++){
        s+= numbers[i];
        sc+= numbersComputador[i];
    }
    somaPlayer.innerHTML = s;
    somaComputador.innerHTML = sc;

})

pass.addEventListener('click', function(){
    if(breaks >= 2){
        vencedor();
    }
    breaks +=1;
})

