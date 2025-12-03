///// MAP 10 EXERCISES /////

// 1.

nums = [1, 2, 3];

function multi(a) {
  return a * 2;
}

const multiNum = nums.map(multi);
console.log("1.", multiNum);

// 2.

function isEven(a) {
  if (a % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const isOdd = nums.map(isEven);
console.log("2.", isOdd);

// 3.

word = ["Hi", "OK"];

function warn(c) {
  return c + "!";
}

const result = word.map(warn);
console.log("3.", result);

// 4.

age = [42, 32, 12, 23];

function year(d) {
  return 2025 - d;
}

const bornYear = age.map(year);
console.log("4.", bornYear);

// 5.

words = ["my", "name", "is", "batbold"];

function upper(e) {
  return e.slice(0, 1).toUpperCase() + e.slice(1);
}

const firstLetterUpper = words.map(upper);
console.log("5.", firstLetterUpper);

// 6.

function length(f) {
  return f.length;
}

const wordLength = words.map(length);
console.log("6.", wordLength);

// 7.

price = [5200, 6700, 700, 1000];

function upPrice(g) {
  return g * 1.1;
}

const finalPrice = price.map(upPrice);
console.log("7.", finalPrice);

// 8.

function toMoney(h) {
  return "₮" + h;
}

const moneyStr = price.map(toMoney);
console.log("8.", moneyStr);

// 9.

booleanValue = [1, 0, 0, 1, 0];

function toYes(i) {
  if (i === 0) {
    return "ТИЙМ";
  } else {
    return "ҮГҮЙ";
  }
}

const booleanResult = booleanValue.map(toYes);
console.log("9.", booleanResult);

// 10.

numbers = [0, 1, 2, 3, 4, 5];

function plusOne(j) {
  return j + 1;
}

resultOne = numbers.map(plusOne);
console.log("10.", resultOne);

///// forEACH 10 EXERCISES /////

// 1.

num = [1, 2, 3];

function print(a) {
  console.log("1.", a);
}

num.forEach(print);

// 2.

summ = 0;

function sum(a) {
  summ += a;
  console.log("2.", summ);
}

num.forEach(sum);

// 3.

numb = [1, 6, 3, 8];

function higher(a) {
  if (a > 5) {
    console.log("3. Higher", a);
  } else {
    console.log("3. Lower", a);
  }
}

numb.forEach(higher);

// 4.

function findEven(a) {
  if (a % 2 === 0) {
    console.log("4. Even");
  } else {
    console.log("4. Odd");
  }
}

num.forEach(findEven);

// 5.

function Multipul(a) {
  console.log("5.", a * 2);
}

num.forEach(Multipul);

// 6.

names = ["Bataa", "Bilgee"];

function students(a) {
  console.log("6.", a + "-student");
}

names.forEach(students);

//7.

elements = ["a", "b", "c"];
let count = 0;

function countElement(a) {
  count++;
  console.log("7.", count);
}

elements.forEach(countElement);

// 8.

includeName = ["bat", "dorj", "amar"];

function include(a) {
  inName = a.includes("a");

  if (inName === true) {
    console.log("8.", a);
  }
}

includeName.forEach(include);

// 9.

numbs = [3, -2, 5, -10];

function negativeValue(a) {
  if (a < 0) {
    console.log("9.", a);
  }
}

numbs.forEach(negativeValue);

// 10.

animal = ["dog", "cat"];

function firstLetter(a) {
  console.log("10.", a.slice(0, 1));
}

animal.forEach(firstLetter);
