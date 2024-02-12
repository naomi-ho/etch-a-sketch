const DEFAULT_DIMENSION = 16;

const grid = document.getElementById("grid");
const dimensionRange = document.getElementById("dimension-range");
const dimensionValue = document.getElementById("dimension-value");

function makeGrid (dimension) {
    for (let i = 0; i < dimension; i++) {
        // make a row
        const row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);
        for (let j = 0; j < dimension; j++) {
            // create squares within rows
            const square = document.createElement("div");
            square.className = "square";
            // changes div's color when hovered over
            square.onmouseenter = function() {mouseEnter()};

            function mouseEnter() {
                square.style.backgroundColor = "white";
            }

            row.appendChild(square);
        }
    }
}

function getDimension() {
    // creates default 16 x 16 grid on load
    makeGrid(DEFAULT_DIMENSION);

    // changes the grid size according to slider value
    dimensionRange.addEventListener("click", (event) => {
        let dimension = parseInt(dimensionValue.value);
        console.log(dimension);
        // reloads grid
        grid.textContent = "";
        makeGrid(dimension);
    });
}

getDimension();