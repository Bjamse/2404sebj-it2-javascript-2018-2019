class boardClass {
    constructor(width,height,where) {
        this.htmlElement = this.buildElement(width,height,where);


    }

    buildElement(w, h,where){
        let b = document.createElement("div");
        b.style.width = w +"px";
        b.style.height = h +"px";
        b.style.border = "solid black 2px";
        b.style.backgroundColor = "white";
        b.style.margin = "auto";
        b.style.overflow = "visible";
        where.appendChild(b);
        return b;
    }

    get width(){    return this.htmlElement.getBoundingClientRect().width}
    get height(){   return this.htmlElement.getBoundingClientRect().height}
    get top(){      return this.htmlElement.getBoundingClientRect().top}
    get bottom(){   return this.htmlElement.getBoundingClientRect().bottom}
    get left(){     return this.htmlElement.getBoundingClientRect().left}
    get right(){    return this.htmlElement.getBoundingClientRect().right}
}