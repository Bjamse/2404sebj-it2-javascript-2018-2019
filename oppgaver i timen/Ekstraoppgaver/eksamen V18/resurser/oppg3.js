let instrument=  [
    {kilde: "Vedlegg_V18/fagott.jpg", navn:"Fagott", lyd:"Vedlegg_V18/fagott.mp3"},
    {kilde: "Vedlegg_V18/floyte.gif", navn:"Fløyte", lyd:"Vedlegg_V18/floyte.mp3"},
    {kilde: "Vedlegg_V18/klarinett.jpg", navn:"Klarinett", lyd:"Vedlegg_V18/klarinett.mp3"},
    {kilde: "Vedlegg_V18/obo.jpg", navn:"Obo", lyd:"Vedlegg_V18/obo.mp3"},
    {kilde: "Vedlegg_V18/Valthorn.jpg", navn:"Valthort", lyd:"Vedlegg_V18/valthorn.mp3"}

];


function lagTabellForSpill(){
    let grense = Math.floor(document.getElementById("spill").getBoundingClientRect().width/130);
    let out = "<table> <tr>";
    for(let i= 0; i < instrument.length; i++){
        out+= "<td> <img src='"+instrument[i].kilde+"' alt='' id='"+i+"' style='width: 120px;' onclick='svar(this)'> <br> "+ instrument[i].navn+"</td>";
        if (i >= grense){ grense+=i;out+= "</tr> <tr>"}
    }
    out += "</tr> </table>";

    document.getElementById("spill").innerHTML = out;
}
let currentlyd;

function startSpill(startkanpp){
    startkanpp.disabled = true;
    document.getElementById("replay").style.visibility = "visible";
    currentlyd = Math.floor( Math.random()* (instrument.length));
    spillLyd(instrument[currentlyd].lyd)
}

let a;
function spillLyd(x){
    if (a !== undefined){a.pause()}
    a= new  Audio(x);
    a.play();
}

let poeng = 0;
let forsok = 3;
function svar(element){
    if(element.id === currentlyd){
        spillLyd("Vedlegg_V18/riktig.mp3");
        element.style.display = "none";
    }else{
        spillLyd("Vedlegg_V18/feil.mp3");

        forsok -=1;
    }
}
