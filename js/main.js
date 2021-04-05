let square;
function setup() {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent('canvas');
    square = new Square(60, 60, SQAURE_SIZE, SQAURE_SIZE, 'yellow');
}

function draw() {
    background(150);
    square.drawSquare();
    square.drawBoard();
}