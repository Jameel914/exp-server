const express = require("express");
const app = express();
const moviesController = require("./controllers/movies");

app.use(express.json());
app.use("/movies", moviesController);

app.get("/", (req, res) => {
  res.json("Welcone to the movies");
});

app.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

module.exports = app;
