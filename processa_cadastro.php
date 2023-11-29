<?php
$servername = "localhost"; 
$username = "root";
$password = "";
$dbname = "blackjack";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

$usuario = $_POST['usuario']; 
$senha = $_POST['senha']; 


$sql = "INSERT INTO usuarios (usuario, senha) VALUES ('$usuario', '$senha')";

if ($conn->query($sql) === TRUE) {
    
    header("Location: telainicial.html");
    exit(); 
} else {
    echo "Erro ao cadastrar: " . $conn->error;
}

$conn->close();
?>
