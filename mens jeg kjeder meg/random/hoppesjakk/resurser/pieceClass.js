class pieceClass {
    constructor(x,y,placement, color){
        this.htmlElement = this.buildElement(x,y, placement, color);
    }

    buildElement(x, y,where){
        let p = document.createElement("div");
        p.style.left = x+ "px";
        p.style.top = y+"px";
        p.style.width = "20px";
        p.style.height = "20px";
        p.style.border = "solid black 2px";
        p.style.borderRadius = "100%";
        p.style.backgroundColor = "white";
        p.style.position = "absolute";
        p.style.color = color;
        where.appendChild(b);
        return p;
    }
}