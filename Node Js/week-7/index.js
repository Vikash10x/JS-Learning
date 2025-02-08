const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "abcd@qwe";
const bcrypt = require("bcrypt");
const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://kumawatakash373:BFAzxhR7M6Py2OQr@cluster0.gipjlzv.mongodb.net/todo-vikash-2222"
);
const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  //   const requiredBody = z.object({
  //     email: z.string().min(3).max(100).email(),
  //     name: z.string().min(3).max(100),
  //     password: z.string().min(3).max(10),
  //   });

  //   const paresdDataWithSuccess = requiredBody.safeParse(req.body);

  //   if (paresdDataWithSuccess.success) {
  //     res.json({
  //       message: "Incorrect format",
  //       error: paresdDataWithSuccess.error,
  //     });
  //   }

  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  const hasedPassword = await bcrypt.hash(password, 10);
  console.log("Passworrd: ", hasedPassword);

  await UserModel.create({
    name: name,
    password: hasedPassword,
    email: email,
  });

  res.json({
    message: "you are logged in",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });
  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/todo", auth, function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  TodoModel.create({
    title,
    userId,
  });

  res.json({
    userId: userId,
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId,
  });

  res.json({
    todos,
  });
});

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
}

app.listen(3000);
