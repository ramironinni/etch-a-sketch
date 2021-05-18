window.addEventListener("DOMContentLoaded", createEtchASketch);

function createEtchASketch() {
    let userChoice = 4;
    const squaresContainer = createSquaresContainer();
    createSquares(squaresContainer, userChoice);
    const btnsContainer = createBtnsContainer();
    createCustomizeBtn(btnsContainer);
    createClearBtn(btnsContainer, squaresContainer);
}

function createSquaresContainer() {
    const squaresContainer = document.createElement("div");
    squaresContainer.classList.add("squares-container");
    squaresContainer.addEventListener("mouseover", colorizeSquare);
    document.body.appendChild(squaresContainer);
    return squaresContainer;
}

function colorizeSquare(e) {
    if (e.target !== e.currentTarget) {
        randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
    }
}

function createSquares(container, squaresQuantity) {
    container.innerHTML = "";

    const containerWidth = window.getComputedStyle(container).width;
    const containerWithNum = containerWidth.slice(0, length - 2);
    const totalSquares = squaresQuantity * squaresQuantity;
    const squareSize = containerWithNum / squaresQuantity;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        container.appendChild(square);
    }
}

function createBtnsContainer() {
    const btnsContainer = document.createElement("div");
    btnsContainer.classList.add("buttons-container");
    document.body.appendChild(btnsContainer);
    return btnsContainer;
}

function createCustomizeBtn(container) {
    const customizeBtn = document.createElement("button");
    customizeBtn.classList.add("customize-button");
    customizeBtn.classList.add("button");
    customizeBtn.innerText = "Customize";
    customizeBtn.addEventListener("click", updateSquares);
    container.appendChild(customizeBtn);
}

function updateSquares() {
    userChoice = prompt("How many squares would you like? (1-100)");
    let userChoiceSanitized = parseInt(userChoice);
    if (userChoice <= 0) {
        userChoiceSanitized = 1;
    }

    if (userChoice > 100) {
        userChoiceSanitized = 100;
    }

    const container = document.getElementsByClassName("squares-container")[0];
    createSquares(container, userChoiceSanitized);
}

function createClearBtn(btnsContainer, squaresContainer) {
    const clearBtn = document.createElement("button");
    clearBtn.classList.add("button");
    clearBtn.classList.add("clear-button");
    clearBtn.innerText = "Clear";
    btnsContainer.appendChild(clearBtn);
    clearBtn.addEventListener("click", () => {
        createSquares(squaresContainer, userChoice);
    });
}
