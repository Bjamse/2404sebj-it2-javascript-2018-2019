//todo:
// - blader
// - animasjon av blader
// - finn feilen der de ikke ligner opp riketig hver gang... (kan være den ikke er så nøye men må teste videre)
// - TEST i forskjellige nettlesere (IE, CHROME, FIREFOX, VIVALDI, EDGE...)


window.onload = boot;

let foiler;
let bjork;
let blad;
let mast;
let landskap;
let a = new Audio("resurser/sommervind.mp3");
let soundShouldProbablyPlay = false;
setInterval(function () {
    if(soundShouldProbablyPlay){
        a.play();
    } else {
        a.pause();
    }
},
    100);

function boot(){
    landskap = document.getElementById("landskap");
    let landRekt = landskap.getBoundingClientRect();

    mast = document.createElement("img");
    document.getElementById("wrapper").appendChild(mast);
    mast.src = "resurser/bilder/mast.png";
    mast.id = "mast";
    mast.height = 234;
    mast.style.left = landRekt.left +  (landRekt.width/4)*3 +"px";
    mast.style.top = landRekt.top + (landRekt.height/2)+"px";
    let mastRekt = mast.getBoundingClientRect();

    foiler = document.createElement("img");
    document.getElementById("wrapper").appendChild(foiler);
    foiler.src = "resurser/bilder/foiler.png";
    foiler.id = "foiler";
    foiler.height = 203;
    foiler.style.left = mastRekt.left + mastRekt.width/2 + "px";
    foiler.style.top = (mastRekt.top - foiler.getBoundingClientRect().height/2) + "px";

    bjork = document.createElement("img");
    document.getElementById("wrapper").appendChild(bjork);
    bjork.src = "resurser/bilder/bjork.png";
    bjork.id = "bjork";
    bjork.style.left =  (landRekt.left + landRekt.width/16 - bjork.getBoundingClientRect().width/2) +"px";
    bjork.style.top = (landRekt.top +(landRekt.height/8)) + "px";
    let bjorkRekt = bjork.getBoundingClientRect();

    blad = document.createElement("img");
    document.getElementById("wrapper").appendChild(blad);
    blad.src = "resurser/bilder/lov.png";
    blad.className = "blad";
    blad.style.left = (bjorkRekt.left + 125 ) + "px";
    blad.style.top = (bjorkRekt.top + 242) + "px";
}

function forandreVindstyrke(x) {
    if(x === 1){
        // dette er den svakeste vindstyrken
        bjork.style.setProperty("--wobbleTime", "-1s");
        foiler.style.setProperty("--spinTime", "-1s");
        soundShouldProbablyPlay = false;

        blad.style.visibility = "hidden";

    }
    else if(x === 2){
        // dette er den svakeste vindstyrken
        bjork.style.setProperty("--wobbleTime", "2s");
        bjork.style.setProperty("--wobbleDegreesNegative", "-1deg");
        bjork.style.setProperty("--wobbleDegreesPossitive", "1deg");

        blad.style.visibility = "visible";
        blad.style.setProperty("--bladTime", "3s");


        foiler.style.setProperty("--spinTime", "1.5s");
        soundShouldProbablyPlay = true;
    }
    else if(x === 3){
        // dette er den svakeste vindstyrken
        bjork.style.setProperty("--wobbleTime", "0.5s");
        bjork.style.setProperty("--wobbleDegreesNegative", "-12deg");
        bjork.style.setProperty("--wobbleDegreesPossitive", "12deg");

        blad.style.visibility = "visible";
        blad.style.setProperty("--bladTime", "1s");

        foiler.style.setProperty("--spinTime", "0.3s");

        soundShouldProbablyPlay = true;
    }



}
// foiler.style.setProperty("spinSpeed", "<sekkunder>")