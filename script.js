let gridHeight = 4;

function createGrid(gH) {
    const existingContainer = document.querySelector('.container');
    if (existingContainer) {
        existingContainer.remove();
    }

    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    calcWidth = `calc(${100 / gH}% - (2 * var(--gmargin)))`
    console.log(calcWidth);

    document.documentElement.style.setProperty('--calcWidth', calcWidth);


    for (let i = 0; i < gH ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            if (this.style.backgroundColor === "") {
                const r = Math.floor(Math.random()*256);
                const g = Math.floor(Math.random()*256);
                const b = Math.floor(Math.random()*256);
                this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });
    });
}

const promptBtn = document.createElement('button');
promptBtn.textContent = 'Change Grid-Size';
promptBtn.classList.add('size-button');
document.body.appendChild(promptBtn);

createGrid(gridHeight);

promptBtn.addEventListener('click', () => {
    let inputNum = prompt("Enter a number for the grid's size: ");
    if (inputNum !== null) {
        gH = parseInt(inputNum, 10);
    } else {
        return
    }

    if (gH > 100) {
        gH = 100;
        console.log(`Size too large, set to max size: ${gH}`);
    }

    createGrid(gH);
});
