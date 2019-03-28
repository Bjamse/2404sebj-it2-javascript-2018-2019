window.onload = boot;
let restriction;
let s;
let loop;
let delay = 100;
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
let points =[];
// place point
function pp(){
    let tmp = document.createElement("div");
    tmp.className = "piece";
    tmp.style.backgroundColor = "black";
    tmp.style.borderRadius = "100%";
    tmp.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    tmp.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    document.body.appendChild(tmp);
    return tmp
}


class Snake{
    constructor() {
        this.head = document.createElement("div");
        document.body.appendChild(this.head);
        this.head.className = "piece";
        this.width = this.head.getBoundingClientRect().width;
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

    }


}
let direction = "right";
let ldirection ="right";
function directionChange(evt){
    document.onkeydown = directionChange;
    tmp ={37:"left", 39:"right", 38:"up", 40:"down"}[evt.keyCode];
    if( (tmp === "right" && ldirection !== "left")||
        (tmp === "left" && ldirection !== "right")||
        (tmp === "down" && ldirection !== "up")||
        (tmp === "up" && ldirection !== "down")){
        direction= tmp;
    }

}

