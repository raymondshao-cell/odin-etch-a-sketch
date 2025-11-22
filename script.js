const promptBtn = document.createElement('button');

numSquares = 16;

const container = document.querySelector('.container');

for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', function() {
        if (this.style.backgroundColor === "") {
            this.style.backgroundColor = 'black';
        }
    });
});