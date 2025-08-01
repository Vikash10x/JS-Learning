let http = require("http");

let server = http.createServer(function (req, res) {
  res.end("Hello World!");
});

server.listen(8002);

// let slugify = require("slugify");

// let a = slugify("some string");
// console.log(a);

// let b = slugify("some string");
// console.log(b);
