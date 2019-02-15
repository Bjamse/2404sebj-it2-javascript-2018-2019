let arrang = [
    "Trondheim kammermusikkfestival: Fabelaktig Formidag",
    "Spill opp!",
    "Onsdagskonsert",
    "Juiogat: joik for folk"
];



function BuyTickets() {
    let arrangement = arrang[Number(document.getElementById("arrangement").value)];
    let antV = Number(document.getElementById("antVoksne").value);
    let antB = Number(document.getElementById("antBarn").value);
    let pris = antB * 50 + antV * 100;
    let out = "";
    if (antV + antB >=5){ pris = pris - pris*.2;}
    if(antB+antV !== 0 || antB+antV !== undefined || !(isNaN(antB+antV))){
        out += "<b>Bestilling:</b><br> du har bestilt "
            + Number( antV+ antB) + " billetter til "+ arrangement+", ";
    }
    if (antB + antV ===  0){
        document.getElementById("Bestillingsutskrift").innerHTML = "Sorry det skjedde en feil. sørg får å fylle ut alle felter!";
        return;
    }
    if (antV > 0){out += antV + " voksne"}
    if (antV > 0 && antB  > 0){out+= " og "}
    if (antB > 0){out += antB +" barn";}
    out +=". Totalprisen blir "+pris+" kr";
    if (antV + antB >=5){out+= ", inklusiv rabatt på 20 %"}
    document.getElementById("Bestillingsutskrift").innerHTML = out+"."


}

