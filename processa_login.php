<?php
$host = 'localhost';
$dbname = 'blackjack';
$user = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}


function validarLogin($usuario, $senha, $pdo) {
    try {
        $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE usuario = :usuario AND senha = :senha");
        $stmt->bindParam(':usuario', $usuario);
        $stmt->bindParam(':senha', $senha);
        $stmt->execute();

       
        if ($stmt->rowCount() == 1) {
            return true;
        } else {
            return false;
        }
    } catch (PDOException $e) {
        die("Erro ao validar o login: " . $e->getMessage());
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    if (validarLogin($usuario, $senha, $pdo)) {
        header("Location: index.html");
        exit();
    } else {
        echo "Login falhou. Verifique suas credenciais.";
    }
}
?>
