<?php
session_start();

    $_SESSION['email'] = $_POST['email'];
    $_SESSION['datum'] = $_POST['datum'];
    $_SESSION['time'] = $_POST['time'];
    $_SESSION['ort'] = $_POST['ort'];

    $_SESSION['hergang'] = $_POST['hergang'];
    $_SESSION['artundumfang'] = $_POST['artundumfang'];
    $_SESSION['zeugen'] = $_POST['zeugen'];

    $_SESSION['ersthelferda'] = $_POST['ersthelferda'];
    $_SESSION['eArtndUmfang'] = $_POST['eArtundUmfang'];
    $_SESSION['eZeugen'] = $_POST['eZeugen'];
    $_SESSION['ersthelfer'] = $_POST['ersthelfer'];


    if (!empty($_POST["sendmail"])) {
            $empfaenger = 'katja_koslowski@icloud.com, pascal.tobinski@gmx.de';
            $betreff = 'Neuer Verbandbucheintrag';
            $nachricht = 'Hallo, Es wurd ein neuer Eintrag hinzugefügt!' ;
            $header = 'From: webmaster@example.com' . "\r\n" .
                        'Reply-To: webmaster@example.com' . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();

    mail($empfaenger, $betreff, $nachricht, $header);
    console.log("Email gesendet!");

    }



?>