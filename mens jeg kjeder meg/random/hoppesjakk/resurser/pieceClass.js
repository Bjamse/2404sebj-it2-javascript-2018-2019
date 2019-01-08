class pieceClass {
    constructor(x,y,placement, color){
        this.diameter = 20;
        this.x =x;
        this.y = y;
        this.htmlElement = this.buildElement(placement, color);
    }

    buildElement(where, color){
        let p = document.createElement("div");
        p.style.position = "fixed";
        p.style.width = this.diameter+"px";
        p.style.height = this.diameter+"px";
        p.style.border = "solid black 2px";
        p.style.borderRadius = "100%";
        p.style.backgroundColor = color;
        p.style.left = (this.x - (this.diameter/2))+ "px";
        p.style.top = (this.y - (this.diameter/2)) +"px";
        where.appendChild(p);
        return p;
    }
}