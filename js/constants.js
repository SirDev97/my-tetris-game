const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 400;
const SQAURE_SIZE = 20;
const BACKGROUND_COLOR = 50;
const TIMER = 500;
const EMPTY_SQAURE = 'WHITE';

const I = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
];

const J = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]
];

const L = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1]
];

const O = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
];

const S = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
];

const T = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
];

const Z = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
];

const PIECES = [Z, S, T, O, L, I, J];
const COLORS = ['red', 'green', 'yellow', 'blue', 'purple', 'cyan', 'orange'];
const COLLISION_MARGIN = 2;
