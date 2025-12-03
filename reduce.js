///// Reduce /////

// 1.

nums = [1, 2, 3, 4, 5];

reduceNums = nums.reduce((a, b) => a + b);

console.log("1.", reduceNums);

// 2.

numbers = [2, 3, 4];

reduceNumber = numbers.reduce((a, b) => a * b);

console.log("2.", reduceNumber);

// 3.

highNums = [10, 30, 5, 22];

reduceHigh = highNums.reduce((a, b) => {
  return Math.max(a, b);
}, 0);

console.log("3.", reduceHigh);

// 4.

lowNums = [10, 3, 20, 7];

reduceLow = lowNums.reduce((a, b) => Math.min(a, b));

console.log("4.", reduceLow);

// 5.

greetings = ["hi", "hello", "hey"];

reduceGreet = greetings.reduce((a, b) => {
  return a.concat(b);
});

console.log("5.", reduceGreet);

// 6.

reduceLength = greetings.reduce((a, b) => {
  return a + b.length;
}, 0);

console.log("6.", reduceLength);
