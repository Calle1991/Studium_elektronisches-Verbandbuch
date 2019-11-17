<?php session_start(); 
include('./config/data.php');
include('./config/conf.php');
?>
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/formular.css">
    <link rel="stylesheet" href="css/decorator.css">


    <title>Elektronisches Verbandbuch</title>
</head>

<div class="wrapper">

    <?php
include('./pages/header.php');
include('./config/runtime.php');
include('./pages/footer.php');
?>

</div>


<script src="js/jquery.js"></script>
<script src="js/script.js"></script>


</html>