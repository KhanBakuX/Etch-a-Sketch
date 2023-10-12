const GRID_CONTAINER_SIZE = 480;

let elemQntPerAxis = 16;
const gridContainer = document.querySelector(".grid-container");

const createGrid = (gridContainer, elemQntPerAxis) => {
  const elemSize = GRID_CONTAINER_SIZE / elemQntPerAxis;
  for (let i = 0; i < elemQntPerAxis ** 2; i++) {
    const gridElem = document.createElement("div");
    gridElem.setAttribute(
      "style",
      `height: ${elemSize}px; width: ${elemSize}px;`
    );
    gridContainer.appendChild(gridElem);
  }
};

const initializeSketching = (elemColorFunc) => {
  const gridElems = document.querySelectorAll(".grid-container div");
  gridElems.forEach((gridElem) => {
    gridElem.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = elemColorFunc();
    });
  });
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

const blackColor = () => {
  return "black";
};

let elemBackgroundFunc = blackColor;

createGrid(gridContainer, elemQntPerAxis);
initializeSketching(elemBackgroundFunc);

const eraseBtn = document.querySelector(".erase");
const changeNumPerAxisBtn = document.querySelector(".change-num-per-axis");
const rainbowBtn = document.querySelector(".rainbow");

const erase = () => {
  const gridElems = document.querySelectorAll(".grid-container div");
  gridElems.forEach((elem) => (elem.style.backgroundColor = "white"));
};

const askForNumPerAxis = () => {
  while (true) {
    const numPerAxis = prompt(
      "Enter a positive number of squares per each exis"
    );
    console.log(numPerAxis);
    if (numPerAxis === null) return elemQntPerAxis;
    if (numPerAxis > 0 && numPerAxis <= 100) return numPerAxis;
    else alert("wrong input, enter a positive number less or equal 100");
  }
};

const removeGrid = (gridContainer) => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

changeNumPerAxisBtn.addEventListener("click", () => {
  elemQntPerAxis = askForNumPerAxis();
  removeGrid(gridContainer);
  createGrid(gridContainer, elemQntPerAxis);
  initializeSketching(elemBackgroundFunc);
});

eraseBtn.addEventListener("click", () => {
  erase();
});

rainbowBtn.addEventListener("click", () => {
  if (elemBackgroundFunc === blackColor) elemBackgroundFunc = randomColor;
  else elemBackgroundFunc = blackColor;
  removeGrid(gridContainer);
  createGrid(gridContainer, elemQntPerAxis);
  initializeSketching(elemBackgroundFunc);
});
