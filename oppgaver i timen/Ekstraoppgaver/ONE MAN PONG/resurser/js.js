window.onload = boot; // når nettsien har lastet inn, kjør funksjonen boot

let ball; // ballen
let rekkert; // rekkerten
let v = [5,2]; // hastighet x og y
let sb = window.innerWidth; // bredde på nettside
let sh = window.innerHeight; // høyde på nettside
let loop; // for å kunne stoppe loopen må den vere lagt til i en variabel.
let poeng = 0; // poengene som spilleren har sanket ved å spille

function boot(){
    ball = document.getElementById("ball"); // setter variabelen ball til å være html elementet med id ball
    rekkert = document.getElementById("rekkert"); // setter variabelen rekkert til å være html elementet med id rekkert
    loop = setInterval(loopBallMotion,10);  // lager en loop som skal oppdatere ball posisjonen per 10 millisekund
    document.onmousemove = mouseMove; // setter en lytter til ventet mousemove på dokumentet for å fange hver eneste bevegelse av pekeren
}


function loopBallMotion(){
    let ballR = ball.getBoundingClientRect(); // en variabel for at jeg skal slippe å skrive .getBounding... så mange ganger
    let rekkertR = rekkert.getBoundingClientRect(); // samme her. dette gjør koden også mye enklere å lese

    if(ballR.left < -1)  {v[0] *=-1;} // hvis ballen trefffer veggen på venstre side, flipp horisontal hastighet

    if(ballR.bottom > sh || ballR.top < -1 )  {v[1] *=-1;} // hvis ballen trefffer veggen på topp eller bunn side, flipp vertikal hastighet

    if(ball.getBoundingClientRect().right > sb )endGame(); // vi ballen går forbi rekkerten og treffer veggen på høyre side, avslutt spillet

    if (ballR.left <= rekkertR.left + rekkertR.width && // en stor if test for å se om ballen og rekkerten deler noen piksler (har kollidert)
        rekkertR.left <= ballR.left + ballR.width &&
        ballR.top <= rekkertR.top + rekkertR.height &&
        rekkertR.top <= ballR.top + ballR.height){

        v[0] = Math.abs(v[0]) *-1; //sørg for at ballen beveger seg til venstre. Denne er anderledes fordi det kan hende ballen treffer rekkerten flere ganger etterhverandre
        // si for eksempel du akkuratt treffer ballen før den treffer veggen. da vil det være et par frames der balle er i rekkerten etterhbverandre.
        // hvis ballen barre hadde får x-hastigheten flippa så ville ballen blitt stuck i rekkerten.
        // ergo den ville ikke flytta å seg...

        poeng +=1 // teller opp poeng.
    }

    ball.style.left = Number(ballR.left + v[0]) + "px"; // oppdaterer posisjonen til ballen mtp nåværende plassering og fart
    ball.style.top = Number(ballR.top + v[1]) + "px"; // samme bare for y aksen (vertikalt)

    document.getElementById("poeng").innerText = "Poeng : " + poeng; // oppdater poengleseren
}

function mouseMove(evt) { // en funksjon som blir kjørt hver gang musa beveger seg inne i documnetet. se linje 15
    rekkert.style.top = Number(evt.clientY - 45) + "px"; // plasserer rekkerten langs y aksen med lik plassering til pekeren.
    // -45 er for at pekeren vertikalt skal være på midten av rekkerten. 45 er halvparten av høyden til rekkerten

    /*
    console.log(evt.clientY); // bare for å debugge
    */
}




function endGame() { // en liten funksjon for å avslutte spillet. her kan det legges til  emr men jeg er lat...
    clearInterval(loop);// stopper loopen. går kun fordi vi definerte loopen i en variabel
    alert("du tapte!");// skriv i en pop opp boks at du tapte...
}
