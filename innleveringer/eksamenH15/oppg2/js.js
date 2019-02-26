let id =0;
class linje{

    constructor(name, poeng){
        this.id = id;
        id++;
        this.name = name;
        this.poenggrense = poeng;
    }
}

let linjer = [
    new linje("lektorutdanning i historie", 50),
    new linje("lektorutdanning i språkfag/engelsk", 48)
];


function kalkuler(){
    let snitt = Number(document.getElementById("snitt").value);
    let poeng = Number(document.getElementById("pp").value);
    let linjeid = Number(document.getElementById("linje").value);
    document.getElementById("svar").innerText = snitt*10 + poeng >= linjer[linjeid].poenggrense ? "ja": "nei";
}