window.onload = boot;

function boot() {
    let tmp = localStorage.getItem("farge");
    if (tmp !== undefined) document.body.style.backgroundColor = tmp;
}


function endre() {
    let farge = document.getElementById("farge").value;
    document.getElementById("wrapper").style.backgroundColor = farge;
    localStorage.setItem("farge", farge);
}

