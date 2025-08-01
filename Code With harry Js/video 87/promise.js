import { readFile } from "fs";
import fs from "fs/promises";

let a = await fs.readFile("vk.txt");
let b = await fs.appendFile("VK.txt", "\n\n\n\n\n this is a amazing promise");

console.log(a.toString(), b);
