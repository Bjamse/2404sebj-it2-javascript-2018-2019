function bilde1(){
    document.getElementById("pop").style.display = "block";
    document.getElementById("info").innerText = "Anbefalt filformat: JPG.\n Kan variere filstørelsen etter behov ettersom JPG kankomprimeres. kvaliteten kan da forbli høy eller senkes etter behov. tar også mindre plass jo mer man komprimerer dem." +
        "\n\nHovedtype : punktgrafikk";

}
function bilde2(){
    document.getElementById("pop").style.display = "block";
    document.getElementById("info").innerText = "Anbefalt filformat: PNG.\n Beholder kvaliteten bra og viktigst av alt: har mulighet til dedikert alfa kanal som gir muligheten for gjennomsiktige bilder" +
        "\n\nHovedtype: punktgrafikk";

}
function bilde3(){
    document.getElementById("pop").style.display = "block";
    document.getElementById("info").innerText = "Anbefalt filformat: AI.\n AI er en fil med vektorgrafikk laget i Adobe illustrator. Vektorgrafikk beholder samme kvaliteten uansett hvor mye du skalerer bildet. Ingen problemer med antialiasing eller komprimerings artifacter." +
        "\n\nHovedtype : vektorgrafikk";

}
function ex() {
    console.log("close");
    document.getElementById("pop").style.display = "none";
}