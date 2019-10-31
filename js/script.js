
//--------Globale Variablen-----------------
let hochschulmitglied = true;

//--------Hochschulmitglied-----------------
//-----E-Mail---Datum/Uhrzeit---Ort-------//

$("#next_hm").click(function () {
    var email = $("#hm_emailValue").val();
    var datum = $("#hm_datumValue").val();
    var uhrzeit = $("#hm_zeitValue").val();
    var ort = $("#hm_ortValue").val();

    //LocalStorage
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("datum", datum);
    sessionStorage.setItem("uhrzeit", uhrzeit);
    sessionStorage.setItem("ort", ort);

    console.log("Hochschulmitglied hat geklappt!")

});




//--------Gast-----------------
//-----E-Mail---Datum/Uhrzeit---Ort-------//

$("#next_guest").click(function () {
    hochschulmitglied = false;
    var email = $("#gast_vornameNachname").val();
    var datum = $("#gast_datum").val();
    var uhrzeit = $("#gast_zeit").val();
    var ort = $("#gast_ort").val();
    
    //LocalStorage
    sessionStorage.setItem("gast_email", email);
    sessionStorage.setItem("gast_datum", datum);
    sessionStorage.setItem("gast_uhrzeit", uhrzeit);
    sessionStorage.setItem("gast_ort", ort);

    console.log("Hochschulmitglied hat geklappt!")


});




//-----Hergang---Art und Umfang---Zeugen-------//

$("#next_hergang").click(function () {
    var umfang = $("#hergangValue").val();
    var artundumfang = $("#artUmfangValue").val();
    var zeugen = $("#zeugenValue").val();
   
    //LocalStorage
    sessionStorage.setItem("hergang", umfang);
    sessionStorage.setItem("artUmfang", artundumfang);
    sessionStorage.setItem("zeugen", zeugen);
});

console.log("Hergang hat geklappt!")



//--------Ersthelfer----------//
/*
$("#next_ersthelfer").click(function(){

   var ersthelferda = $("#radiogroup input[type='radio']:checked").val();
   var eArtundWeise = $("#eArtundWeise").val();
   var eZeugen = $("#eZeugen").val();
   var ersthelfer = $( "#ersthelferListe option:selected" ).text();

   console.log("Ersthelfer hat geklappt!")
});

*/
$("#submit").click(function(){


    //Hochschulmitglied
    let session_email = sessionStorage.getItem("email");
    let session_datum = sessionStorage.getItem("datum");
    let session_zeit = sessionStorage.getItem("zeit");
    let session_ort = sessionStorage.getItem("ort");
    console.log("Es handelt sich um ein Hochschulmitglied")
 
    //Gast
    if(hochschulmitglied == false){
        let session_gast_email = sessionStorage.getItem("gast_email");
        let session_gast_datum = sessionStorage.getItem("gast_datum");
        let session_gast_zeit = sessionStorage.getItem("gast_zeit");
        let session_gast_ort = sessionStorage.getItem("gast_ort");
        console.log("Es handelt sich um einen Gast")
    }
    

    let session_hergang = sessionStorage.getItem("hergang");
    let session_artUmfang = sessionStorage.getItem("artUmfang");
    let session_zeugen = sessionStorage.getItem("zeugen");

    console.log("Alle Sessionvariablen wurden ausgelesen!")
    
    $.post("./config/data.php", {
        "email": session_email,
        "datum": session_datum,
        "zeit": session_zeit,
        "zeit": session_ort,
        "hergang": session_hergang,
        "artumfang": session_artUmfang,
        "zeugen": session_zeugen,
        "sendmail": "send"
    });
    console.log("gesendet!");
    alert("gesendet!");
 });




console.log("script.js ist geladen!")