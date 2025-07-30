// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("javo apna kaam karo");
//     }, 5000);
//   });
// }

async function getData() {
  //   let x = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let data = await x.json();
  return data;
}
async function main() {
  console.log("Loading");

  console.log("working");

  console.log("task");

  console.log("Content");

  let data = await getData();

  console.log(data);

  console.log("university");

  console.log("developer");

  console.log("complete working");
}

main();
