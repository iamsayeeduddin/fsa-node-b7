const express = require("express");
const app = express();
const userData = require("./data.json");
const defaultRoute = require("./routes/defaultRoute");
const bookRoute = require("./routes/bookRoute");

const data = [
  {
    id: 1,
    name: "HTML & CSS Projects",
    price: 500,
    inStock: true,
  },
  {
    id: 2,
    name: "JavaScript",
    price: 800,
    inStock: false,
  },
];

app.listen(5000, () => console.log("Server Up & Running!"));
app.use(express.json());
// app.use("/users", (req, res) => {
//   res.status(200).json(userData);
// });

// app.post("/books/:id", (req, res) => {
//   // let body = req.body;
//   res.status(200).json(data.find((val) => val.id === req.params.id && val.name === body.name));
// });

// app.use("/", (req, res) => {
//   res.status(200);
//   res.send("Welcome to My API");
// });

app.use("/", defaultRoute);
app.use("/books", bookRoute);

// CRUD -> Create, Read, Update & Delete
// Request Methods
// GET - Read Data
// POST - Create Data ->  Request to Read Data
// PUT & PATCH -> Update
// DELETE - Deletes the Data
