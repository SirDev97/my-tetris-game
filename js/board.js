class Board {
    constructor() {
        this.board = [];
        this.generateBoard();
        this.score = 0;
    }

    generateBoard() {
        let boardSize = CANVAS_HEIGHT / SQAURE_SIZE;
        this.board = Array.from(new Array(boardSize), row => Array.from(new Array(boardSize), col => 0));
        // for (let x = 0; x < this.board.length; x++) {
        //     this.board[x] = [];
        //     for (let y = 0; y < this.board[x].length; y++) {
        //         this.board[x][y] = 0;
        //     }
        // }
    }

    drawEmptySquare(x, y) {
        stroke(EMPTY_SQAURE);
        fill(BACKGROUND_COLOR);
        rect(x * SQAURE_SIZE, y * SQAURE_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    draw() {
        this.board.forEach((row, i) => row.forEach((square, j) => square === 0 ? this.drawEmptySquare(i, j) : square.draw()));
    }

    lockPiece(piece) {
        piece.newShape.reduce((acc, val) => acc.concat(val.filter(col => col != 0)), []).forEach(square => this.board[square.y / SQAURE_SIZE][square.x / SQAURE_SIZE] = square);
    }

    pieceCollision(piece, collision = (rect1, rect2) => rectCollision(rect1, rect2)) {
        let squares = piece.newShape.reduce((z, x) => z.concat(x.filter(col => col != 0)), []);
        let piecesInBoard = this.board.reduce((z, x) => z.concat(x.filter(col => col != 0)), []);

        return squares.reduce((acc, square) => piecesInBoard.filter(piece => collision(square, piece)).length > 0 ? true : acc, false);
    }

    cleanFilledRows() {
        // let preBoxesCount = this.countBoxes()
        this.board.forEach((row, i) => { if (row.every(box => box != 0)) { row.forEach((element, j) => this.board[i][j] = 0); } });
        console.log(this.board);
        // let postBoxesCount = this.countBoxes()
        // preBoxesCount != postBoxesCount ? points += preBoxesCount - postBoxesCount : points = points
    }
}