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
        where.appendChild(b);
        return b;
    }

    get width(){
        return this.htmlElement.style.width;
    }
    get height(){
        return this.htmlElement.style.height;
    }

}