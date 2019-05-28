function beregn() {
    let b = Number(document.getElementById("bredde").value);
    let h = Number(document.getElementById("hoyde").value);
    document.getElementById("ant").innerText = (b*h)+"";
    document.getElementById("mant").innerText =((b*h/1000000).toFixed(3)) + "";
}