

//--------Hochschulmitglied-----------------
//-----E-Mail---Datum/Uhrzeit---Ort-------//

$("#next1").click(function () {
    var email = $("#hm_emailValue").val();
    var datum = $("#hm_datumValue").val();
    var uhrzeit = $("#hm_zeitValue").val();
    var ort = $("#hm_ortValue").val();

    
    //LocalStorage
    sessionStorage.setItem("email", email);
    SessionStorage.setItem("datum", datum);
    SessionStorage.setItem("uhrzeit", uhrzeit);
    SessionStorage.setItem("ort", ort);


});




//--------Gast-----------------
//-----E-Mail---Datum/Uhrzeit---Ort-------//

$("#next1").click(function () {
    var email = $("#emailValue").val();
    var datum = $("#dateValue").val();
    var uhrzeit = $("#timeValue").val();
    var ort = $("#ortValue").val();
    $.post("./config/data.php", {"email": email});
    $.post("./config/data.php", {"datum": datum});
    $.post("./config/data.php", {"time": time});
    $.post("./config/data.php", {"ort": ort});


});




//-----Hergang---Art und Umfang---Zeugen-------//

$("#next2").click(function () {
    var umfang = $("#umfangValue").val();
    var artundumfang = $("#dateValue").val();
    var zeugen = $("#timeValue").val();
   
});





//--------Ersthelfer----------//

$("#nexttest").click(function(){

   var ersthelferda = $("#radiogroup input[type='radio']:checked").val();
   var eArtundWeise = $("#eArtundWeise").val();
   var eZeugen = $("#eZeugen").val();
   var ersthelfer = $( "#ersthelferListe option:selected" ).text();

   $.post("./config/data.php", {"ersthelferda": ersthelferda});
   $.post("./config/data.php", {"eArtndUmfang": eArtundWeise});
   $.post("./config/data.php", {"eZeugen": eZeugen});
   $.post("./config/data.php", {"ersthelfer": ersthelfer});

});


$("#submit").click(function(){

    let session_email = sessionStorage.getItem("email");
    let session_datum = sessionStorage.getItem("datum");
    let session_zeit = sessionStorage.getItem("zeit");
    let session_ort = sessionStorage.getItem("ort");
    

    $.post("./config/data.php", {
        "email": session_email,
        "datum": session_datum,
        "zeit": session_zeit,
        "ort": session_ort,
        "sendmail": "send"
    });
    console.log("gesendet!");
    alert("gesendet!");
 });




console.log("script.js ist geladen!")