const grid = document.getElementById("container");

function makeGrid (num) {
    for (let i = 0; i < num; i++) {
        // make a row
        const row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);
        for (let j = 0; j < num; j++) {
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

makeGrid(16);