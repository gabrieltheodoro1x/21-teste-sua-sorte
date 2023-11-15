let bot = document.getElementById("botao");
let soma = document.getElementById("soma");
let breaks = 0;
let numbers = [];

bot.addEventListener('click', function(){
    breaks +=1;
    let num = Math.random();
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
    }
    let s = 0;
    for(let i = 0; i<numbers.length; i++){
        s+= numbers[i];
    }
    soma.innerHTML = s;

})
