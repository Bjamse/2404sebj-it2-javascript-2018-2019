let lag = [ ];

function registrer() {
    let tmp = {
        navn: document.getElementById("lagnavn").value,
        ks: Number(document.getElementById("ks").value),
        s: Number(document.getElementById("s").value),
        u: Number(document.getElementById("u").value),
        t: Number(document.getElementById("t").value),
        mf: Number(document.getElementById("mf").value),
        mm: Number(document.getElementById("mm").value),
        poeng: Number(document.getElementById("s").value)*3 + Number(document.getElementById("u").value)
    };
    lag.push(tmp);
    sorterLag();
}

function sorterLag(){
    let swapped;
    console.log(lag);
    do {
        swapped = false;
        for (let i=0; i < lag.length-1; i++) {
            if (lag[i].poeng < lag[i+1].poeng) {
                let temp = lag[i];
                lag[i] = lag[i+1];
                lag[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log(lag);
    skrivTabell();
    console.log("feri sortering");
}

function skrivTabell() {
    console.log("skriver");
    let out = "<table>";
    out += "<tr><th>#</th><th>Lag</th><th>KS</th><th>S</th><th>U</th><th>T</th><th>MF</th><th>MM</th><th>P</th></tr>";

    for (let i in lag){
        out += "<tr><td>"+i+"</td><td>"+lag[i].navn+"</td><td>"+lag[i].ks+"</td><td>"+lag[i].s+"</td><td>"+lag[i].u+"</td><td>"+lag[i].t+"</td><td>"+lag[i].mf+"</td><td>"+lag[i].mm+"</td><td>"+lag[i].poeng+"</td></tr>";
    }
    out += "</table>";
    document.getElementById("tabell").innerHTML = out;
}