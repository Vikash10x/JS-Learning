const name = "Vikash";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log("Hello my name is ${name} and repo count is ${repoCount}");

const gameName1 = "Kumawat";
const gameName2 = new String("Kumawat-vikash-kumar");

// console.log(gameName1 == gameName2);
// console.log(gameName1 === gameName2);

console.log(gameName2[2]);
console.log(gameName2.__proto__);

// console.log(gameName2.length);
// console.log(gameName2.toUpperCase());

// console.log(gameName2.charAt(5));
// console.log(gameName2.indexOf("m"));

// const newString = gameName2.substring(0, 4);
// console.log(newString);

// const anotherString = gameName2.substring(-5, 2);
// console.log(anotherString);

// const newStringone = "    Vikash    ";
// console.log(newStringone);
// console.log(newStringone.trim());

const url = "https://vikash.com/vikash%20kumawat";

console.log(url.replace("%20", "-"));

// console.log(url.includes("vikash")); // for come to know

console.log(gameName2.split("-"));
