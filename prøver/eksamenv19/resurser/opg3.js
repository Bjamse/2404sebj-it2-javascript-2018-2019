// struktur på tur:
// // liste med hytter

const hytter = ["Gjendesheim", "Glitterheim","Memurubu", "Gjendebu", "Leirvassbu", "Spiterstulen", "Olavsbu"];
const Avstander =[
    [0,22,14,0,0,0,0],
    [22,0,18,0,0,17,0],
    [14,18,0,10,0,0,0],
    [0,0,10,0,19,24,16],
    [0,0,0,19,0,15,11],
    [0,17,0,24,15,0,0],
    [0,0,0,16,11,0,0]
];
let tur = [];
let loop;
window.onload = boot;

function boot() {
    let out = "<select class='s'> <option value='-1'> Velg hytte</option>";
    for(let i in hytter){
        out+= "<option value=\""+Number(i)+"\">"+hytter[Number(i)]+"</option>"
    }
    out+= "</select>";
    document.getElementById("startSelect").innerHTML = out;
    loop = setInterval(skrivSelHytter, 800);
}

function skrivSelHytter() {
    let valgBokser = document.getElementsByClassName("s");
    for(let i = 0; i < valgBokser.length; i++){
        if(i === 0 && Number(valgBokser[i].value) === -1){tur= []}
        if(Number(valgBokser[i].value) !== -1 && valgBokser[i].value !== tur[i]){
            tur[i] = valgBokser[i].value;
            delAlleEtter(i);
            let div = document.getElementById((i+1)+"");
            let out = "Hytte "+ (i+1)+" : <select class='s'> <option value='-1'> Velg hytte</option>";
            for(let j = 0; j< hytter.length; j++){
                if(Avstander[Number(valgBokser[i].value)][j] !== 0){
                    out+= "<option value=\""+j+"\">"+hytter[j]+"</option>";
                }
            }
            out +="</select> <br> <div id='"+(i+2)+"'></div>";
            div.innerHTML = out;
            break;
        }
    }
}

function delAlleEtter(x) {
    let ntur = [];
    for(let k =0; k<= x; k++){
        ntur[k] = tur[k];
    }
    tur = ntur;
}

function kalkuler(){
    let out = "<h1><code>Dette er ruta</code></h1> <br><code>";
    if(tur.length === 1){
        out+= "Du starter" +hytter[Number(tur[0])] +" og så er du ferdig. lengden er 0km</code>";
    }else if (tur.length === 0){
        out += "Ruta du valgte har ingen stopp eller start. Velg hvertfall en hytte å gå til for å få noe resultat.</code>"
    }else {
        let lengde = 0;
        for (let a = 0; a < tur.length-1; a++) {
            lengde += Avstander[Number(tur[a])][Number(tur[a+1])];
            out += "Fra "+hytter[Number(tur[a])]+" til "+ hytter[Number(tur[a+1])] + ", " + Avstander[Number(tur[a])][Number(tur[a+1])] +"km.<br>"
        }
        out += "Totalt er Ruta " +lengde + " km lang;"
    }

    document.getElementById("output").innerHTML = out;
}