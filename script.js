const GRID_CONTAINER_SIZE = 960;

const gridContainer = document.querySelector(".grid-container");
const elemQntPerAxis = 60;
const elemSize = GRID_CONTAINER_SIZE / elemQntPerAxis;
const gridElemColor = "black";

for (let i = 0; i < elemQntPerAxis ** 2; i++) {
  const gridElem = document.createElement("div");
  gridElem.setAttribute(
    "style",
    `height: ${elemSize}px; width: ${elemSize}px;`
  );
  gridContainer.appendChild(gridElem);
}

const gridElems = document.querySelectorAll(".grid-container div");

gridElems.forEach((gridElem) => {
  gridElem.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = gridElemColor;
    console.log(event.target);
  });
});
