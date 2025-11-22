numSquares = 16;

const container = document.querySelector('.container');

for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

console.log('hi');