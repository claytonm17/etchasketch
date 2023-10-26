let canvas = document.querySelector('.canvas');
canvas.style.gridTemplateColumns = 'repeat(16, 1fr)';
canvas.style.gridTemplateRows = 'repeat(16, 1fr)';

for (let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'gray';
    canvas.insertAdjacentElement('beforeend', cell)
}