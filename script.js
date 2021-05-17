window.addEventListener("DOMContentLoaded", createEtchASketch);

function createEtchASketch() {
    createSquaresContainer();
    createCustomizeBtn();
}

function createSquaresContainer() {
    const squaresContainer = document.createElement("div");
    squaresContainer.classList.add("squares-container");
    const body = document.body;
    squaresContainer.addEventListener("mouseover", colorizeSquare);
    body.appendChild(squaresContainer);
    drawSquares(squaresContainer);
}

function createCustomizeBtn() {
    const customizeBtn = document.createElement("button");
    customizeBtn.classList.add("customize-button");
    customizeBtn.innerText = "Customize!";
    document.body.appendChild(customizeBtn);
    customizeBtn.addEventListener("click", askNumberSquares);
}

function drawSquares(squaresContainer, squares = 4) {
    const totalSquares = squares * 4;
    for (let i = 0; i < totalSquares; i++) {
        const plainSquare = document.createElement("div");
        plainSquare.classList.add("square");
        squaresContainer.appendChild(plainSquare);
    }
}

function colorizeSquare(e) {
    if (e.target !== e.currentTarget) {
        randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
    }
}

function askNumberSquares() {
    const userChoice = parseInt(
        prompt("How many squares would you like? (1-64)")
    );
    return userChoice;
}
