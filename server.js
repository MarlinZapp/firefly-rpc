import express from "express";
import { createConnection, createClient } from "thrift";
import { Client } from "./gen-nodejs/FireflyService.js";

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static("public"));

// Thrift setup
const connection = createConnection("localhost", 9090, {});
const client = createClient(Client, connection);

// API endpoint for frontend to fetch fireflies data
app.get("/api/fireflies", async (req, res) => {
  try {
    const fireflies = await client.getFireflies();
    res.json(fireflies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching fireflies");
  }
});
app.get("/api/grid/size", async (req, res) => {
  try {
    const num_rows = process.env.NUM_ROWS;
    const num_cols = process.env.NUM_COLS;
    res.json({ num_rows: num_rows, num_cols: num_cols });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching fireflies");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
