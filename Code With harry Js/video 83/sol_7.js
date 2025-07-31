function asyncDouble(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}

async function mapAsyncArray(arr) {
  const promises = arr.map(async (num) => {
    return await asyncDouble(num);
  });
  return Promise.all(promises); // waits for all promises to resolve
}

// Example usage:
mapAsyncArray([1, 2, 3, 4, 5]).then((result) => {
  console.log("Doubled array:", result);
});
