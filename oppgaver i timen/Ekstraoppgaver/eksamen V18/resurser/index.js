window.onload = boot;

let infoTekst = [
    "<b>Åpningstider:</b> <br>Tirsdag-Søndag 11.00-16:00",
    "<b>Bilettpriser:</b><br>Voksen: 120 kr <br> Student/honnør: 100 kr <br>Barn (0-15 år): Gratis",
    "<b>Informasjon:</b><br>Besøksadresse: Lade allé 60, 7041 Trondheim 73 87 02 80 post@ringve.no<br>Postadresse: Postboks 6289 Torgarden, 7489 Trondheim"
];



function boot() {

}

function endreINFOnavTEXT(x) {
    document.getElementById("infoNavInfo").innerHTML = x;
}


let currentImmage = 0;
function moveimages(x) {
    let images = document.getElementsByClassName("introimg");
    let spacing = images[1].getBoundingClientRect().left - images[0].getBoundingClientRect().right;
    let imageWidth = images[0].getBoundingClientRect().width;
    let movelengt = spacing + imageWidth;
    if ((x === 1 && currentImmage !== 3) || (x === -1 && currentImmage !== 0)){
        currentImmage += x;
        for (let i in images) {

            images[i].style.transform = "translate("+Number(-movelengt*currentImmage) + "px, 0px)";

        }
    }
}