<?php



    $_SESSION['email'] = $_POST['email'];
    $_SESSION['datum'] = $_POST['datum'];
    $_SESSION['zeit'] = $_POST['zeit'];
    $_SESSION['ort'] = $_POST['ort'];

    $_SESSION['hergang'] = $_POST['hergang'];
    $_SESSION['artundumfang'] = $_POST['artundumfang'];
    $_SESSION['zeugen'] = $_POST['zeugen'];

    $_SESSION['ersthelferda'] = $_POST['ersthelferda'];
    $_SESSION['eArtndUmfang'] = $_POST['eArtundUmfang'];
    $_SESSION['eZeugen'] = $_POST['eZeugen'];
    $_SESSION['ersthelfer'] = $_POST['ersthelfer'];


    if (!empty($_POST["sendmail"])) {


 
    // mehrere Empfänger
    $empfaenger  = 'pascal.tobinski@gmx.de'; // beachte das Komma
    
    // Betreff
    $betreff = 'Neuer Eintrag! - EVB';
    
    // Nachricht
    $nachricht = '
    <html>
    <head>
      <title>Dokumentation von Erste-Hilfe-Leistungen</title>
    </head>
    <body>
      <p>Hier sind die Geburtstage im August:</p>
      <table>
        <tr>
          <th>Dokumentation von Erste-Hilfe-Leistungen</th>
        </tr>
        <tr>
          <td><strong>Name der verletzten bzw. erkrankten Person (Ostfaliamail)<strong></td>
        </tr>
        <tr>
          <td>' . $_SESSION['email'] .' </td>
        </tr>
        <tr>
          <td><strong>Datum/Uhrzeit<strong></td>
        </tr>
        <tr>
          <td>'. $_SESSION['datum'] . '</td>
        </tr>
        <tr>
          <td><strong>Hergang:<strong></td>
        </tr>
        <tr>
          <td>'. $_SESSION['hergang'] . '</td>
        </tr>
        <tr>
          <td><strong>Art und Umfang der Verletzung/Erkrankung<strong></td>
        </tr>
        <tr>
          <td>'. $_SESSION['artundumfang'] . '</td>
        </tr>
        <tr>
          <td><strong>Name der Zeugen<strong></td>
        </tr>
        <tr>
          <td>'. $_SESSION['zeugen'] . '</td>
        </tr>
        <tr>
          <th><strong>Erste-Hilfe-Leistungen<strong></th>
        </tr>
        <tr>
          <td><strong>Datum/Uhrzeit<strong></td>
        </tr>
        <tr>
          <td>[Datum und Uhrzeit]</td>
        </tr>
        <tr>
          <td>Art und Weise der Erste-Hilfe-Maßnahmen</td>
        </tr>
        <tr>
          <td>[Art und Weise]</td>
        </tr>
        <tr>
          <td>Name des Ersthelfers/ der Ersthelferin</td>
        </tr>
        <tr>
          <td>[Name des Ersthelfers]</td>
        </tr>
      </table>
    </body>
    </html>
    ';
    
    // für HTML-E-Mails muss der 'Content-type'-Header gesetzt werden
    $header[] = 'MIME-Version: 1.0';
    $header[] = 'Content-type: text/html; charset=iso-8859-1';
    
    // zusätzliche Header
    //$header[] = 'To: Simone <simone@example.com>, Andreas <andreas@example.com>';
    $header[] = 'From: Elektronisches Verbandbuch <EVB@testmail.com>';
    //$header[] = 'Cc: geburtstagsarchiv@example.com';
    //$header[] = 'Bcc: geburtstagscheck@example.com';
    
    // verschicke die E-Mail
    mail($empfaenger, $betreff, $nachricht, implode("\r\n", $header));
    }



?>