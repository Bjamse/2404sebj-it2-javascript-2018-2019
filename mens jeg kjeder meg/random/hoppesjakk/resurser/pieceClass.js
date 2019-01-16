class pieceClass {
    constructor(x,y,where, color){
        this.diameter = 20;
        this.x =x;
        this.y = y;
        this.htmlElement = document.createElement("div");
        this.htmlElement.style.position = "fixed";
        this.htmlElement.style.width = this.diameter+"px";
        this.htmlElement.style.height = this.diameter+"px";
        this.htmlElement.style.border = "solid black 2px";
        this.htmlElement.style.borderRadius = "100%";
        this.htmlElement.style.backgroundColor = color;
        this.htmlElement.style.left = (this.x - (this.diameter/2))+ "px";
        this.htmlElement.style.top = (this.y - (this.diameter/2)) +"px";
        where.appendChild(this.htmlElement);
    }
}