const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let searchText = "Search Now";
  let obj = ["vikash", 55, 75];
  res.render("index", {
    siteName: siteName, 
    searchText: searchText,
    obj,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Adidas why and when";
  let blogContent = "it's very good brand";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
