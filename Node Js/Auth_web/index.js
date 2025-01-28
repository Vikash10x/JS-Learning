const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "325235";

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(req.method + "request came");
  next();
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });
  res.json({
    msg: "you are signed in",
  });
  console.log(users);
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // console.log(users);

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = jwt.sign(
      {
        username: foundUser.username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
      meg: "sucessful signed in",
    });
  } else {
    res.json({
      message: "wrong password",
    });
    // res.header("jwt", token);
    // res.header("random", "vikash");
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodeData = jwt.verify(token, JWT_SECRET);

  if (decodeData.username) {
    req.username = decodeData.username;
    next();
  } else {
    res.json({
      message: "you are not loged in",
    });
  }
}

app.get("/me", logger, auth, function (req, res) {
  const username = req.username;
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "User not found",
    });
  }
});

app.listen(3001);
