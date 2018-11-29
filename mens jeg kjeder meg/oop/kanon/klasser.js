class kanonkule {
    constructor(x, y, speed, angle) {
        angle = angle * Math.PI / 180;
        this.kule = document.createElement("div");
        this.x = x;
        this.y = y;
        this.dx = speed * Math.cos(angle);
        this.dy = speed * Math.sin(angle);
        this.ddy = gravity;
        this.kule.className = "kule";
    }


    move() {
        this.x += this.dx; // flytt vannrett
        this.y += this.dy; // flytt loddrett
        this.dy += this.ddy; // endre fart loddrett mtp tyngdekraft
        this.kule.style.left = this.x; // forflytt bilde vannrett
        this.kule.style.top = this.y; // forflytt bilde loddrett

    }
}


class artillery {
    constructor(){
        this.html = document.getElementById("kanon");
        this.rotation = 0;
    }

    changeRot(amount){
        if(!(this.rotation + amount > 0 || this.rotation + amount <-90)){
            this.rotation += amount;
        }
        this.html.style.transform = "rotate("+ this.rotation + "deg)";

    }
}