const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

app.set("view engine", "ejs");
mongoose.connect(
  "mongodb+srv://vikash:jACg61fzS9JItII4@cluster0.ib0fdeq.mongodb.net/company"
);

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", req.query);
});

app.get("/generate", async (req, res) => {
  // clear the collection employee
  await Employee.deleteMany({});
  let randomNames = ["vikash", "akash", "mukesh", "rajesh", "hitesh"];
  let randomLanguage = ["C", "C++", "Python", "Java", "JsScript"];
  let randomCity = ["newYork", "London", "malesiya", "Thailend", "Dubai"];

  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 100000),
      language: getRandom(randomLanguage),
      city: getRandom(randomCity),
      isManager: Math.random() > 0.5 ? true : false,
    });
    console.log(e);
  }

  res.render("index", req.query);
});

app.listen(3000);
