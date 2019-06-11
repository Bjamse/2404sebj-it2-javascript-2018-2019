function beregn() {
    let b = Number(document.getElementById("bredde").value);
    let h = Number(document.getElementById("hoyde").value);
    let ant = (b*h)+"";
    let mant =((b*h/1000000).toFixed(3)) + "";
    let bilde = document.getElementById("aspectratio");
    if (b<h){
        bilde.src ="resurser/staende.jpg";
    } else if(b>h){
        bilde.src = "resurser/liggende.jpg";
    }else{
        bilde.src = "resurser/kvadratisk.jpg";
    }

    document.getElementById("ant").innerText = ant;
    document.getElementById("mant").innerText = mant;
}