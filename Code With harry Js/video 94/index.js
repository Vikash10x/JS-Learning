const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "!@#$%^&*";

mongoose.connect(
  "mongodb+srv://vikash:jACg61fzS9JItII4@cluster0.ib0fdeq.mongodb.net/database"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.send("You are signed Up");
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  let response = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (response) {
    const token = jwt.sign({
      id: response.id.toString(),
    });
    res.json({ token });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});

app.listen(3000);
