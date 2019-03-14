function spillLydFart() {
    let fart = document.getElementById("fart").value;
    let a;
    if(Number(fart) >60){
        a = new Audio("../FIlerV2014Trafikk/over60.wav");
    }else {
        a = new Audio("../FIlerV2014Trafikk/under60.wav");
    }
    a.play();



    setTimeout(function () {
        let x = document.getElementById("oppfordring");
        x.style.display = "inline-block";
        x.style.position = "absolute";
        x.style.top = "50%";
        x.style.left = "50%";
        x.style.backgroundColor = "yellow";
        x.style.border = "solid black 2px";

    }, 12000)

}