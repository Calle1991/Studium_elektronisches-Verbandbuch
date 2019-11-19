
//--------Globale Variablen-----------------
let hochschulmitglied = true;
let aktuellezeit = 0;
let aktuellesdatum = 0;
let verbandkastennummer = 1;

//--------aktuelle Zeit berechnen-----------------
a = new Date();
b = a.getHours();
c = a.getMinutes();
d = a.getSeconds();
aktuellezeit = b + ':' + c + ':' + d;

//--------aktuelles Datum ermitteln-----------------
const heute = new Date(); // aktuelles Datum und aktuelle Zeit
aktuellesdatum = heute.toLocaleDateString();


//--------MODAL-----------------
let modalhintergrund = $("#modalhintergrund");
$(document).on('click touch', function (event) {
    if (event.target.id == 'modalhintergrund') {
        modalhintergrund.fadeOut("100", function () {
            modalhintergrund.css("display", "none");
            modalhintergrund.children().css("display", "none");
        })
    }
});


$(document).on('click touch', function (event) {
    let modalhintergrund = $("#modalhintergrund");
    if (event.target.id == 'closebutton') {
        modalhintergrund.fadeOut("100", function () {
            modalhintergrund.css("display", "none");
            modalhintergrund.children().css("display", "none");
        })
    }
});

//-----MAINMENU.PHP--------//
let mainmenu = $("#mainmenu");
mainmenu.css("display", "none");
mainmenu.fadeIn();


//-----VERBANDHILFE.PHP--------//
let auswahl1 = $("#auswahl1");
let auswahl2 = $("#auswahl2");
let auswahl3 = $("#auswahl3");
let auswahl4 = $("#auswahl4");
let modalcontent1 = $("#modalcontent1");
let modalcontent2 = $("#modalcontent2");
let modalcontent3 = $("#modalcontent3");
let modalcontent4 = $("#modalcontent4");

auswahl1.click(function () {
    modalhintergrund.css("display", "block");
    modalcontent1.css("display", "block");
});

auswahl2.click(function () {
    modalhintergrund.css("display", "block");
    modalcontent2.css("display", "block");
});

auswahl3.click(function () {
    modalhintergrund.css("display", "block");
    modalcontent3.css("display", "block");
});


auswahl4.click(function () {
    modalhintergrund.css("display", "block");
    modalcontent4.css("display", "block");
});


//-----EINTRAG.PHP--------//

//Animation
let eintragmenu = $("#eintragmenu");
eintragmenu.css("display", "none");
eintragmenu.fadeIn(function () {
    $("#step1").css("background-color", "green");
});



//--------Hochschulmitglied----------------
//-----E-Mail---Datum/Uhrzeit---Ort-------//


var email = $("#hm_emailValue");
var datum = $("#hm_datumValue");
var uhrzeit = $("#hm_zeitValue");
var ort = $("#hm_ortValue");

//Placeholdersetzen
datum.val(aktuellesdatum);
uhrzeit.val(aktuellezeit);

//Animation
let formular_hm = $("#formular_hm");
formular_hm.css("display", "none");
formular_hm.fadeIn(function () {
    $("#step2").css("background-color", "green");
});



//Eingaben speichern
$("#next_hm").click(function () {
    let emailLabel = $("#inpemaillabel");
    let datumLabel = $("#inpdatumlabel");
    let uhrzeitLabel = $("#inpuhrzeitlabel");
    let ortLabel = $("#inportlabel");
    let erroremail = $("#erroremail");
    let errordatum = $("#errordatum");
    let erroruhrzeit = $("#erroruhrzeit");
    let errorort = $("#errorort");
    //Eingabenprüfen
    if (email.val() == "") {
        emailLabel.css("color", "red");
        erroremail.css("visibility", "visible").hide().fadeIn("100");
    }
    if (datum.val() == "") {
        datumLabel.css("color", "red");
        errordatum.css("visibility", "visible").hide().fadeIn("100");
    }
    if (uhrzeit.val() == "") {
        uhrzeitLabel.css("color", "red");
        erroruhrzeit.css("visibility", "visible").hide().fadeIn("100");
    }
    if (ort.val() == "") {
        ortLabel.css("color", "red");
        errorort.css("visibility", "visible").hide().fadeIn("100");
    }
    if (email.val() == "" || datum.val() == "" || uhrzeit.val() == "" || ort.val() == "") {
        console.log("Hochschulmitglied hat nicht alles angegeben");
    } else {
        //LocalStorage
        sessionStorage.setItem("email", email.val() + "@ostfalia.de");
        sessionStorage.setItem("datum", datum.val());
        sessionStorage.setItem("uhrzeit", uhrzeit.val());
        sessionStorage.setItem("ort", ort.val());

        window.location.href = "index.php?page=hergang";
        console.log("Hochschulmitglied hat geklappt!")
    }

});

