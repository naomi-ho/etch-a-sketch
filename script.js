const grid = document.getElementById("grid");
const dimensionRange = document.getElementById("dimension-range");
const dimensionValue = document.getElementById("dimension-value");

// on drag of slider, get element and pass through into makeGrid


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
                square.style.backgroundColor = "black";
            }

            row.appendChild(square);
        }
    }
}

function getDimension() {
    makeGrid(16);
    dimensionRange.addEventListener("click", (event) => {
        let dimension = parseInt(dimensionValue.value);
        console.log(dimension);
        grid.textContent = "";
        makeGrid(dimension);
    });
}

getDimension();