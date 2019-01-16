class playerClass {
    constructor(isPlayerOne){
        this.pieces= [];
        if (isPlayerOne)this.color = "white";
        else this.color = "black";

    }

    placePieces(numberOfPieces, board) {
        let spacing = board.width / (numberOfPieces);
        let tmpY = board.top;
        if (this.color === "black") {
            tmpY = board.bottom;
        }
        for (let i = 0; i < numberOfPieces; i++) {
            let tmpX = board.left + i * spacing + (spacing/2);
            this.pieces.push(new pieceClass(tmpX, tmpY, board.htmlElement, this.color));
        }
    }
    turn(){

    }
}