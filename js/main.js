let square;
let piece;

function setup() {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent('canvas');
    // square = new Square(CANVAS_WIDTH / 2.2, 0, SQAURE_SIZE, SQAURE_SIZE, 'red');
    piece = new Piece(J[0], CANVAS_WIDTH / 2.5, 0, 'yellow');
    setInterval(() => applyGravity(), TIMER);
}

function draw() {
    background(BACKGROUND_COLOR);
    // square.draw();
    piece.draw();
}

function applyGravity() {
    piece.y += SQAURE_SIZE;
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

