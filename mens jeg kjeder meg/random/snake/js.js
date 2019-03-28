window.onload = boot;
let restriction;
let s;
let loop;
let delay = 100;
let points =[];
let score = 0;
function boot() {
    restriction= {
        top:0,
        bottom: window.innerHeight,
        left : 0,
        right : window.innerWidth
    };

    s = new Snake();
    document.onkeydown = directionChange;
    loop = setInterval(function () {
        ldirection= direction;
        s.move(direction);
    }, delay);
    points.push(pp());
}
// place point
function pp(){
    let date = new Date();
    let tmp = document.createElement("div");
    tmp.className = "piece";
    tmp.style.backgroundColor = "black";
    tmp.style.borderRadius = "100%";
    document.body.appendChild(tmp);
    tmp.style.left = Math.floor(Math.random() * (window.innerWidth-tmp.getBoundingClientRect().width)) + "px";
    tmp.style.top = Math.floor(Math.random() * (window.innerHeight-tmp.getBoundingClientRect().height)) + "px";
    tmp.id = date.getTime();

    return tmp
}


class Snake{
    constructor() {
        this.head = document.createElement("div");
        document.body.appendChild(this.head);
        this.head.className = "piece";
        this.width = this.head.getBoundingClientRect().width;
        this.head.id = "head";
        // alle delene av slangen er kvadratiske så da går det å bruke wifth til både hæden og bredden på kvadratene
        this.head.style.left = (restriction.right/2 - this.width/2) + "px";
        this.head.style.top = (restriction.bottom/2 - this.width/2 ) + "px";
        this.tail = [];
        this.addTail(3);
    }
    addTail(x) {
        for(let i = 0; i < x; i++){
            let tmp = document.createElement("div");
            tmp.className = "piece";
            document.body.appendChild(tmp);
            tmp.style.left = "-300px";
            this.tail.push(tmp)

        }
    };

    move(x){
        let l = this.width + 2;
        // movment vector
        let mv = {"left":[-l,0], "up":[0,-l], "right":[l,0], "down":[0,l]}[x];
        for(let i = this.tail.length-1;i > 0 ; i--){
            this.tail[i].style.left = this.tail[i-1].style.left;
            this.tail[i].style.top = this.tail[i-1].style.top;
        }
        this.tail[1].style.left = this.head.style.left;
        this.tail[1].style.top = this.head.style.top;

        // wrap around x axis
        if (this.head.getBoundingClientRect().left + mv[0] < 0) this.head.style.left = (window.innerWidth - this.width)+ "px";
        else if (this.head.getBoundingClientRect().right + mv[0] > window.innerWidth) this.head.style.left = 0 +"px";
        else this.head.style.left = (this.head.getBoundingClientRect().left + mv[0])+ "px";

        // wrap arround y axis
        if(this.head.getBoundingClientRect().top< 0)this.head.style.top = (window.innerHeight - this.width)+ "px";
        else if(this.head.getBoundingClientRect().bottom > window.innerHeight)this.head.style.top = 0+ "px";
        else this.head.style.top = (this.head.getBoundingClientRect().top + mv[1])+ "px";

        let tmpCollideid = this.collide(points);
        if (tmpCollideid !== false){
            this.addTail(2);
            score ++;
            document.getElementById("score").innerText = score;
            removeElementByID(points[tmpCollideid].id);
            points.pop(tmpCollideid);
            points.push(pp());
        }


        tmpCollideid= this.collide(this.tail);
        if (tmpCollideid !== false ){
            endGame();
        }
    }

    collide(x){
        for(let i in x){
            if (this.head.getBoundingClientRect().left <= x[i].getBoundingClientRect().left + x[i].getBoundingClientRect().width && // en stor if test for å se om ballen og rekkerten deler noen piksler (har kollidert)
                x[i].getBoundingClientRect().left <= this.head.getBoundingClientRect().left + this.head.getBoundingClientRect().width &&
                this.head.getBoundingClientRect().top <= x[i].getBoundingClientRect().top + x[i].getBoundingClientRect().height &&
                x[i].getBoundingClientRect().top <= this.head.getBoundingClientRect().top + this.head.getBoundingClientRect().height){
                return i;
            }
        }
        return false;
    }

    remove(){
        removeElement(this.head);
        for(let i in this.tail){
           removeElement(this.tail[i])
        }
    }


}
let direction = "right";
let ldirection ="right";
function directionChange(evt){
    document.onkeydown = directionChange;
    let tmp ={37:"left", 39:"right", 38:"up", 40:"down",65:"left", 68:"right", 87:"up", 83: "down" }[evt.keyCode];
    if( (tmp === "right" && ldirection !== "left")||
        (tmp === "left" && ldirection !== "right")||
        (tmp === "down" && ldirection !== "up")||
        (tmp === "up" && ldirection !== "down")){
        direction= tmp;
        if(tmp === "right"){    s.head.style.transform= "rotate(0deg)" }
        else if(tmp === "up"){  s.head.style.transform= "rotate(-90deg)" }
        else if(tmp === "down"){s.head.style.transform= "rotate(90deg)" }
        else if(tmp === "left"){
            s.head.style.transform= "rotate(180deg)";
        }
    }

}

function removeElementByID(elementId){
    // Removes an element from the document
    let element = document.getElementById(elementId);
    removeElement(element);
}
function removeElement(element) {
    element.parentNode.removeChild(element);
}


function endGame() {
    clearInterval(loop);
    s.remove();
    alert("GG")
}