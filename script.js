// Creating canvas for etch-a-sketch
let canvas = document.querySelector('.canvas');
canvas.style.gridTemplateColumns = 'repeat(16, 1fr)';
canvas.style.gridTemplateRows = 'repeat(16, 1fr)';

// Inital creation of canvas
for (let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.className = 'cell';
    canvas.insertAdjacentElement('beforeend', cell)
};

// Assigning cells
const cells = document.querySelectorAll('.cell');

// Assigning clear button
const clear = document.getElementById('clear-button');

// Actual etch-a-sketch functionality
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = drawColor;
    });
});

// Event listener for when clear button is clicked
clear.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

// Initial draw color set to black
let drawColor = 'black';

// Colored buttons assignment
const black = document.getElementById('black-button');
const white = document.getElementById('white-button');
const random = document.getElementById('random-button');

// Colored buttons functionality
black.addEventListener('click', () => {
    drawColor = 'black';
});
white.addEventListener('click', () => {
    drawColor = 'white';
});
random.addEventListener('click', () => {
    randomColorSet()
});

// Random functionality
function randomColorGeneration() {
let randomHex = (Math.random() * 0xfffff * 100000).toString(16);
let randomColor = ('#' + randomHex.slice(0,6));
return randomColor;
};
function randomColorSet() {
    let randomColorGen = randomColorGeneration();
    drawColor = randomColorGen;
};