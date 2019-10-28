

//--------Hochschulmitglied-----------------
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
    var umfang = $("#emailValue").val();
    var artundumfang = $("#dateValue").val();
    var zeugen = $("#timeValue").val();
   
    $.post("./config/data.php", {"umfang": umfang});
    $.post("./config/data.php", {"artundumfang": artundumfang});
    $.post("./config/data.php", {"zeugen": zeugen});

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
    $.post("./config/data.php", {"sendmail": "send"});
    console.log("gesendet!");
    alert("gesendet!");
 });




console.log("script.js ist geladen!")