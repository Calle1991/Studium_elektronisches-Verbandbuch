<?php



    $_SESSION["email"] = $_POST["email"];
    $_SESSION["datum"] = $_POST["datum"];
    $_SESSION["zeit"] = $_POST["zeit"];
    $_SESSION["ort"] = $_POST["ort"];

    $_SESSION["hergang"] = $_POST["hergang"];
    $_SESSION["artundumfang"] = $_POST["artundumfang"];
    $_SESSION["zeugen"] = $_POST["zeugen"];

    $_SESSION["ersthelferartundweise"] = $_POST["ersthelferartundweise"];
    $_SESSION["ersthelferdatum"] = $_POST["ersthelferdatum"];
    $_SESSION["ersthelfername"] = $_POST["ersthelfername"];


    if (!empty($_POST["sendmail"])) {
 
    // mehrere Empfänger
    $empfaenger  = $_SESSION["email"]; // beachte das Komma
    
    // Betreff
    $betreff = "Neuer Eintrag! - EVB";
    
    // Nachricht
    $nachricht = '
    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Elektronisches Verbandbuch der Ostfalia</title>
    </head>
    
    <style>
    body{
      font-family:Arial, Helvetica, sans-serif
    }
    
    table {
      width: 80%;
      border: solid black 1px;
    }
    
    table td{
      border-top: solid black 1px;
    }
    
    .heading{
      text-align: center;
      height: 50px;
      background-color: grey;
      color:white;
      font-size: 15px;
    }
    
    </style>
    
    
    <body>
    
      <table>
        <th>
          <h2>Dokumentation von Erste-Hilfe-Leistungen</h2>
          <p>($24 Abs. 6 DGUV Vorschrift 1 "Grundsätze der Prävention")</p>
        </th>
        <tr>
          <td class="heading">
            <p>Angaben zum Hergang des Unfalls bzw. des Gesundheitsschadens</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Name der verletzten bzw. erkrankten Person</p>
            <p>'. $_SESSION["email"] .'</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Datum / Uhrzeit</p>
            <p>Datum: '. $_SESSION["datum"] .' Uhrzeit: '. $_SESSION["zeit"] .'</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Ort:</p>
            <p>'. $_SESSION["ort"] .'</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Hergang:</p>
            <p>'. $_SESSION["hergang"] .'</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Art und Umfang der Verletzung/Erkrankung:</p>
            <p>'. $_SESSION["artundumfang"] .'</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Name der Zeugen:</p>
            <p>'.$_SESSION["zeugen"].'</p>
          </td>
        </tr>
        <th class="heading">
          <p >Erste-Hilfe-Leistungen</p>
        </th>
        <tr>
          <td>
            <p>Datum / Uhrzeit</p>
            <p>Datum: '. $_SESSION["ersthelferdatum"] .'</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Art und Weise der Erste-Hilfe-Maßnahme:</p>
            <p>'. $_SESSION["ersthelferartundweise"] .'</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Name des Ersthelfers/ der Ersthelferin:</p>
            <p>'. $_SESSION["ersthelfername"] .'</p>
          </td>
        </tr>
      </table>
    <br>
    
    <table>
      <th>
        <h2>Weitere Informationen</h2>
      </th>
      <tr>
        <td>
          <p>Verbandkastennummer:</p>
          <p>[Verbandkastennummer]</p>
        </td>
      </tr>
        <tr>
            <td>
              <p>Verbandkastenort:</p>
              <p>[verbandkastenort]</p>
            </td>
          </tr>
          <th class="heading">
              <p >Entnommene Materialien</p>
            </th>
            <tr>
                <td>
                  <p>Materialien entnommen:</p>
                  <p>[Materialien]</p>
                </td>
              </tr>
    </table>
    
    
    
    
    </body>
    
    </html>




    ';
    
    // für HTML-E-Mails muss der "Content-type"-Header gesetzt werden
    $header[] = "MIME-Version: 1.0";
    $header[] = "Content-type: text/html; charset=iso-8859-1";
    
    // zusätzliche Header
    //$header[] = "To: Simone <simone@example.com>, Andreas <andreas@example.com>";
    $header[] = "From: Elektronisches Verbandbuch <EVB@testmail.com>";
    //$header[] = "Cc: geburtstagsarchiv@example.com";
    //$header[] = "Bcc: geburtstagscheck@example.com";
    
    // verschicke die E-Mail
    mail($empfaenger, $betreff, $nachricht, implode("\r\n", $header));
    }



?>