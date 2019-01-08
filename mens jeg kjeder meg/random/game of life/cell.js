//todo:
//Shit funker ikke... veit ikke hvorfor...
class Cell{
    constructor(x,y,html){
        this.html = html;
        this.x = x;
        this.y = y;
        this.alive = false;
        this.shouldDie = false;

    }
    countAliveNeighbours(){
        let count = 0;
        for(let i = -1; i < 2; i++){
            for(let j = -1; j < 2;j++ ){
                if(i === 0 && j === 0){ continue;}
                count += ((brett.cellOnXY(this.x+i,this.y+j).alive)? 1: 0);
            }
        }
        return count;
    }

    switsj(){
        if(!this.alive){this.live()} else {this.die()}
    }

    check(){
        let a = this.countAliveNeighbours();
        if(this.alive && a < 2){this.shouldDie = true}
        if(this.alive && (a === 2 || a === 3)){this.shouldDie = false}
        if(this.alive && a > 3){this.shouldDie = true}
        if(!this.alive && a === 3){this.shouldDie = false}

    }
    doSuggestedAction(){
        if (this.shouldDie){
            this.die()
        }else{
            this.live()
        }
    }
    live(){
        this.html.style.backgroundColor = "#000";
        this.html.style.borderColor = "#fff";
        this.alive = true;
    }
    die(){
        this.html.style.backgroundColor = "#fff";
        this.html.style.borderColor = "#000";
        this.alive = false;
    }

}