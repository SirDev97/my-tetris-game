let square;
function setup() {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent('canvas');
    square = new Board(60, 80, SQAURE_SIZE, SQAURE_SIZE, 'yellow');
}

function draw() {
    background('#333');
    square.drawSquare();
    square.drawBoard();
}