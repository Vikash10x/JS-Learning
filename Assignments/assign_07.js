const express = require("express");
const app = express();

const users = [
  {
    user: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnkidneys = users[0].kidneys;
  const numberofkidneys = johnkidneys.length;
  let numberofhealthykidneys = 0;

  for (let i = 0; i < johnkidneys.length; i++) {
    if (johnkidneys[i].healthy) {
      numberofhealthykidneys = numberofhealthykidneys + 1;
    }
  }

  const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;

  res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys,
  });
});

app.listen(3002);

// print on browser http://localhost:3002
// output -----
// {
//   "numberofkidneys": 1,
//   "numberofhealthykidneys": 0,
//   "numberofunhealthykidneys": 1
// }
