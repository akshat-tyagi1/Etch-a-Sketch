const gridContainer = document.querySelector(".grid-container");
const gridResizeBtn = document.querySelector(".grid-resize-btn");
let squarePerSide = 16;

function gridMaker(squarePerSide) {
  for (let index = 0; index < squarePerSide * squarePerSide; index++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.height = `${512 / squarePerSide}px`;
    div.style.width = `${512 / squarePerSide}px`;
    gridContainer.appendChild(div);

    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "#6362c5";
    });
  }
}
gridMaker(squarePerSide);

gridResizeBtn.addEventListener("click", () => {
  squarePerSide = prompt("Enter the number of squares per side: ");

  if (squarePerSide > 50) {
    return alert("Square limit is 50");
  }

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  gridMaker(squarePerSide);
});
