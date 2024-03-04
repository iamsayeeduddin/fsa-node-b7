const express = require("express");
const app = express();
const data = require("./data.json");

// const data = ["Book1", "Book2", "Book3"];

app.listen(5000, () => console.log("Server Up & Running!"));

app.use("/users", (req, res) => {
  res.status(200).json(data);
});

app.use("/", (req, res) => {
  res.status(200);
  res.send("Welcome to My API");
});

// CRUD -> Create, Read, Update & Delete
// Request Methods
// GET - Read Data
// POST - Create Data ->  Request to Read Data
// PUT & PATCH -> Update
// DELETE - Deletes the Data
