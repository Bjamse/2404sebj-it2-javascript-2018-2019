function visualExp() {
    let x = document.getElementById("x").value * 1;
    let y = document.getElementById("y").value * 1;
    let letters = "abcdefghijklmnopqrstuvwxyzæøå".split("");
    let vout = "<table>";
    let arr =[];
    let t = [];
    let l = "";
    for(let i = 0; i < y; i++){
        vout += "<tr>";
        t = [];
        l = letters.shift();
        for(let j = 0; j < x; j++){
            vout += "<td>"+l+j+"</td>";
            t.push(l+j);
        }
        vout += "</tr>";
        arr.push(t);
    }
    vout += "</table>";

    document.getElementById("table").innerHTML = vout;

    let res = "arr = [";
    for(let i in arr){
        res += "["+ arr[i]+"]";
    }
    res += "];";

    let res2 =  "\n\n//eller enklere vist\n\n arr = [\n";
    for(let i in arr){
        res2 += "["+arr[i]+ "],\n";
    }
    res2 += "];";

    document.getElementById("res").innerText = res + res2;
}