//--------Gast-----------------
//-----E-Mail---Datum/Uhrzeit---Ort-------//

var vorNachnameGast = $("#gast_vornameNachname");
var datumGast = $("#gast_datum");
var uhrzeitGast = $("#gast_zeit");
var ortGast = $("#gast_ort");

//Placeholdersetzen
datumGast.val(aktuellesdatum);
uhrzeitGast.val(aktuellezeit);


//Animation
let formular_gast = $("#formular_gast");
formular_gast.css("display", "none");
formular_gast.fadeIn(function () {
    $("#step2").css("background-color", "green");
});


$("#next_guest").click(function () {
    hochschulmitglied = false;
    let emailLabel_guest = $("#inpnamelabel");
    let datumLabel_guest = $("#inpdatumlabel_guest");
    let uhrzeitLabel_guest = $("#inpuhrzeitlabel_guest");
    let ortLabel_guest = $("#inportlabel_guest");
    let errorname= $("#errorname");
    let errordatum_guest = $("#errordatum_guest");
    let erroruhrzeit_guest = $("#erroruhrzeit_guest");
    let errorort_guest = $("#errorort_guest");
    //Eingabenprüfen
    if (vorNachnameGast.val() == "") {
        emailLabel_guest.css("color", "red");
        errorname.css("visibility", "visible").hide().fadeIn("100");
    }
    if (datumGast.val() == "") {
        datumLabel_guest.css("color", "red");
        errordatum_guest.css("visibility", "visible").hide().fadeIn("100");
    }
    if (uhrzeitGast.val() == "") {
        uhrzeitLabel_guest.css("color", "red");
        erroruhrzeit_guest.css("visibility", "visible").hide().fadeIn("100");
    }
    if (ortGast.val() == "") {
        ortLabel_guest.css("color", "red");
        errorort_guest.css("visibility", "visible").hide().fadeIn("100");
    }
    if (vorNachnameGast.val() == "" || gast_datum.val() == "" || uhrzeitGast.val() == "" || ortGast.val() == "") {
        console.log("Gast hat nicht alles angegeben");
    } else {
        //LocalStorage
        sessionStorage.setItem("gast_name", VorNachnameGast.val());
        sessionStorage.setItem("gast_datum", datumGast.val());
        sessionStorage.setItem("gast_uhrzeit", uhrzeitGast.val());
        sessionStorage.setItem("gast_ort", ortGast.val());
        console.log("Gast hat geklappt!")
    }






});



//-----HERGANG.PHP--------//
//-----Hergang---Art und Umfang---Zeugen-------//


//Animation
let formular_hergang = $("#formular_hergang");
formular_hergang.css("display", "none");
formular_hergang.fadeIn(function () {
    $("#step3").css("background-color", "green");
});


$("#next_hergang").click(function () {
    var hergang = $("#hergangValue").val();
    var artundumfang = $("#artUmfangValue").val();
    var zeugen = $("#zeugenValue").val();

    //LocalStorage
    sessionStorage.setItem("hergang", hergang);
    sessionStorage.setItem("artUmfang", artundumfang);
    sessionStorage.setItem("zeugen", zeugen);
});

console.log("Hergang hat geklappt!")


//-----ERSTHELFER.PHP--------//
let ersthelferanwesend = "Ja";
let ersthelferanwesendJa = $("#radiobutton1");
let ersthelferanwesendNein = $("#radiobutton2");
let ersthelfer = $("#ersthelferListe");
let artundweise = $("#ersthelfer_artUmfang");
let ersthelferdatum = $("#ersthelfer_datum");


