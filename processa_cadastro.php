<?php
// Conectar ao banco de dados
$servername = "localhost";  // ou outro endereço, se aplicável
$username = "root";
$password = "";
$dbname = "blackjack";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Receber dados do formulário
$usuario = $_POST['usuario']; // Nome do campo no formulário
$senha = $_POST['senha']; // Nome do campo no formulário

// Inserir dados no banco de dados
$sql = "INSERT INTO usuarios (usuario, senha) VALUES ('$usuario', '$senha')";

if ($conn->query($sql) === TRUE) {
    // Redirecionar para a tela inicial após o cadastro
    header("Location: telainicial.html");
    exit();  // Certifique-se de sair após o redirecionamento
} else {
    echo "Erro ao cadastrar: " . $conn->error;
}

// Fechar a conexão
$conn->close();
?>
