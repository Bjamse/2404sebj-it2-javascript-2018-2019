class boardClass {
    constructor(width,height,where) {
        this.htmlElement = document.createElement("div");
        this.htmlElement.style.width = width +"px";
        this.htmlElement.style.height = height +"px";
        this.htmlElement.style.border = "solid black 2px";
        this.htmlElement.style.backgroundColor = "white";
        this.htmlElement.style.margin = "auto";
        this.htmlElement.style.overflow = "visible";
        where.appendChild(this.htmlElement);

    }
    get width(){    return this.htmlElement.getBoundingClientRect().width}
    get height(){   return this.htmlElement.getBoundingClientRect().height}
    get top(){      return this.htmlElement.getBoundingClientRect().top}
    get bottom(){   return this.htmlElement.getBoundingClientRect().bottom}
    get left(){     return this.htmlElement.getBoundingClientRect().left}
    get right(){    return this.htmlElement.getBoundingClientRect().right}
}