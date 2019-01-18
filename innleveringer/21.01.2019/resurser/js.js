window.onload = boot;


let kunder = [];

function boot() {
    if (localStorage.getItem("kunder") !== null){
        let kunderStringArraySomString = localStorage.getItem("kunder");
        let kunderArraySomString = kunderStringArraySomString.split("¤");
        kunderArraySomString.shift();
        for (let i in kunderArraySomString){
            kunder.push(JSON.parse(kunderArraySomString[i]))
        }
        skrivTabell();
    }
}


function registrerNy() {
    kunder.push(
        {
            name: document.getElementById("NyPerson").value,
            paid: Number(document.getElementById("NyInnbetaling").value)
        }
    );
    oppdaterInfo();
}

function oppdaterInfo() {
    let kunderStringArraySomString = "";
    for (let i in kunder){
        kunderStringArraySomString += "¤"+JSON.stringify(kunder[i])
    }
    localStorage.setItem("kunder", kunderStringArraySomString);
    skrivTabell();
}


function skrivTabell() {
    let out = "<table>";
    let sumBetalt = 0;
    out += "<tr><th>Person</th><th>Innbetalt</th><th>fjern</th></tr>";

    for(let i in kunder){
        out+=
            "<tr>" +
            "<td>"+kunder[i].name+"</td>" +
            "<td>"+kunder[i].paid+" kr</td>" +
            "<td><button onclick='fjernPerson("+i+")'>X</button></td>" +
            "</tr>";

        sumBetalt += kunder[i].paid;
    }
    out += "</table>";

    document.getElementById("tabell").innerHTML = out;
    document.getElementById("sum").innerHTML = sumBetalt.toFixed(2);
}

function fjernPerson(x) {
    kunder.splice(x, 1);
    oppdaterInfo()
}