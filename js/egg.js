const btn = document.querySelector('#text-submit');

btn.addEventListener("click", function(){
    const name = document.querySelector('#text-input');
    const value = name.value;
    
    if(value == "Cassinos"){
        window.location.href = "index.html";
        
    }
    else if(value == "cassinos"){
        window.location.href = "index.html";
    }

});