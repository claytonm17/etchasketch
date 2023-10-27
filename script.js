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
        cell.style.backgroundColor = 'black';
    });
});

// Event listener for when clear button is clicked
clear.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});