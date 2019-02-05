

window.onload = boot;

let ball;
let rekkert;
let v = [5,2]; // hastighet x og y
let sb = window.innerWidth; // bredde på nettside
let sh = window.innerHeight; // høyde på nettside
let loop;
let taster = {OPP: 38, NED: 40};
let poeng = 0;

function boot(){
    ball = document.getElementById("ball");
    rekkert = document.getElementById("rekkert");
    loop = setInterval(loopBallMotion,10);
    document.onkeydown = buttonPush;
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

function buttonPush(evt) {
    document.onkeydown = buttonPush;

    if (evt.keyCode === taster.NED && rekkert.getBoundingClientRect().bottom < sh){
        rekkert.style.top = Number(rekkert.getBoundingClientRect().top + 15) + "px";
    }
    if (evt.keyCode === taster.OPP && rekkert.getBoundingClientRect().top > 0){
        rekkert.style.top = Number(rekkert.getBoundingClientRect().top - 15) + "px";
    }
}




function endGame() {
    clearInterval(loop);
    alert("du tapte!");
}
