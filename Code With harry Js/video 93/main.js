// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises";
import fsn, { readdir } from "fs";
import path from "path";

let basepath = "E:/React Js/Code with Harry/video 93";
let files = await fs.readdir(basepath);
// console.log(files);

// let extensions = [];
for (const item of files) {
  console.log("running for: ", item);

  let ext = item.split(".")[item.split(".").length - 1];

  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basepath, ext))) {
      // move to file to this directory if its not a js or json file
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    } else {
      fs.mkdir(ext);
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    }
  }
  // console.log(item);
}
