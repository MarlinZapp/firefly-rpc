const gridContainer = document.getElementById("grid");

let cells = [[]];

initializeGrid();
setInterval(() => renderGrid(), 10); // Poll every 10ms

async function fetchGridSize() {
  const gridSize = await fetch("/api/grid/size");
  return gridSize.json();
}

async function fetchFireflies() {
  const response = await fetch("/api/fireflies");
  return response.json();
}

async function initializeGrid() {
  let gridSize = await fetchGridSize();
  let mrows = gridSize.num_rows;
  let ncols = gridSize.num_cols;

  gridContainer.style.gridTemplateRows = `repeat(${mrows}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${ncols}, 1fr)`;

  for (let i = 0; i < mrows; i++) {
    cells.push([]);
    for (let j = 0; j < ncols; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.id = `cell-${i}-${j}`;
      gridContainer.appendChild(cell);
      cells[i].push(cell);
    }
  }
}

async function renderGrid() {
  let gridSize = await fetchGridSize();
  let mrows = gridSize.num_rows;
  let ncols = gridSize.num_cols;
  const fireflies = await fetchFireflies();

  const transitionScale = 1.5; // Factor to shorten transition phases (from 1 to +infinite)

  for (const firefly of fireflies) {
    let cell = cells[firefly.position.y][firefly.position.x];

    let sin = Math.sin(firefly.phase) * transitionScale;
    sin = sin + transitionScale - 0.5; // center values around 0.5, not 0
    let brightness = Math.max(0, sin);
    brightness = Math.min(1, sin);

    // Convert brightness to a color value (scale between dark and bright yellow)
    let colorValue = Math.floor(255 * brightness);
    cell.style.backgroundColor = `rgb(${colorValue}, ${Math.floor(157 * brightness)}, 14)`;
  }
}
