class kanonkule {
    constructor(speed, angle) {
        angle = angle * Math.PI / 180;
        this.html = document.createElement("div");
        this.html.className = "kule";
        document.getElementById("kuler").appendChild(this.html);
        this.x = kanon.html.getBoundingClientRect().left + kanon.html.getBoundingClientRect().width / 2;
        this.y = kanon.html.getBoundingClientRect().top + kanon.html.getBoundingClientRect().height / 2 -15;
        this.dx = speed * Math.cos(angle);
        this.dy = speed * Math.sin(angle);
        this.ddy = gravity;

    }


    move() {
        this.x += this.dx; // flytt vannrett
        this.y += this.dy; // flytt loddrett
        this.dy += this.ddy; // endre fart loddrett mtp tyngdekraft
        this.html.style.left = this.x + "px"; // forflytt bilde vannrett
        this.html.style.top = this.y + "px"; // forflytt bilde loddrett
    }

    outOfBounds() {
        if (this.y > window.innerHeight || this.x > window.innerWidth) {
            this.htmlDestroctor();
            return true;
        }
        return false;
    }

    htmlDestroctor() {
        document.getElementById("kuler").removeChild(this.html);
    }
}


class artillery {
    constructor() {
        this.html = document.getElementById("kanon");
        this.rotation = 0;
        this.html.style.transform = "rotate(" + (this.rotation ) + "deg)";
    }

    changeRot(amount) {
        if (!(this.rotation + amount > 0 || this.rotation + amount < -90)) {
            this.rotation += amount;
        }
        this.html.style.transform = "rotate(" + (this.rotation ) + "deg)";

    }
}

class blink {
    constructor() {
        this.html = document.getElementById("maal");
        this.moveRandom()
    }

    moveRandom() {
        this.html.style.top = (Math.random() * (window.innerHeight - this.html.getBoundingClientRect().height)) + "px";

        this.html.style.left = (Math.random() * (window.innerWidth - this.html.getBoundingClientRect().width -
            kanon.html.getBoundingClientRect().width) + kanon.html.getBoundingClientRect().width) + "px";
    }
    collide(obj){
        let r1 = this.html.getBoundingClientRect();
        let r2 = obj.html.getBoundingClientRect();
        return (r1.left <= r2.left + r2.width &&
                r2.left <= r1.left + r1.width &&
                r1.top <= r2.top + r2.height &&
                r2.top <= r1.top + r1.height
        )
    }
}