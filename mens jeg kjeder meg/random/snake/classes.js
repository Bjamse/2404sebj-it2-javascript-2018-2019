class Snake{
    constructor() {
        this.head = document.createElement("div");
        document.body.appendChild(this.head);
        this.head.className = "piece";
        this.width = this.head.getBoundingClientRect().width;
        this.head.id = "head";
        // alle delene av slangen er kvadratiske så da går det å bruke wifth til både hæden og bredden på kvadratene
        this.head.style.left = (window.innerWidth/2 - this.width/2) + "px";
        this.head.style.top = (window.innerHeight/2 - this.width/2 ) + "px";
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
        this.tail[0].style.left = this.head.style.left;
        this.tail[0].style.top = this.head.style.top;

        // wrap around x axis
        if (this.head.getBoundingClientRect().left + mv[0] < 0) this.head.style.left = (window.innerWidth - this.width)+ "px";
        else if (this.head.getBoundingClientRect().right + mv[0] > window.innerWidth) this.head.style.left = 0 +"px";
        else this.head.style.left = (this.head.getBoundingClientRect().left + mv[0])+ "px";

        // wrap arround y axis
        if(this.head.getBoundingClientRect().top< 0)this.head.style.top = (window.innerHeight - this.width)+ "px";
        else if(this.head.getBoundingClientRect().bottom > window.innerHeight)this.head.style.top = 1 + "px";
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