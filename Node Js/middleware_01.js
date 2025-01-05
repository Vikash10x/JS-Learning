const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
  requestCount = requestCount + 1;
  console.log("Total number of request: " + requestCount);
  res.json({
    massage: "I ended the request early",
  });
  // next();
}

function realSumHandler(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
}

app.get("/sum", requestIncreaser, realSumHandler);

app.listen(3000);
