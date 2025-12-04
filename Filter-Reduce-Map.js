///// Filter + Reduce + Map /////

// 1.

const nums = [1, 2, 3, 4, 5, 6];

const filteredNums = nums.filter((num) => {
  return num % 2 === 0;
});

function squareNum(arr) {
  return arr ** 2;
}

const squaredNums = filteredNums.map(squareNum);
reduceNums = squaredNums.reduce((a, b) => a + b);

console.log("1.", reduceNums);

// 2.

const higherFive = [2, 6, 4, 10];

const filteredHigherFive = higherFive.filter((num) => {
  return num > 5;
});

function multipleByThree(arr) {
  return arr * 3;
}

multiplied = filteredHigherFive.map(multipleByThree);
reduceFive = multiplied.reduce((a, b) => {
  return a + b;
});

console.log("2.", reduceFive);

// 3.

const numbers = [3, 4, 6, 7, 9]
  .filter((num) => num % 3 === 0)
  .map((num) => num ** 2)
  .reduce((a, b) => a + b);

console.log("3.", numbers);

// 4.

const tripleNums = [2, 5, 12, 7];

const filteredTriple = tripleNums.filter((num) => {
  return num < 10;
});

function tripledNums(arr) {
  return arr ** 3;
}

resultTripled = filteredTriple.map(tripledNums);
reduceTriple = resultTripled.reduce((a, b) => {
  return a + b;
});

console.log("4.", reduceTriple);

// 5.

const higherZero = [-2, 3, 0, 5, -1];

const filterHigherZero = higherZero.filter((num) => {
  return num > 0;
});

function higherByZero(arr) {
  return arr * 2;
}

higherThenZero = filterHigherZero.map(higherByZero);
reduceZero = higherThenZero.reduce((a, b) => {
  return a + b;
});

console.log("5.", reduceZero);

// 6.

const dividNums = [2, 5, 8, 10];

const filterDivid = dividNums.filter((num) => {
  return num % 2 === 0;
});

function dividedTwo(arr) {
  return arr / filterDivid.length;
}

dividByTwo = filterDivid.map(dividedTwo);
reduceDivid = dividByTwo.reduce((a, b) => {
  return a + b;
});

console.log("6.", reduceDivid);

// 7.

const dividNum = [3, 4, 6, 7, 9];

const filterDividThre = dividNum.filter((num) => {
  return num % 3 === 0;
});

function dividThree(arr) {
  return arr / filterDividThre.length;
}

dividByThree = filterDividThre.map(dividThree);
reduceDividThre = dividByThree.reduce((a, b) => {
  return a + b;
});

console.log("7.", reduceDividThre);

// 8.

// const modulaNums = [2, 6, 4, 10, 7];

// filteredModula = modulaNums.filter((num) => {
//   return num > 5;
// });

// function moduleNum(arr) {

// }

// 9.

filterLower = nums.filter((num) => {
  return num < 3;
});

reduceLower = filterLower.reduce((a, b) => {
  return a * b;
});

console.log("9.", reduceLower);

// 10.

const lowerNums = [1, 2, 3, 6, 7];

const filterLowerFive = lowerNums.filter((num) => {
  return num < 5;
});

function lowerFive(arr) {
  return arr ** 2;
}

squareLower = filterLowerFive.map(lowerFive);
reduceLowerFive = squareLower.reduce((a, b) => {
  return a + b;
});

console.log("10.", reduceLowerFive);

// 11.

const higherThanTen = [5, 12, 8, 20, 3];

filterhigherThanTen = higherThanTen.filter((num) => {
  return num > 10;
});

function higherTen(arr) {
  return arr ** 2;
}

squareHigherTen = filterhigherThanTen.map(higherTen);
reduceHigherTen = squareHigherTen.reduce((a, b) => {
  return a + b;
});

console.log("11.", reduceHigherTen);

// 12.

const tripleNum = [1, 2, 3, 4, 5, 6]
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 3)
  .reduce((a, b) => a + b);

console.log("12.", tripleNum);

// 13.

const dividThreeNums = [3, 4, 6, 7, 9]
  .filter((num) => num % 3 === 0)
  .map((num) => num ** 3)
  .reduce((a, b) => a + b);

console.log("13.", dividThreeNums);

// 14.

const higherZeroNums = [-5, 0, 4, 7, -1]
  .filter((num) => num > 0)
  .map((num) => num ** 2)
  .reduce((a, b) => a + b);

console.log("14.", higherZeroNums);

// 15.

const higherTenNums = [8, 12, 15, 5]
  .filter((num) => num > 10)
  .map((num) => num * 2)
  .reduce((a, b) => a + b);

console.log("15.", higherTenNums);

// 16.

const modulaThree = [2, 6, 4, 10, 7];

filteredmodulaThree = modulaThree.filter((num) => {
  return num > 5;
});

function modulaThreeFunc(arr) {
  return arr % 3;
}

modulaThreeFunction = filteredmodulaThree.map(modulaThreeFunc);
reducemodulaThree = modulaThreeFunction.reduce((a, b) => {
  return a + b;
});

console.log("16.", reducemodulaThree);

// 17.

const lowerFiveModule = [1, 2, 3, 6, 7]
  .filter((num) => num < 5)
  .map((num) => num % 2)
  .reduce((a, b) => a + b);

console.log("17.", lowerFiveModule);

// 18.

const cdt = [3, 4, 6, 7, 9];

filterCdt = cdt.filter((num) => {
  return num % 3 === 0;
});

function cdtFunc(arr) {
  return arr ** 2;
}

cdtFunction = filterCdt.map(cdtFunc);
reduceCdt = cdtFunction.reduce((a, b) => {
  return (a + b) % 10;
});

console.log("18.", reduceCdt);

// 19.

const htm = [5, 12, 8, 20, 3]
  .filter((num) => num > 10)
  .map((num) => num ** 2)
  .reduce((a, b) => (a + b) % 7);

console.log("19.", htm);

// 20.

const words = ["hi", "hello", "hey", "world", "javascript"];

filterWords = words.filter((word) => {
  return word.length >= 5;
});

function wordFunc(str) {
  return str.length;
}

wordFunction = filterWords.map(wordFunc);
reduceWord = wordFunction.reduce((a, b) => {
  return a + b;
});

console.log("20.", reduceWord);