ersthelferanwesendNein.click(function () {
    $("#ersthelfercontent").css("visibility", "hidden");
    ersthelferanwesend = "Nein";
});

ersthelferanwesendJa.click(function () {
    $("#ersthelfercontent").css("visibility", "visible");
    ersthelferanwesend = "Ja";
});


$("#next_ersthelfer").click(function () {
    //LocalStorage
    sessionStorage.setItem("ersthelfer", $("#ersthelferListe option:selected").text());
    sessionStorage.setItem("artundweise", artundweise.val());
    sessionStorage.setItem("ersthelferdatum", ersthelferdatum.val());

});

//Animation
let formular_Ersthelfer = $("#formular_Ersthelfer");
formular_Ersthelfer.css("display", "none");
formular_Ersthelfer.fadeIn(function () {
    $("#step4").css("background-color", "green");
});


//-----MATERIALabfrage.PHP--------//

//Animation
//Animation
let materialabfrageform = $("#materialabfrageform");
materialabfrageform.css("display", "none");
materialabfrageform.fadeIn(function () {
    $("#step5").css("background-color", "green");
});



//-----MATERIAL.PHP--------//
let materialauswahl1 = $("#materialauswahl1");
let materialauswahl2 = $("#materialauswahl2");
let materialauswahl3 = $("#materialauswahl3");
let materialauswahl4 = $("#materialauswahl4");
let modalmaterial1 = $("#modalmaterial1");
let modalmaterial2 = $("#modalmaterial2");
let modalmaterial3 = $("#modalmaterial3");
let modalmaterial4 = $("#modalmaterial4");

materialauswahl1.click(function () {
    modalhintergrund.fadeIn("100");
    modalmaterial1.css("display", "block");
});

materialauswahl2.click(function () {
    modalhintergrund.fadeIn("100");
    modalmaterial2.css("display", "block");
});

materialauswahl3.click(function () {
    modalhintergrund.fadeIn("100");
    modalmaterial3.css("display", "block");
});


materialauswahl4.click(function () {
    modalhintergrund.fadeIn("100");
    modalmaterial4.css("display", "block");
});


//Animation
let materialauswahl = $("#materialauswahl");
materialauswahl.css("display", "none");
materialauswahl.fadeIn(function () {
    $("#step6").css("background-color", "green");
});


//-----SUBMIT.PHP--------//
$("#submit").click(function () {


    //Hochschulmitglied
    let session_email = sessionStorage.getItem("email");
    let session_datum = sessionStorage.getItem("datum");
    let session_zeit = sessionStorage.getItem("zeit");
    let session_ort = sessionStorage.getItem("ort");
    console.log("Es handelt sich um ein Hochschulmitglied")

    //Gast
    if (hochschulmitglied == false) {
        let session_email = sessionStorage.getItem("gast_email");
        let session_datum = sessionStorage.getItem("gast_datum");
        let session_zeit = sessionStorage.getItem("gast_zeit");
        let session_ort = sessionStorage.getItem("gast_ort");
        console.log("Es handelt sich um einen Gast")
    }

    let session_hergang = sessionStorage.getItem("hergang");
    let session_artUmfang = sessionStorage.getItem("artUmfang");
    let session_zeugen = sessionStorage.getItem("zeugen");

    let session_ersthelfer = sessionStorage.getItem("ersthelfer");
    let session_artundweise = sessionStorage.getItem("artundweise");
    let session_ersthelferdatum = sessionStorage.getItem("ersthelferdatum");



    console.log("Alle Sessionvariablen wurden ausgelesen!")

    $.post("./config/data.php", {
        "email": session_email,
        "datum": session_datum,
        "zeit": session_zeit,
        "ort": session_ort,
        "hergang": session_hergang,
        "artundumfang": session_artUmfang,
        "zeugen": session_zeugen,
        "ersthelferartundweise": session_artundweise,
        "ersthelferdatum": session_ersthelferdatum,
        "ersthelfername": session_ersthelfer,
        "sendmail": "send"
    });
    console.log("gesendet!");
});



let submitform = $("#submitform");
submitform.css("display", "none");
submitform.fadeIn();


console.log("script.js ist geladen!")