document.addEventListener('DOMContentLoaded', () => {
    // Your code here


// Initial values
let defaultDrawColor = 'black';
let defaultSize = 16;

let drawColor = defaultDrawColor;
let size = defaultSize;

// Allowing for asjustment of canvas size
const sizeInput = document.getElementById('size');
const setSize = document.getElementById('set-size');

let userValue = '';

sizeInput.addEventListener('input', (event) => {
    userValue = parseInt(event.target.value, 10);
});

setSize.addEventListener('click', () => {
    deleteCanvas();
    createCanvas(userValue);
    console.log(userValue)
});

function deleteCanvas() {
    const elements = document.getElementsByClassName('cell');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    };
};

function createCanvas(size) {
    // Creating canvas for etch-a-sketch
    let canvas = document.querySelector('.canvas');
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Inital creation of canvas
    for (let i = 0; i < (size*size); i++) {
        let cell = document.createElement('div');
        cell.style.backgroundColor = 'white';
        cell.className = 'cell';
        canvas.insertAdjacentElement('beforeend', cell)
    };
    etchASketch();
};

// Assigning cells
let cells = document.querySelectorAll('.cell');

// Assigning clear button
const clear = document.getElementById('clear-button');

// Actual etch-a-sketch functionality
function etchASketch() {
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = drawColor;
        });
    });
}

// Primary function
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = drawColor;
    });
});

// Event listener for when clear button is clicked
clear.addEventListener('click', () => {
    clearCanvas();
});

function clearCanvas() {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
};

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

// Random functionality using RGB
function randomColorGeneration() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    console.log(`rgb(${randomR}, ${randomG}, ${randomB})`);
    return `rgb(${randomR}, ${randomG}, ${randomB})`; 
};
function randomColorSet() {
    drawColor = randomColorGeneration();
};

// Building canvas
createCanvas(size);
etchASketch();

});