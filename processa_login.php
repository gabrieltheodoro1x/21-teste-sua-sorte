<?php
// Configurações do banco de dados
$host = 'localhost';
$dbname = 'blackjack';
$user = 'root';
$password = '';

// Conexão com o banco de dados
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}

// Função para validar o login
function validarLogin($usuario, $senha, $pdo) {
    try {
        $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE usuario = :usuario AND senha = :senha");
        $stmt->bindParam(':usuario', $usuario);
        $stmt->bindParam(':senha', $senha);
        $stmt->execute();

        // Verifica se há um usuário correspondente
        if ($stmt->rowCount() == 1) {
            return true; // Login válido
        } else {
            return false; // Login inválido
        }
    } catch (PDOException $e) {
        die("Erro ao validar o login: " . $e->getMessage());
    }
}

// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtém os dados do formulário
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Valida o login
    if (validarLogin($usuario, $senha, $pdo)) {
        // Login bem-sucedido, redireciona para index.html
        header("Location: index.html");
        exit();
    } else {
        echo "Login falhou. Verifique suas credenciais.";
    }
}
?>
