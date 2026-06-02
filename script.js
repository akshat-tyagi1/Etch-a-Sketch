const gridContainer = document.querySelector(".grid-container");
const gridResizeBtn = document.querySelector(".grid-resize-btn");
let squarePerSide = 16;

function gridMaker(squarePerSide) {
  for (let index = 0; index < squarePerSide * squarePerSide; index++) {
    const div = document.createElement("div");
    div.classList.add("square");
    gridContainer.appendChild(div);
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
      square.style.height = `${512 / squarePerSide}px`;
      square.style.width = `${512 / squarePerSide}px`;
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "#6362c5";
      });
    });
  }
}
gridMaker(squarePerSide);

gridResizeBtn.addEventListener("click", () => {
  squarePerSide = prompt("Enter the number of squares per side: ");

  if (squarePerSide > 100) {
    return alert("Square limit is 100");
  }

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  gridMaker(squarePerSide);
});
