class Board {
    constructor() {
        this.board = [[]];
        this.generateBoard();
    }

    generateBoard() {
        let boardSize = CANVAS_HEIGHT / SQAURE_SIZE;
        this.board = Array.from(new Array(boardSize), row => Array.from(new Array(boardSize), col => 0))
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
        piece.newShape.reduce((z, x) => z.concat(x.filter(col => col != 0)), []).forEach(square => this.board[square.y / SQAURE_SIZE][square.x / SQAURE_SIZE] = square)
    }
}