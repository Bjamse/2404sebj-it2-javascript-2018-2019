//todo: fiks plassering av bilde


window.onload = boot;

let ball; // ballen
let rekkert; // rekkerten
let bane;
let v = [5,2]; // hastighet x og y
let br; // bredde på bakgrunn
let bt;
let bl;
let bb;
let loop; // for å kunne stoppe loopen må den vere lagt til i en variabel.
let poeng = 0; // poengene som spilleren har sanket ved å spille
let taster = {OPP: 38, NED: 40};
let rekord = 3; // standard rekkord

function boot(){
    ball = document.getElementById("ball");
    rekkert = document.getElementById("rekkert");
    bane = document.getElementById("bakgrunn");

    bane.style.top = "50px";

    rekkert.style.left = Number(bane.getBoundingClientRect().right - 30) + "px";
    rekkert.style.top = bane.getBoundingClientRect().top +"px";
    bt = bane.getBoundingClientRect().top;
    bb = bane.getBoundingClientRect().bottom;
    br = bane.getBoundingClientRect().right;
    bl = bane.getBoundingClientRect().left;
    ball.style.left = bane.getBoundingClientRect().left + "px";
    ball.style.top = bane.getBoundingClientRect().top + "px";
    if(localStorage.getItem("rekord") !== undefined){
        rekord = localStorage.getItem("rekord");
    }

    loop = setInterval(loopBallMotion,10);
    document.onkeydown = buttonPush;
}


function loopBallMotion(){
    let ballR = ball.getBoundingClientRect();
    let rekkertR = rekkert.getBoundingClientRect();

    if(ballR.left < bl){v[0] *=-1;}

    if(ballR.bottom > bb  || ballR.top < bt ){v[1] *=-1;}

    if (ballR.left <= rekkertR.left + rekkertR.width &&
        rekkertR.left <= ballR.left + ballR.width &&
        ballR.top <= rekkertR.top + rekkertR.height &&
        rekkertR.top <= ballR.top + ballR.height){

        v[0] = Math.abs(v[0]) *-1;
        poeng +=1
    }

    ball.style.left = Number(ballR.left + v[0]) + "px";
    ball.style.top = Number(ballR.top + v[1]) + "px";

    document.getElementById("poeng").innerText = poeng;
    rekord = Math.max(poeng, rekord);
    document.getElementById("rekord").innerText = rekord;

    localStorage.setItem("rekord", rekord.toString())

}

function buttonPush(evt) {
    document.onkeydown = buttonPush;

    if (evt.keyCode === taster.NED && rekkert.getBoundingClientRect().bottom < bb){
        rekkert.style.top = Number(rekkert.getBoundingClientRect().top + 15) + "px";
    }
    if (evt.keyCode === taster.OPP && rekkert.getBoundingClientRect().top > bt){
        rekkert.style.top = Number(rekkert.getBoundingClientRect().top - 15) + "px";
    }
}

