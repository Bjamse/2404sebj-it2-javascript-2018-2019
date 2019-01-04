class Board {
    constructor(width, height, place){
        this.width = width;
        this.height = height;
        this.table = document.createElement("table");
        this.cells = [];
        this.build();
        place.appendChild(this.table);
    }


    cellOnXY(x,y){
        if (x < 0){x+=this.width}
        if (y < 0){y+=this.height}
        return this.cells[y%this.height][x%this.width]
    }

    build(){
        for(let i=0; i < this.height; i++){
            let tr = document.createElement("tr");
            let row = [];
            for(let j=0; j< this.width; j++){
                let td = document.createElement("td");
                td.setAttribute("x",j);
                td.setAttribute("y",i);
                row.push(new Cell(j,i,td));
                tr.appendChild(td);
            }
            this.cells.push(row);
            this.table.appendChild(tr);
        }
    }
}