class gameClass {
    constructor(placeWhereTheGameBoardIsGoingToBe) {
        this.location = placeWhereTheGameBoardIsGoingToBe;
        this.pOne = new playerClass(true);
        this.pTwo = new playerClass(false);
        this.board = new boardClass(400, 400, this.location);
        this.defaultNumberOfpieces = 4;
        this.pOne.placePieces(this.defaultNumberOfpieces, this.board);
        this.pTwo.placePieces(this.defaultNumberOfpieces, this.board);
        // this.play()
    }

    play() {
        let didHeWin = false;
        while (true) {
            didHeWin = this.pOne.turn();
            if(didHeWin){break}

            didHeWin = this.pTwo.turn();
            if(didHeWin){break}
        }
    }
}
