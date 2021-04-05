class Square {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.board = [];
    }

    drawSquare() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

    drawBoard() {
        for (let x = 0; x < CANVAS_WIDTH; x += SQAURE_SIZE) {
            for (let y = 0; y < CANVAS_HEIGHT; y += SQAURE_SIZE) {
                // stroke(5);
                strokeWeight(2);
                line(x, 0, x, CANVAS_HEIGHT);
                line(0, y, CANVAS_WIDTH, y);
            }
        }
    }
}