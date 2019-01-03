let debtors = [];
let updateTime = 500;


window.onload = boot;

function boot() {
    setInterval(writeTableOfDebtors, updateTime);
    setInterval(writeStatus, updateTime);
    writeDebtorSelector();
}

// legg til ny person
function addDebtor() {
    // hver person i lista debtors er et assosiativt array med navn og hvor mye de har betalt
    let newDebtor = {
        name : document.getElementById("inputDebtorName").value,
        paid : 0
    };
    document.getElementById("log").innerText += newDebtor.name + " ble lagt til \n";
    // legger til i liste av personer
    debtors.push(newDebtor);
    writeDebtorSelector();
}

function addDebtToDebtor() {
    let debtor = debtors[document.getElementById("debtorSelector").value];
    debtor.paid += Number(document.getElementById("debtorPayment").value);
    document.getElementById("log").innerText += debtor.name + " betalte inn " + document.getElementById("debtorPayment").value + " \n";
}

// skriv til tabell med innbetalinger
function writeTableOfDebtors(){
    let output = "<table>";
    output += "<tr><th>Navn</th><th>Innbetalt</th><th>Overbetalt</th><th><sub>Fjern</sub></th></tr>";
    for(let i in debtors){
        output += "<tr>" +
            "<td>"+ debtors[i].name +"</td>" +
            "<td>"+ debtors[i].paid +" kr</td>" +
            "<td>"+ (debtors[i].paid - Number(document.getElementById('debtorsShouldPay').innerText))+"</td>" +
            "<td><button onclick='debtors.splice("+i+",1);writeDebtorSelector()'>x</button></td>" + // bare for å fjerne en person ifra tabellen
            "</tr>";
    }
    output += "</table>";
    document.getElementById("tableOfDebtors").innerHTML = output;
}

// skriv til selectboksen man bruker når man legger til ny betaling
function writeDebtorSelector(){
    let output ="";
    for (let i in debtors){
        output += "<option value='"+i+"'>"+debtors[i].name+"</option>";
    }
    document.getElementById("debtorSelector").innerHTML = output;
    document.getElementById("addDebtButton").disabled = debtors.length === 0;
}

// skriv status på innbetalinger
function writeStatus(){
    let totaltPaid = 0;
    let bill = document.getElementById("debtCheckBoxIndividual").checked ? Number(document.getElementById("debt").value)* debtors.length: Number(document.getElementById("debt").value);
    for(let i in debtors){
        totaltPaid += debtors[i].paid;
    }

    document.getElementById("TotalPaid").innerHTML = totaltPaid;
    document.getElementById("percentTotalPaid").innerHTML = (totaltPaid/bill * 100 ).toFixed(2);
    document.getElementById("NumberOfDebtors").innerHTML = debtors.length;
    document.getElementById("debtorsShouldPay").innerHTML = (bill/debtors.length).toFixed(2);
    document.getElementById("averagePaid").innerHTML = (totaltPaid/debtors.length).toFixed(2);
}

// sørger for at når du trykker på den ene så blir den andre "unclicked"
function flipDebtTotalSelector(obj) {
    if(obj.id === "debtCheckBoxIndividual"){
        document.getElementById("debtCheckBoxCommon").checked = false;
    }else{
        document.getElementById("debtCheckBoxIndividual").checked = false;
    }
}

// vis eller skjul loggen av ting som har skjedd
function showHideLog(){
    if (document.getElementById("log").style.display === "none"){
        document.getElementById("log").style.display = "block";
    }else{
        document.getElementById("log").style.display = "none";
    }
}