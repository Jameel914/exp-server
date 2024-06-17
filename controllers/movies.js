const express = require("express");
const movies = express.Router();
const moviesArray = require("../data/movies");

movies.get("/", (req, res) => {
  try {
    res.status(200).json(moviesArray);
  } catch (error) {
    res.status(404).json({ Message: "No movies Found" });
  }
});

movies.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const movie = moviesArray.find((item) => item.id === Number(id));
    if (movie) {
      res.status(200).json(movie);
    } else {
      throw "Could not find movie";
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

movies.post("/", (req, res) => {
  try {
    const movie = req.body;
    if (movie.id) {
      moviesArray.push(movie);
      res.status(201).json(moviesArray[moviesArray.length - 1]);
    } else {
      throw "Could not created the movie";
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

movies.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const movie = req.body;
    const index = moviesArray.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      moviesArray.splice(index, 1, movie);
      res.status(201).json(moviesArray[index]);
    } else {
      throw "Could not update movie";
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

movies.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const index = moviesArray.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      moviesArray.splice(index, 1);
      res.status(200).json(moviesArray);
    } else {
      throw "Could not find movie";
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
module.exports = movies;
