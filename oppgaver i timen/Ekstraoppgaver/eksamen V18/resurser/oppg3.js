let instrument=  [
    {id: 0,kilde: "Vedlegg_V18/fagott.jpg", navn:"Fagott", lyd:"Vedlegg_V18/fagott.mp3"},
    {id: 1,kilde: "Vedlegg_V18/floyte.gif", navn:"Fløyte", lyd:"Vedlegg_V18/floyte.mp3"},
    {id: 2,kilde: "Vedlegg_V18/klarinett.jpg", navn:"Klarinett", lyd:"Vedlegg_V18/klarinett.mp3"},
    {id: 3,kilde: "Vedlegg_V18/obo.jpg", navn:"Obo", lyd:"Vedlegg_V18/obo.mp3"},
    {id: 4,kilde: "Vedlegg_V18/Valthorn.jpg", navn:"Valthort", lyd:"Vedlegg_V18/valthorn.mp3"}

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
let start = false;
function startSpill(startkanpp){
    start = true;
    startkanpp.disabled = true;
    document.getElementById("reload").disabled = false;
    document.getElementById("replay").style.visibility = "visible";
    currentlyd =instrument[Math.floor( Math.random()* (instrument.length))];
    spillLyd(currentlyd.lyd)
}

let a;
function spillLyd(x){
    if (a !== undefined){a.pause()}
    a= new  Audio(x);
    a.play();
}

let poeng = 0;
let forsok = 3;
let hscore = 0;
let gammelHighscore = 0;
if (localStorage.rekord !== undefined){
    hscore = localStorage.rekord
    gammelHighscore = hscore
}
let totaltAntallinstrument = instrument.length;

function svar(element){
    if (start !== true){
        return
    }
    if(element.id == currentlyd.id && forsok > 0){
        spillLyd("Vedlegg_V18/riktig.mp3");
        element.parentElement.style.display = "none";
        instrument.splice(instrument.indexOf(currentlyd),1);
        poeng +=1;
        hscore = Math.max(poeng, hscore);
        if(poeng === totaltAntallinstrument){
            poeng="alle";
            hscore = "alle";
            alert("gratulerer du klarte alle!");
            skrivStats();
            return;
        }
        currentlyd =instrument[Math.floor( Math.random()* (instrument.length))];
        setTimeout(function (){spillLyd(currentlyd.lyd)},1000 )

    }else{
        spillLyd("Vedlegg_V18/feil.mp3");

        forsok -=1;
        if (poeng === hscore){
            if (poeng === gammelHighscore){
                alert("gratulerer du fikk samme highscore som før highscore!")
            }
            else {
                alert("gratulerer du fikk ny highscore!")
            }
        }

    }
    skrivStats();
    if( forsok <= 0 ){
        spillLyd("Vedlegg_V18/feil.mp3");
        alert("du har tapt. du kan ikke gjette mer!")
    }
}


function skrivStats() {
    document.getElementById("poeng").innerText = poeng;
    document.getElementById("forsøk").innerText = Math.max(0, forsok);
    document.getElementById("hscore").innerText = hscore;
    localStorage.rekord = hscore;
}