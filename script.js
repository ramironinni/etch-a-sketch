window.addEventListener("DOMContentLoaded", createEtchASketch);

let userChoice = 4;
function createEtchASketch() {
    const squaresContainer = createSquaresContainer();
    createSquares(squaresContainer, userChoice);
    const controllersContainer = createControllersContainer();
    createCustomizeRange(controllersContainer);
    createClearBtn(controllersContainer);
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
    userChoice = squaresQuantity;
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

function createControllersContainer() {
    const controllersContainer = document.createElement("div");
    controllersContainer.classList.add("controllers-container");
    document.body.appendChild(controllersContainer);
    return controllersContainer;
}

function createCustomizeRange(container) {
    const customizeRange = document.createElement("input");
    customizeRange.type = "range";
    customizeRange.min = "1";
    customizeRange.value = userChoice;
    customizeRange.classList.add("control");
    customizeRange.addEventListener("change", (e) => {
        updateSquares(e.target.value);
    });
    container.appendChild(customizeRange);
}

function updateSquares(userChoice) {
    // let userChoiceSanitized = parseInt(userChoice);
    if (userChoice <= 0) {
        userChoice = 1;
    }

    if (userChoice > 100) {
        userChoice = 100;
    }

    const container = document.getElementsByClassName("squares-container")[0];
    createSquares(container, userChoice);
}

function createClearBtn(btnsContainer) {
    const clearBtn = document.createElement("button");
    clearBtn.classList.add("control");
    clearBtn.classList.add("clear-button");
    clearBtn.innerText = "Clear";
    clearBtn.addEventListener("click", () => {
        const container =
            document.getElementsByClassName("squares-container")[0];

        createSquares(container, userChoice);
    });
    btnsContainer.appendChild(clearBtn);
}
