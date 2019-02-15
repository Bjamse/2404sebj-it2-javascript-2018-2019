window.onload = boot;

let infoTekst = [
    "<b>Åpningstider:</b><br>Tirsdag-Søndag 11.00-16:00",
    "<b>Bilettpriser:</b><br>Voksen: 120 kr <br> Student/honnør: 100 kr <br>Barn (0-15 år): Gratis",
    "<b>Informasjon:</b><br>Besøksadresse: Lade allé 60, 7041 Trondheim 73 87 02 80 post@ringve.no<br>Postadresse: Postboks 6289 Torgarden, 7489 Trondheim"
];



function boot() {

}

function endreINFOnavTEXT(x) {
    document.getElementById("infoNavInfo").innerHTML = x;
}