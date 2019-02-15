
let currentImmage = 0;
function moveimages(x) {
    let images = document.getElementsByClassName("introimg");
    let spacing = images[1].getBoundingClientRect().left - images[0].getBoundingClientRect().right;
    let imageWidth = images[0].getBoundingClientRect().width;
    let movelengt = spacing + imageWidth;
    if ((x === 1 && currentImmage !== 3) || (x === -1 && currentImmage !== 0)){
        currentImmage += x;
        for (let i in images) {

            images[i].style.transform = "translate("+Number(-movelengt*currentImmage) + "px, 0px)";

        }
    }
}