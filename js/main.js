let square;
let piece;

function setup() {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent('canvas');
    // square = new Square(CANVAS_WIDTH / 2.2, 0, SQAURE_SIZE, SQAURE_SIZE, 'red');
    piece = new Piece(S[0], CANVAS_WIDTH / 2.2, 0, 'yellow');
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

