window.addEventListener("DOMContentLoaded", createEtchASketch);

function createEtchASketch() {
    const squaresContainer = createSquaresContainer();
    createSquares(squaresContainer, 4);
    createCustomizeBtn();
}

function createSquaresContainer() {
    const squaresContainer = document.createElement("div");
    squaresContainer.classList.add("squares-container");
    const body = document.body;
    squaresContainer.addEventListener("mouseover", colorizeSquare);
    body.appendChild(squaresContainer);
    return squaresContainer;
}

function createSquares(container, squares) {
    const containerWidth = window.getComputedStyle(container).width;
    const containerWithNum = containerWidth.slice(0, length - 2);
    const totalSquares = squares * squares;
    const squareSize = containerWithNum / squares;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        container.appendChild(square);
    }
}

function colorizeSquare(e) {
    if (e.target !== e.currentTarget) {
        randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
    }
}

function createCustomizeBtn() {
    const customizeBtn = document.createElement("button");
    customizeBtn.classList.add("customize-button");
    customizeBtn.innerText = "Customize!";
    document.body.appendChild(customizeBtn);
    customizeBtn.addEventListener("click", askNumberSquares);
}

function askNumberSquares() {
    const userChoice = parseInt(
        prompt("How many squares would you like? (1-64)")
    );
    return userChoice;
}
