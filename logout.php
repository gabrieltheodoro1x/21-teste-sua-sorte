<?php
session_start();

session_destroy();

header("Location: telainicial.html");
exit();
?>
