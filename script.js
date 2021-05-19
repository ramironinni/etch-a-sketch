window.addEventListener("DOMContentLoaded", createEtchASketch);

let userChoice = 4;
let colorChoice = false;
function createEtchASketch() {
    createTitle();
    const squaresContainer = createSquaresContainer();
    createSquares(squaresContainer, userChoice);
    const controllersContainer = createControllersContainer();
    createToggleSwitch(controllersContainer);
    createCustomizeRange(controllersContainer);
    createClearBtn(controllersContainer);
}

function createTitle() {
    const title = document.createElement("h1");
    title.innerText = "Etch A Sketch";
    document.body.appendChild(title);
}

function createSquaresContainer() {
    const squaresContainer = document.createElement("div");
    squaresContainer.classList.add("squares-container");
    squaresContainer.addEventListener("mouseover", colorizeSquare);
    document.body.appendChild(squaresContainer);
    return squaresContainer;
}

function colorizeSquare(e) {
    let color;
    if (colorChoice) {
        color = randomRainbow();
    } else {
        color = randomGrey();
    }
    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = color;
    }
}

function randomGrey() {
    const value = (Math.random() * 0xff) | 0;
    const grayscale = (value << 16) | (value << 8) | value;
    const color = "#" + grayscale.toString(16);
    return color;
}

function randomRainbow() {
    const color = (randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16));
    return color;
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

function createToggleSwitch(container) {
    const label = document.createElement("label");
    label.classList.add("switch");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.classList.add("slider");
    span.classList.add("round");

    label.appendChild(checkbox);
    label.appendChild(span);

    container.appendChild(label);
    label.addEventListener("click", toggleColor);
}

function toggleColor(e) {
    if (e.currentTarget.childNodes[0].checked) {
        colorChoice = true;
    } else {
        colorChoice = false;
    }
}

function createCustomizeRange(container) {
    const customizeRange = document.createElement("input");
    customizeRange.type = "range";
    customizeRange.min = "1";
    customizeRange.value = userChoice;
    customizeRange.classList.add("control");
    customizeRange.classList.add("range");
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
