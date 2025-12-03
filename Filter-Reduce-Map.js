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
