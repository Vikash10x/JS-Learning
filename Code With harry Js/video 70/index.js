// console.log("Script.js initializing");
let boxes = document.querySelector(".container").children;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});
