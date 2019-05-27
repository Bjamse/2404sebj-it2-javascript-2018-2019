// klasse for vindstyrker
class styrke {
    constructor(fra, til, navn, watt){
        this.min = fra;
        this.max = til;
        this.name = navn;
        this.watt = watt;
    }
    innenforDenneStyrken(test){
        if (this.min === "*"){return test < this.max}
        if (this.max === "*"){return test > this.min}
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

function kalkuler(){
    let v = document.getElementById('vindstyrke').value;
    v = Number(v); // garanterer at input var desimaler
    v = Number(v.toFixed(1));  // fjerner overflødige desimaler

    for(let i in styrker){
        if (  styrker[i].innenforDenneStyrken(v)  ){
            document.getElementById("out").innerText = "Ved vind på " + v + " m/s ("+styrker[i].name+"), vil vindmøllen produsere ca. " + styrker[i].watt +" watt i timen";
        }
    }

}