const express = require("express");
const app = express();

function logRequestDetails(req, res, next) {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
}

app.get("/", logRequestDetails, function (req, res) {
  res.send("Hello World");
});

app.post("/data", logRequestDetails, function (req, res) {
  res.send("data recieved");
});

app.listen(3002);
