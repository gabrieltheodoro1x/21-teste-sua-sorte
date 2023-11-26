<?php
// Inicia a sessão (se ainda não estiver iniciada)
session_start();

// Encerra a sessão
session_destroy();

// Redireciona para a página de login
header("Location: telainicial.html");
exit();
?>
