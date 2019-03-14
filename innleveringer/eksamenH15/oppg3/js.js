// todo:
//  - legg till oblig programmfag og eks
//  lag en fjerne knapp for ekstra programmfag
//  utskrift
//  registrering om til tabell for finere finnisj


let id =0;
// eksamen fungerer som egne fag på vintemålet
//  derfår får det ikke en egen class men går under fag
class fag{
    constructor(name,kar= 1){
        this.id = id;
        id++;
        this.name = name;
        this.karakter = kar;
    }
}


let fellesfag = [
    new fag("Engelsk"),
    new fag("Geografi"),
    new fag("Historie VG3"),
    new fag("Kroppsøving VG3"),
    new fag("Naturfag"),
    new fag("Mattematikk vg1"),
    new fag("Mattematikk vg2"),
    new fag("Norsk hovedål, skriftlig vg3"),
    new fag("Norsk sidemål, skriftlig vg3"),
    new fag("Norsk, muntlig vg3"),
    new fag("Relgion og etikk"),
    new fag("Samfunnsfag"),
];

let progfag=[
    new fag("Programmfag 1"),
    new fag("Programmfag 2"),
    new fag("Programmfag 3"),
    new fag("Programmfag 4"),
    new fag("Programmfag 5"),
    new fag("Programmfag 6")
];

let eks = [
    new fag("Eksamen 1 "),
    new fag("Eksamen 2 "),
    new fag("Eksamen 3 "),
    new fag("Eksamen 4 "),
    new fag("Eksamen 5 ")
];

let bonusfag = [];
let fullliste = [];


function skrivFag() {
    let out = "<h3>Skriv inn karakter for følgende fag : </h3><br>";
    for(let i in fellesfag){
        out+= fellesfag[i].name+" : "+sk("o"+fellesfag[i].id)+"<br>";
    }
    for(let i in progfag){
        out+= progfag[i].name+" : <input type='text' id='pN"+progfag[i].id+"' placeholder='navn på fag'>: "+sk("p"+progfag[i].id)+"<br>";

    }
    for(let i in eks){
        out+= eks[i].name + " : <input type='text' id='eN"+eks[i].id+"' placeholder='navn på eksamen'>: "+sk("e"+eks[i].id)+"<br>";
    }

    document.getElementById("out1").innerHTML = out;
}

function add() {
    bonusfag.push( new fag(undefined));
    let id = bonusfag[bonusfag.length-1].id;
    let out = "<div> <input type='text' id='bN"+id+"' placeholder='navn på ekstra fag/eksamen'>: "+sk("b"+id)+" <button onclick='this.parentElement.remove(); bonusfag.splice("+Number(bonusfag.length-1)+",1)'>X</button></div>" ;
    document.getElementById("out2").innerHTML += out;
}
function utskrift() {
    // oppdater først listene med nye data
    for(let i in fellesfag){
        fellesfag[i].karakter = Number(document.getElementById("kio"+fellesfag[i].id).value);
    }
    for(let i in progfag){
        progfag[i].karakter = Number(document.getElementById("kip"+progfag[i].id).value);
        progfag[i].name = document.getElementById("pN"+progfag[i].id).value;
    }
    for(let i in eks){
        eks[i].karakter = Number(document.getElementById("kie"+eks[i].id).value);
        eks[i].name = document.getElementById("eN"+eks[i].id).value;
    }
    for(let i in bonusfag){
        bonusfag[i].karakter = Number(document.getElementById("kib"+bonusfag[i].id).value);
        bonusfag[i].name = document.getElementById("bN"+bonusfag[i].id).value;
    }


    // skriv ut sortert etter karakter

    let out = "utskrift: <br><code>";
    fullliste = fellesfag.concat(progfag,eks,bonusfag);
    fullliste = bubbleSort(fullliste);
    fullliste = fullliste.reverse();
    for(let i in fullliste){
        out+= fullliste[i].name+ " : "+ fullliste[i].karakter+ " <br>";
    }

    out += "ekstrapoeng = "+document.getElementById("ekstrapoeng").value+" </code> <br>er det riktig? <button onclick='kalkuler()'>kalkuler resultater</button>, hvis ikke skråll opp og endre det du vil endre og skriv ut på nytt";
    document.getElementById("utskrift").innerHTML = out;


}

function kalkuler() {
    let out= "";
    let sumkar = 0;
    for(let i in fullliste){
        sumkar+= fullliste[i].karakter;
    }
    let snitt = sumkar / fullliste.length;
    let poeng = snitt * 10 + Number(document.getElementById("ekstrapoeng").value);
    out += "<hr> <h1>du har "+poeng.toFixed(2) +" studiepoeng</h1>";
    document.getElementById("kalkuleringer").innerHTML = out;
}

function bubbleSort(arr){
    let sorted = false;
    while (!sorted){
        sorted = true;
        arr.forEach(function (element, index, array){
            if(array.length !== index+1){
                if (element.karakter > array[index+1].karakter ) {
                    array[index] = array[index+1];
                    array[index+1] = element;
                    sorted = false;
                }
            }

        });
    }
    return arr
}
function sk(id) {
    return "<select name='kn"+id+"' id='ki"+id+"'>" +
        "<option value='1'>1</option>" +
        "<option value='2'>2</option>" +
        "<option value='3'>3</option>" +
        "<option value='4'>4</option>" +
        "<option value='5'>5</option>" +
        "<option value='6'>6</option>" +
        "</select>";
}