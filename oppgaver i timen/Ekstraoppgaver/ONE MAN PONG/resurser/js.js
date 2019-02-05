window.onload = boot;

let ball; // ballen
let rekkert; // rekkerten
let v = [5,2]; // hastighet x og y
let sb = window.innerWidth; // bredde på nettside
let sh = window.innerHeight; // høyde på nettside
let loop; // for å kunne stoppe loopen må den vere lagt til i en variabel.
let poeng = 0; // poengene som spilleren har sanket ved å spille

function boot(){
    ball = document.getElementById("ball");
    rekkert = document.getElementById("rekkert");
    loop = setInterval(loopBallMotion,10);
    document.onmousemove = mouseMove;
}


function loopBallMotion(){
    let ballR = ball.getBoundingClientRect();
    let rekkertR = rekkert.getBoundingClientRect();

    if(ballR.left < -1){v[0] *=-1;}

    if(ballR.bottom > sh  || ballR.top < -1 ){v[1] *=-1;}

    if(ball.getBoundingClientRect().right > sb )endGame();

    if (ballR.left <= rekkertR.left + rekkertR.width &&
        rekkertR.left <= ballR.left + ballR.width &&
        ballR.top <= rekkertR.top + rekkertR.height &&
        rekkertR.top <= ballR.top + ballR.height){

        v[0] = Math.abs(v[0]) *-1;
        poeng +=1
    }

    ball.style.left = Number(ballR.left + v[0]) + "px";
    ball.style.top = Number(ballR.top + v[1]) + "px";

    document.getElementById("poeng").innerText = "Poeng : " + poeng;
}

function mouseMove(evt) {
    rekkert.style.top = Number(evt.clientY - 45) + "px";
    console.log(evt.clientY);
}




function endGame() {
    clearInterval(loop);
    alert("du tapte!");
}
