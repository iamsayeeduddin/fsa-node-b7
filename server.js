const express = require("express");
const userData = require("./data.json");
const defaultRoute = require("./routes/defaultRoute");
const bookRoute = require("./routes/bookRoute");
const courseRoute = require("./routes/courseRoute");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.listen(5000, () => console.log("Server Up & Running!"));

mongoose
  .connect(process.env.DB_URL)
  // .connect("mongodb://127.0.0.1:27017/fsa")
  .then((res) => console.log("DB COnnected"))
  .catch((err) => console.log(err));

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
const middle = (req, res, next) => {
  console.log("Inside Middleware");
  if (req.headers.authorization) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    let buff = new Buffer(token, "base64");
    let decoded = buff.toString("utf-8");
    let username = decoded.split(":")[0];
    let password = decoded.split(":")[1];
    console.log(username, password);
    if (username === "admin" && password === "pass") {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  } else res.status(401).send("Unauthorized");
};

// app.use(mid);
app.use("/", middle, defaultRoute);
app.use("/users", require("./routes/userRoute"));

// AUTHENTICATED
app.use("/books", bookRoute);
app.use("/courses", courseRoute);

// CRUD -> Create, Read, Update & Delete
// Request Methods
// GET - Read Data
// POST - Create Data ->  Request to Read Data
// PUT & PATCH -> Update
// DELETE - Deletes the Data

/// LOGGING
// AUTHORIZATION & AUTHENTICATION

// Token Based - Email Password
