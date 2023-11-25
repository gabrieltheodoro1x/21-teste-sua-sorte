// var logado = false;

// if(localStorage.getItem("acesso") == "True"){
//     logado = true;
// }

// if(logado != true){
//     alert("Não esta autenticado");
//     windows.location.href = "login.html"
    
// }

function cadastrar(){
    var usu = document.getElementById("usuarioCad");
    var senha = document.getElementById("senhaCad");
    localStorage.setItem("usuario", String(usu.value));
    localStorage.setItem("senha", String(senha.value));
    window.location.href = "telainicial.html";
}

function logar(){
    var usu = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    if(usu.value == localStorage.usuario && senha.value == localStorage.senha){
        
        localStorage.setItem("acesso", true);
        
        window.location.href = "index.html";
    }else{
        window.alert("Invalido.");
    }
}