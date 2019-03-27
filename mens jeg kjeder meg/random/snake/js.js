window.onload = boot;
let restriction;

function boot() {
    restriction= {
        top:0,
        bottom: window.innerHeight,
        left : 0,
        right : window.innerWidth
    };

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
    addTail(x){
        for(let i in x){
            let tmp = document.createElement("div");
            tmp.className = "piece";
            document.body.appendChild(tmp);
            tmp.style.left = "-300px";
            this.tail.push(tmp)
        }
    }

    move(x){
        let l = this.width + 2;
        // movment vector
        let mv = {"left":[-l,0], "up":[0,-l], "right":[l,0], "down":[0,l]}[x];
        for(let i = this.tail.length-1;i > 0 ; i--){
            this.tail[i].style.left = this.tail[i-1].style.left;
            this.tail[i].style.top = this.tail[i-1].style.top;
        }
        this.head.style.left = (this.head.getBoundingClientRect().left + mv[0])+ "px";
        this.head.style.right = (this.head.getBoundingClientRect().top + mv[1])+ "px";
    }

}


