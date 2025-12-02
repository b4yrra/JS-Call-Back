///// MAP /////

// 1.

nums = [1, 2, 3, 4, 5];

function higherMulti(a) {
  if (a % 2 === 0) {
    return a * 2;
  } else {
    return a;
  }
}

const evenHigher = nums.map(higherMulti);
console.log("1.", evenHigher);

// 2.

names = ["bat", "dorj", "suren"];

function longer(str) {
  if (str.length > 3) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

const longerUp = names.map(longer);
console.log("2.", longerUp);

// 3.

function square(a) {
  if (a % 2 === 0) {
    return a ** 2;
    s;
  } else {
    return 0;
  }
}

const squareEven = nums.map(square);
console.log("3.", squareEven);

// 4.

num = [5, 10, 15, 20, 25];

function minus(a) {
  if (a - 10 > 0) {
    return a;
  } else {
    return 0;
  }
}

const minusNum = num.map(minus);
console.log("4.", minusNum);

// 5.

function modula(a) {
  return a % 2;
}

const modulaNum = nums.map(modula);
console.log("5.", modulaNum);

// 6.

words = ["hi", "hello", "hey"];

function firstLast(str) {
  const first = str.slice(0, 1);
  const last = str.slice(-1);
  const mergeLetter = first + last;

  return mergeLetter;
}

const finalLetters = words.map(firstLast);
console.log("6.", finalLetters);

// 7.

function booleanNum(arr) {
  if (arr % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}

const booleanResult = nums.map(booleanNum);
console.log("7.", booleanResult);

// 8.

hundredNum = [100, 200, 300];

function divided(arr) {
  return arr % 3;
}

const dividedThre = hundredNum.map(divided);
console.log("8.", dividedThre);

// 9.

numbers = [1, 2, 3, 4, 5, 6];

function twoTimes(arr) {
  multiNumber = arr * 2;

  if (multiNumber >= 10) {
    return 10;
  } else {
    return multiNumber;
  }
}

const multiTwo = numbers.map(twoTimes);
console.log("9.", multiTwo);

// 10.

names = ["bat", "dorj", "suren", "amaraa"];

function shortLong(str) {
  nameLength = str.length;

  if (nameLength > 5) {
    return "LONG";
  } else {
    return "SHORT";
  }
}

const checkLength = names.map(shortLong);
console.log("10.", checkLength);

///// FOR EACH /////

// 1.

numbs = [1, 2, 3, 4, 5, 6];

function evenOdd(arr) {
  if (arr % 2 === 0) {
    console.log("1. Even");
  } else {
    console.log("1. Odd");
  }
}

numbs.forEach(evenOdd);

// 2.

sum = 0;

numb = [10, 15, 20, 25, 30];

function evenNum(arr) {
  if (arr % 2 === 0) {
    sum += arr;
    console.log("2.", sum);
  }
}

numb.forEach(evenNum);

// 3.

booleans = [];

function checkBoolean(arr) {
  booleans.push(arr % 2 === 0);
}

numbs.forEach(checkBoolean);
console.log(booleans);

// 4.

nums1 = [3, 6, 9, 12];
count = 0;

function dividedBythree(arr) {
  if (arr % 3 === 0) {
    count++;
    console.log("4.", count);
  }
}

nums1.forEach(dividedBythree);

// 5.

greetings = ["hi", "hello", "hey", "hola"];

function longerFive(str) {
  const string = str.length;

  if (str.length >= 5) {
    console.log("5.", str);
  }
}

greetings.forEach(longerFive);

// 6.

function higherFive(arr) {
  const twoTimes = arr * 2;

  if (twoTimes > 5) {
    console.log("6. BIG -", twoTimes);
  } else {
    console.log("6. SMALL -", twoTimes);
  }
}

numbs.forEach(higherFive);

// 7.

highNum = [100, 50, 200, 25];
toNum = [];

function pushNumber(arr) {
  if (arr > 50) {
    toNum.push(arr);
    console.log(toNum);
  }
}

highNum.forEach(pushNumber);

// 8.

function evenOdd(arr) {
  if (arr % 2 === 0) {
    console.log(`8. Even - ${arr}`);
  } else {
    console.log(`8. Odd - ${arr}`);
  }
}

numbs.forEach(evenOdd);

// 9.

Numie = [2, 3, 5, 7, 11];
