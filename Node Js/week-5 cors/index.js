const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.json());

app.post("/sum", function (req, res) {
  console.log(req.body);
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const c = req.body.c;
  let ans;

  if (c == "+") {
    ans = a + b;
  } else if (c == "-") {
    ans = a - b;
  } else if (c == "*") {
    ans = a * b;
  } else {
    ans = a / b;
  }
  // console.log(a + b);

  res.json({
    ans: ans,
  });
});

app.listen(3000);
