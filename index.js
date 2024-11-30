import { createConnection, createClient } from "thrift";
import { Client } from "./gen-nodejs/FireflyService.js";

const connection = createConnection("localhost", 9090, {});

const client = createClient(Client, connection);

// Define number of rows and columns
const m = process.env.GRID_ROWS; // Number of rows
const n = process.env.GRID_COLS; // Number of columns
let initialized = false;

// Reference to the grid container
const gridContainer = document.getElementById("grid");
/** @type {HTMLDivElement[][]} */
let cells = [[]];

initializeGrid(m, n);

// Periodically poll the state and update the grid
setInterval(() => renderGrid(m, n), 100); // Update every x ms

/**
 * Function to render a grid of m x n cells
 * @param {number} mrows - Number of rows
 * @param {number} ncols - Number of columns
 */
function renderGrid(mrows, ncols) {
  client.getFireflies().then((fireflies) => {
    for (const firefly of fireflies) {
      let cell = cells[firefly.position.y][firefly.position.x];
      if (firefly.phase > Math.PI) {
        cell.style.backgroundColor = "#d49d0e";
      } else {
        cell.style.backgroundColor = "#14110d";
      }
    }
  });
}

/**
 * Function to render a grid of m x n cells
 * @param {number} mrows - Number of rows
 * @param {number} ncols - Number of columns
 */
function initializeGrid(mrows, ncols) {
  if (!gridContainer) {
    throw new Error("Grid container not found");
  }
  // Set up the grid structure using CSS Grid properties
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
