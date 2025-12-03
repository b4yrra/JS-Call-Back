///// Arrow, Filter /////

// 1.

const nums = [1, 2, 3, 4, 5, 6];

filteredNum = nums.filter((num) => {
  return num % 2 === 0;
});

console.log("1.", filteredNum);

// 2.

const numbers = [1, 2, 3, 4, 5];

filterNumber = numbers.filter((number) => {
  return number % 2 !== 0;
});

console.log("2", filterNumber);

// 3.

const fiveNums = [5, 12, 8, 30];

filterFiveNumb = fiveNums.filter((fiveNum) => {
  return fiveNum > 10;
});

console.log("3.", filterFiveNumb);

// 4.

words = ["hi", "hello", "winter", "cat"];

filterWords = words.filter((word) => {
  return word.length >= 5;
});

console.log("4.", filterWords);

// 5.

const names = ["bat", "dorj", "amar", "suren"];

filteredName = names.filter((name) => {
  return name.includes("a");
});

console.log("5.", filteredName);

// 6.

const minusNums = [-3, 0, 5, -1, 10];

filterMinus = minusNums.filter((minusNum) => {
  return minusNum > 0;
});

console.log("6.", filterMinus);

// 7.

const threNums = [3, 4, 9, 10, 12];

filterThre = threNums.filter((threNum) => {
  return threNum % 3 === 0;
});

console.log("7.", filterThre);

// 8.

const booleans = [true, false, true, false];
console.log(
  "8.",
  booleans.filter((boolean) => boolean === true)
);

// 9.

const letters = ["snow", "cat", "sun", "dark", "glass"];

console.log(
  "9.",
  letters.filter((letter) => letter.slice(0, 1).includes("s"))
);

// 10.

const alphabets = ["a", "b", "a", "c", "b"];

const temp = [];

duplicated = alphabets.filter((bet) => {
  if (!temp.includes(bet)) {
    temp.push(bet);
    return false;
  } else {
    return true;
  }
});

console.log("10.", duplicated);
