
//template for objektet medlemmer (er ikke objekt orientert)
// etmedlem skal se slik ut :
// {
//  navn: "per",
//  etternavn:"pettersen",
//  karakterer:{norsk:1,matte:3,tysk:6 ....}
//  osv...
//  }

// for å hente dataene fra lista med medlemmer så vleger du først "medlem[i]" der i er nummeret i lista.

// så går vi vitdere til f.esk navnet: "medlemer[i].navn"   (outputen her vil bli navnet)

// vil du hente karakterene til en person så må du skrive : "medlemmer[i].karakterer.norsk



let medlemmer = [];



function leggTilMedlemmer() {
    let NAME = "dette bytter du ut med en inputt fra brukeren";
    let SURNAME = "dette bytter du ut med en inputt fra brukeren";


    medlemmer.push( // lager et objekt/array som amn pusher til lista med medlemmer
        {
            navn:NAME,
            etternavn:SURNAME,
            karakterer:{
                norsk:5,
                tysk:4,
                matte:3,
                it:6
            },
            epost: "en input med en epost",
            adresse: "adresse"
        }
    );
}


function fjernFraMedlemmer(id){
    delete medlemmer[id];
}

