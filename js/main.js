let piece;
let board;

function setup() {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent('canvas');
    // square = new Square(CANVAS_WIDTH / 2.2, 0, SQAURE_SIZE, SQAURE_SIZE, 'red');
    // piece = new Piece(J, CANVAS_WIDTH / 2.5, 0, 'yellow');
    board = new Board();
    generateNewPiece();
    setInterval(() => applyGravity(), TIMER);
}

function draw() {
    background(BACKGROUND_COLOR);
    board.draw();
    piece.draw();
}

function applyGravity() {
    if (!piece.pieceCollision(square => square.y === CANVAS_HEIGHT - SQAURE_SIZE)) {
        piece.y += SQAURE_SIZE;
    } else {
        board.lockPiece(piece);
        generateNewPiece();
    }
}

function generateNewPiece() {
    let index = Math.floor((Math.random() * PIECES.length));
    let indexColor = Math.floor((Math.random() * COLORS.length));
    piece = new Piece(PIECES[index], CANVAS_WIDTH / 2.5, 0, COLORS[indexColor]);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        piece.rotatePiece();
    }
    if (keyCode === LEFT_ARROW && !piece.pieceCollision(square => square.x === 0)) {
        piece.x -= SQAURE_SIZE
    }
    if (keyCode === RIGHT_ARROW && !piece.pieceCollision(square => square.x + SQAURE_SIZE === CANVAS_WIDTH)) {
        piece.x += SQAURE_SIZE
    }
    if (keyCode === DOWN_ARROW) {
        applyGravity();
    }
}