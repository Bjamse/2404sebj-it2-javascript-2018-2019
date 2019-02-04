// klasse for vindstyrker
class styrke {
    constructor(fra, til, navn, watt){
        // laveste verdi for denne styrken
        this.min = fra;
        // høyeste verdi for denne styrken
        this.max = til;
        // navn på styrken
        this.name = navn;
        // forventet produksjon per time for denne styrken
        this.watt = watt;
    }

    // metode for å teste om en verdi er mellom styrkens maksimum og minimum
    // hvis denne styrken har en maks eller min som er lik "en stjerne" så skal det tolkes som om at den er
    // definert for alle verdier i den rettningen
    innenforDenneStyrken(test){
        if (this.min === "*"){return test < this.max}
        if (this.max === "*"){return test > this.min}
        if (this.min === "*" && this.maks === "*"){return true}
        return test >= this.min && test <= this.max
    }
}

// tabell med vindstyrker, hvert element er et objekt av klassen styrke
const styrker = [
    new styrke("*",0.2,"Stille", 0),
    new styrke(0.3,1.5,"Flau vind", 0),
    new styrke(1.6,3.3,"Svak vind", 2),
    new styrke(3.4,5.4,"Lett bris", 10),
    new styrke(5.5,7.9,"Laber bris", 60),
    new styrke(8.0,10.7,"Frisk bris", 150),
    new styrke(10.8,13.8,"Liten kuling", 400),
    new styrke(13.9,17.1,"Stiv kuling", 500),
    new styrke(17.2,20.7,"Sterk kuling", 0),
    new styrke(20.8,24.4,"Liten storm", 0),
    new styrke(24.5,28.4,"Full storm", 0),
    new styrke(28.5,32.6,"Sterk storm", 0),
    new styrke(32.7,"*","Orkan",0)
];


function beregn() {
    // lagrer inputtene (antatt gjennomsnittelig vindstyrke for tidsperiodene) i en liste
    let inputs = [
        fiksTall(document.getElementById("2til8").value),
        fiksTall(document.getElementById("8til14").value),
        fiksTall(document.getElementById("14til20").value),
        fiksTall(document.getElementById("20til2").value)
    ];
    // total produksjon (midlertidig null, blir sikker t mer etter hvert)
    let total = 0;

    // for hver inputt (tidsperiode)
    for( let i in inputs){
        // finn hvilken styrke inputen passer med
        for (let j in styrker){
            if (  styrker[j].innenforDenneStyrken(inputs[i])  ){
                // legg til 6*watt i total hvis riktig styrke
                // ganger med 6 for å få med watt for alle timene i perioden
                total += styrker[j].watt*6
            }
        }
    }
    // skriv ut styrke
    document.getElementById("out").innerText = total.toString();

}

// sørger for at en variabel er et tall og fjerner alle untat ett desimal
function fiksTall(x) {
    return Number((Number(x)).toFixed(1))
}