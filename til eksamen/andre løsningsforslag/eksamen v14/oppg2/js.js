let lovvbrudd = {
    promille:[{aar: 2002, antall:9631},{aar: 2003, antall:8593},{aar: 2004, antall:8363},{aar: 2005, antall:8128}, {aar: 2006, antall:8514},{aar: 2007, antall:8534} ],
    hastighet:[{aar: 2002, antall:9863},{aar: 2003, antall:12217},{aar: 2004, antall:14920},{aar: 2005, antall:14929}, {aar: 2006, antall:15425},{aar: 2007, antall:18010}]
};

function sammenlign() {
    let aar1= lovvbrudd.promille[parseInt(document.getElementById("aar1").value)];
    let aar2= lovvbrudd.promille[parseInt(document.getElementById("aar2").value)];
    document.getElementById("sRes").innerHTML = "Det skjedde en "+(aar2.antall<= aar2.antall?"possitiv":"negativ")+" utvikling i antall promillekjøringer fra " +aar1.aar+ " til "+ aar2.aar;
}

function skrivDiagramm(x) {
    document.getElementById("søyler").innerHTML = "";
    for (let i in x) {
        let p = document.createElement("p");
        p.innerHTML = x[i].aar + " (antall "+x[i].antall+") : ";

        let span = document.createElement("span");

        span.className= "bar";
        span.style.width = Number(x[i].antall * 0.04 )+ "px";
        if(i % 2 === 0)span.style.backgroundColor = "red";
        p.appendChild(span);
        document.getElementById("søyler").appendChild(p);

    }
}