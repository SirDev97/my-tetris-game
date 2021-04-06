class Piece {
    constructor(shape, x, y, color) {
        this.shape = shape;
        this.x = x;
        this.y = y;
        this.color = color;
        this.newShape = this.create(shape.length);
    }

    create(piece) {
        return Array.from(new Array(piece), (x, i) =>
            Array.from(new Array(piece), (y, j) =>
                this.shape[i][j] === 1 ? new Square(this.x + j * SQAURE_SIZE, this.y + i * SQAURE_SIZE, SQAURE_SIZE, SQAURE_SIZE, this.color) : 0)
        )
    }

    draw() {
        this.updatePiecePosition();
        this.newShape.forEach(element => element.filter(i => i !== 0).forEach(element => element.draw()));
    }

    updatePiecePosition() {
        this.newShape.forEach((x, i) => x.forEach((e, j) => {
            if (e) {
                e.x = this.x + j * SQAURE_SIZE;
                e.y = this.y + i * SQAURE_SIZE;
            }
        }));
    }

    rotateShapeArray() {
        this.newShape.reverse()[0].map((column, index) => {
            this.newShape.map(row => row[index]);
        });
    }

    transposeShapeArray() {
        let dimension = this.newShape.length
        let transposed = Array.from(new Array(dimension), e => Array.from(new Array(dimension), x => null));
        this.newShape.forEach((x, i) => x.forEach((e, j) => transposed[j][i] = e));
        this.newShape = transposed;
    }

    rotatePiece() {
        this.rotateShapeArray();
        this.transposeShapeArray();
        this.updatePiecePosition();
    }

    pieceCollision(collision) {
        return this.newShape.reduce((acc, val) => acc.concat(val.filter(col => col != null).filter(square => collision(square))), []).length > 0;
    }
}
