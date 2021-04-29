//76)async...await

const fakeNetworkReq = async () => ({ name: "xyx", id: 1 });

const getUser = async () => {
  const user = await fakeNetworkReq();
  console.log(`User name is ${user.name} with the id ${user.id}`);
};

getUser(); //as fakeNetworkReq returns a promise, Promise.resolve,
//pushed to the microtask queue and pushed to the call stack by the event loop after synchronous code has finished

//77) Reverse the case

const reverseCase = s =>
  s.replace(/./g, char =>
    char[`to${/[a-z]/.test(char) ? "Upper" : "Lower"}Case`]()
  );

//78) return a random integer in given range
const createRange = (a, b) =>
  Array.from({ length: b - a + 1 }, (_, i) => a + i);

const randomInt = (a, b) => {
  const length = b - a;
  const index = Math.floor(Math.random() * length);
  return createRange(a, b)[index];
};

//Function tests if number is in a given range
const range = (start, end) =>
  createRange(start, end).includes(randomInt(start, end));

console.log(randomInt(5, 5));

//79) Typing test: IMPORTANT
//return 1 if it matches and -1 if not
const correctStream = (correct, test) =>
  correct.map((v, i) => [, test[i]].indexOf(v));

//indexOf returns -1 if the given value is not found
//in the map function, indexOf is passed the current iterated value
//and searches an array of [, test[i]], where first value is undefined
//and index 1 is the other array that is tested against
//if it matches, then 1 is returned and if not then indexOf returns -1
//so we qualify the test
console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]));
const key = "foo";
const obj = { foo: "Jessie" };
//const {[key]} = {foo: 'nininin'} - invalid destructuring since it's the same as below
//const {'foo'} = obj

//when using computed property names, we need to re-assign it to another variable
const { [key]: foo } = obj;
console.log(foo);
const { [key]: nice } = obj;
console.log(nice);
//BOTH work fine

//[key]: value is different than object destructuring since we
//are creating an entirely new object
const createNewObj = (obj, key, value) => ({ ...obj, [key]: value });

console.log(createNewObj({ n: 1 }, "a", 2));

/*
countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
}) ➞ { moron: 2, scumbag: 1, idiot: 2 }
*/

const countNumberOfOccurrences = obj =>
  [...new Set(Object.values(obj))].reduce((finalObj, key) => {
    finalObj[key] = Object.values(obj).filter(v => v === key).length;
    return finalObj;
  }, {});

console.log(
  countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
  })
);
//longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"
const longest7SegmentWord = arr =>
  arr.filter(v => !/[kmvwx]/i.test(v)).sort((a, b) => b.length - a.length)[0];

console.log(
  longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"])
);

const findOdd = arr =>
  [...new Set(arr)]
    .map(v => [v, arr.filter(x => v === x).length])
    .find(([x, y]) => y % 2)[0];

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

function partition(str, n) {
  const arr = [...str];
  return Array.from({ length: str.length / n }, _ => arr.splice(0, n).join(""));
}
console.log(partition("thematic", 4));
console.log(partition("movement", 2));
//Nullish Operator
const zero = 0;

const falsy = null;

const falsyy = undefined;

const isFalse = zero ?? "Zero is false but also a number value";

const isFalsee = zero || "Zero is not false, but with || operator it is";

const isFalseee = falsy ?? "Null is false on all accounts";

const isFalsesee = falsyy ?? "Undefined is also false on all acounts";

console.log(isFalse);
console.log(isFalsee);
console.log(isFalseee);
console.log(isFalsesee);

const mapping = letters =>
  letters.reduce(
    (finalObj, key) => ((finalObj[key] = key.toUpperCase()), finalObj),
    {}
  );
console.log(mapping(["p", "s"]));

const getMissingLetters = str =>
  Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))
    .join("")
    .replace(new RegExp(`[${str}]`, "gi"), "");
//getMissingLetters("abcdefgpqrstuvwxyz") ➞ "hijklmno"

console.log(getMissingLetters("abcdefgpqrstuvwxyz"));

const str = "abcdefgpqrstuvwxyza";

console.log((str + 88888 + "aaa").replace([new RegExp(str)], ""));

//79)Transforming Words into Binary Strings
//convertBinary("house") ➞ "01110"
const convertBinary = str =>
  [...str].map(char => [1, 0][+/[a-m]/i.test(char)]).join("");

//80) using Swapping
let a = "a";
let b = "b";

//now let's assign a to b and b to a, one way is to do it like below
/*
let temp = a
a = b
b = temp
*/
//or do it with array destructuring
[a, b] = [b, a];

console.log(a);
console.log(b);

//81) destructuring assignments,
const sortByLength = arr => arr.sort(({ length: a }, { length: b }) => a - b);
//the sort function destructs the length property of the item it iterates over

//82) return if string is empty
const isEmpty = ({ length }) => !length;

//83)Multi-division
/*
abcmath(42, 5, 10) ➞ false
// 42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
// 1344 is not divisible by 10
*/
const abcmath = (a, b, c) => {
  let total = a;
  Array(b)
    .fill(0)
    .forEach(_ => (total += total));
  return total % c === 0;
};
//with while loop
const abcmaths = (a, b, c) => {
  while (b) {
    a += a;
    b--;
  }
  return a % c === 0;
};

//84) String Match by Two Letters
/*
Create a function that takes two strings, a and b. Return the number of matching positions where they both contain the same exact two letters one after the other.

For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.
*/
const strMatchBy2char = (s1, s2) =>
  [...s1].reduce(
    (a, c, i) =>
      a + (c + s1[i + 1] === s2[i] + s2[i + 1] && i !== s1.length - 1),
    0
  );
//85()
//Translate 4 to A etc.
function keyboardMistakes(str) {
  const compiler = { 4: "A", 5: "S", 0: "O", 1: "I" };
  return [...str].map(char => compiler[char] || char).join``;
}

//IMPORTANT 86) number cache function

const plusFunction = n1 => {
  const cache = {};
  return n2 => {
    cache[n1] = (cache[n1] || 0) + n2;
    return cache[n1];
  };
};
//87) similar to above, a curried function
const plusFive = plusFunction(5);
console.log(plusFive(5)); //5
console.log(plusFive(15)); //20
const carMaker = {};
const carLot = car => num =>
  carMaker[car] ? (carMaker[car] += num) : (carMaker[car] = num);
const toyota = carLot("toyota");
console.log(toyota(50));
console.log(toyota(20));

//88) Error handling with try...catch...
const repeatString = (t, n) => {
  try {
    return t.repeat(n);
  } catch (e) {
    return "Not A String !!";
  }
};

console.log(repeatString("hello world", 3));
console.log(repeatString({}, 5)); //the empty object does not have the repeat method

//89)
const formatPhoneNumber = nums =>
  nums.join``.replace(/(\d{3})(\d{3})(\d{4})/, `($1) $2-$3`);

//90) recursively find the highest number in the array
const findHighest = arr => {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr[0] > arr[arr.length - 1]) {
    return findHighest(arr.slice(0, -1));
  }
  return findHighest(arr.slice(1));
};

//91) Repeat every character in the string
const repeatStr = str => str.replace(/(.)/g, `$1$1`);
console.log(repeatStr("hello")); //hheelllloo

//92) Find out where waldo is
//in a 2 dimensional array, only one charcater is different, find out its position
//[row, col] is the required format
const reducer = arr =>
  arr.reduce((a, c) => a.concat(Array.isArray(c) ? reducer(c) : c), []);
const whereIsWaldo = arr => {
  const waldo = reducer(arr).find(
    (v, i, thisarg) => thisarg.indexOf(v) === thisarg.lastIndexOf(v)
  );
  return arr.reduce((final, array, i) => {
    if (array.includes(waldo)) {
      return [i + 1, array.indexOf(waldo) + 1];
    }
    return final;
  }, []);
};

console.log(
  whereIsWaldo([
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"],
  ])
);

console.log(
  whereIsWaldo([
    ["X", "X", "Y", "X"],
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
  ])
);

//93) Find out which function returns a larger number
const whichIsLarger = (f, g) =>
  f() === g()
    ? "neither"
    : [
        ["f", f()],
        ["g", g()],
      ].sort(([a, b], [c, d]) => d - b)[0][0];

//94) sort ascending order with the depth of the function
const testLength = (f = "", n = 0) => {
  //try...catch handles error thrown when f is null, null.__proto__ is invalid
  //so control is passed to catch block and return n as 0
  try {
    if (f.__proto__ === Function.prototype) {
      return testLength(f(), n + 1);
    }
    return n;
  } catch (e) {
    return n;
  }
};

const testLengthRevised = (f, n = 0) => {
  //if we just use the typeof operator, that solves the issue since typeof null is just object
  if (typeof f === "function") {
    return testLengthRevised(f(), n + 1);
  }
  return n;
};
const funcSort = arr => arr.sort((a, b) => testLength(a, 0) - testLength(b, 0));
const funcSorts = arr =>
  arr.sort((a, b) => testLengthRevised(a, 0) - testLengthRevised(b, 0));
/*
funcSort([f2, f3, f1]) ➞ [f1, f2, f3]
// [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]

funcSort([f1, f2, f3]) ➞ [f1, f2, f3]
// [f1, f2, f3] ➞ [1, 2, 3] ➞ [1, 2, 3] ➞ [f1, f2, f3]

funcSort([f2, "func"]) ➞ ["func", f2]
// [f2, "func"] ➞ [2, 0] ➞ [0, 2] ➞ ["func", f2]
*/

//95) using flatMap()

/*
fruitSalad(['apple', 'pear', 'grapes']) ➞ 'apargrapepesple'

# Chunks: ['ap', 'ple', 'pe', 'ar', 'gra', 'pes']
# Sorted chunks: ['ap', 'ar', 'gra', 'pe', 'pes', 'ple']
# Final string: 'apargrapepesple'
*/

//without using flatMap

const fruitSalds = arr =>
  arr
    .reduce(
      (a, c) => [...a, c.slice(0, c.length / 2), c.slice(c.length / 2)],
      []
    )
    .sort().join``;

//using flatMap() - if we just use map() then we would be returning a nested array like
//['hello', 'hello'] ===> [['he', 'llo'], [['he', 'llo]]
//but flatMap() flattens the returned array element from the map method
//it's like calling map().flat()

const fruitSald = arr =>
  arr.flatMap(v => [v.slice(0, v.length / 2), v.slice(v.length / 2)]).sort()
    .join``;

//96)
//while trying to access an undefined property of an object will just return undefined and NOT throw an error
//assuming you're not trying to access that object's undefined property's property
//so essentially do this -> undefined.someProperty => that will obviously throw an error
//But if you try to call a function on an undefined property then it will throw an error
//So, if we try to call a method name that is not named +, -, *, or /, then it would throw an error, TypeError
//so we use a try...catch block to catch the error and return null

const calculator = (x, o, y) => {
  try {
    return {
      "+": (x, y) => x + y,
      "-": (x, y) => x - y,
      "*": (x, y) => x * y,
      "/": (x, y) => (y > 0 ? x / y : null),
    }[o](x, y);
  } catch (e) {
    return null;
  }
};

//97)Create a function which takes a number n and return its decimal part.
//1.2 ===> 0.2
//3.22 ===> 0.22

const decimalPart = n => {
  const num = String(n).split`.`;
  return num.length > 1 ? +`0.${num[1]}` : 0;
};

//Probably a better solution but has precision issues
const decimalParts = n => n - Math.abs(Math.floor(n));
const decimalPartss = n => n - Math.abs(Math.trunc(n));

//best solution
const decimalPartsss = n => Math.abs(n % 1);
console.log(decimalPart(1.2));
console.log(decimalPart(-12.315346346));
console.log(decimalPart(5.01231));

//98) event and odd all the time
const isSpecialArray = arr => arr.every((n, i) => i % 2 === n % 2);

//99) Number of Two or More Consecutive Ones
/*
countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]) ➞ 2
// Two instances: [1, 1] (middle) and [1, 1, 1] (end)

countOnes([1, 0, 1, 0, 1, 0, 1, 0]) ➞ 0

countOnes([1, 1, 1, 1, 0, 0, 0, 0]) ➞ 1

countOnes([0, 0, 0]) ➞ 0
*/
const countOnes = arr =>
  arr.reduce((a, c, i) => {
    if (c === 1 && arr[i + 1] === 1 && arr[i - 1] !== 1)
      return [...a, [c, arr[i + 1]]];
    return a;
  }, []).length;

//MUCH better solution, using String.prototype.match()
const countOness = arr => (arr.join``.match(/1{2,}/g) || []).length;
console.log(countOness([1, 0, 0, 1, 1, 0, 1, 1, 1]));
console.log(countOness([1, 0, 1, 0, 1, 0, 1, 0]));
console.log(countOness([1, 1, 1, 1, 0, 0, 0, 0]));

const countOnesss = arr =>
  arr.join``.split(/0+/).filter(num => num.length > 1).length;
console.log(countOnesss([1, 0, 0, 1, 1, 0, 1, 1, 1]));
console.log(countOnesss([1, 0, 1, 0, 1, 0, 1, 0]));
console.log(countOnesss([1, 1, 1, 1, 0, 0, 0, 0]));
console.log(countOnesss([0, 0, 0]));

//100 Encoded String Parse
/*
parseCode("michael0smith004331") ➞ {
  firstName: "michael",
  lastName: "smith",
  id: "4331"
}
*/

const parseCode = s => {
  const [firstName, lastName, id] = s.split(/0+/);
  return { firstName, lastName, id };
};

console.log(parseCode("michael0smith004331"));

//101
const chosenWine = wine => {
  try {
    return wine.sort(({ price: priceA }, { price: priceB }) => priceA - priceB)[
      wine.length > 1 ? 1 : 0
    ].name;
  } catch (e) {
    return null;
  }
};

//102)
//getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
const getFrequencies = arr =>
  Object.fromEntries(
    [...new Set(arr)].map(k => [k, arr.filter(v => v === k).length])
  );

console.log(getFrequencies(["A", "B", "A", "A", "A"]));

//103)
//return if the two given integers are both positive, negative, or just 0
const both = (n1, n2) => Math.sign(n1) === Math.sign(n2);

//104
//slightly superior
const sum = arr => arr.reduce((a, c) => a + c, 0);

const isFirstSuperior = (a1, a2) => sum(a1) > sum(a2);

//105
//adding a min function to the Array class

Array.prototype.min = function () {
  return Math.min(...this);
};

function inkLevels(inks) {
  return Object.values(inks).min();
}

inkLevels({
  cyan: 432,
  magenta: 543,
  yellow: 777,
}); //432

//106) get one uniquely sorted string from the 2 parameter strings

//uses the bubblesort algorithm and a helper function that returns the unique string
const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};
const bubbleSort = arr => {
  let notSorted = true;
  while (notSorted) {
    notSorted = false;
    arr.forEach((v, i) => {
      if (v > arr[i + 1]) {
        notSorted = true;
        swap(arr, i, i + 1);
      }
    });
  }
  return arr;
};

const getUnique = arr => arr.filter((v, i) => arr.indexOf(v) === i).join``;

const longestString = (a, b) => getUnique(bubbleSort([...a, ...b]));

//107
//check if sentence is Alphabetically Sorted or not, word MUST be LONGER THAN 3 CHARACTERS LONG!
//this time we are using MERGE SORT (O(2 log N)) and not BUBBLE SORT(O(N**2))
const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArr.push(right.shift());
    } else {
      sortedArr.push(left.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};

const isAlphabeticallySorted = sentence => {
  const filtered = sentence.split` `
    .filter(({ length }) => length >= 3)
    .map(word => word.replace(/[^a-z]/gi, ""));
  return filtered.some(word => word === mergeSort([...word]).join``);
};
/*
isAlphabeticallySorted("Paula has a French accent.") ➞ true
// "accent" is alphabetically sorted.

isAlphabeticallySorted("The biopsy returned negative results.") ➞ true
// "biopsy" is alphabetically sorted.

isAlphabeticallySorted("She sells sea shells by the sea shore.") ➞ false
// Although "by" is alphabetically sorted, it is only 2 letters long.
*/

//retrieve first value from Set
const set = new Set();
set.add(1);

const getFirst = set => set.values().next().value;

set.add(2);

const getSecond = set => [...set][0];

set.add(3);

const getThird = set => Array.from(set)[0];

//109 sort the drinks array
const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const l = arr.slice(0, mid),
    r = arr.slice(mid);
  return merge(mergeSort(l), mergeSort(r));
};

const merge = (left, right) => {
  const sorted = [];
  while (left.length && right.length) {
    sorted.push(left[0].price > right[0].price ? right.shift() : left.shift());
  }
  return [...sorted, ...left, ...right];
};

const sortDrinkByPrice = d => mergeSort(d);
sortDrinkByPrice([
  { name: "lemonade", price: 90 },
  { name: "lime", price: 432 },
  { name: "peach", price: 23 },
]);
/*
[
	{name: 'peach', price: 23},
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}
];
*/

//110
/*
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
*/
const keysAndValues = obj =>
  Object.keys(obj).reduce(
    (array, key) => [
      [...array[0], key],
      [...array[1], obj[key]],
    ],
    [[], []]
  );

//111
//check if the length of the strings are equal
const isEqual = ({ length: a }, { length: b }) => a === b;

//112
//return the data type of the fifth argument
const fifth = (...arg) => typeof arg[4] || "Not enough arguments";

//113 replicate endsWith - but does not discrminate with lower or upper case characters
String.prototype.sameEnd = function (end = "") {
  return [...this]
    .slice(this.length - end.length)
    .every((char, index) => char.toLowerCase() === end[index].toLowerCase());
};
const checkEnding = (a, b) => a.sameEnd(b);

//114 get the sum of the array where numbers are greater than five
const greaterThanFive = num => num > 5;
const addReducer = (accumulator, current) => accumulator + current;
const sumFive = arr => arr.filter(greaterThanFive).reduce(addReducer);

//more efficient as it avoids second loop, condition is taken care of with addReducer function
const addReducer = (accumulator, current) =>
  accumulator + (current > 5 ? current : 0);

//replicate String.prototype.repeat
String.prototype.repeatIt = function (repeat) {
  //NOTE the this object is NOT a string literal but a String object
  //'hi' !== String('hi')
  let str = this;
  for (let i = 1; i < repeat; i++) {
    str += this;
  }
  return str;
};
const repeatString = (s, n) => {
  try {
    return !n ? "" : s.repeatIt(n);
  } catch (e) {
    return "Not A String !!";
  }
};

//check if array is shallow equal
const bubbleSort = arr => {
  let notSorted = true;
  while (notSorted) {
    notSorted = false;
    arr.forEach((v, i) => {
      if (i < arr.length && v > arr[i + 1]) {
        ((array, a, b) => ([array[a], array[b]] = [array[b], array[a]]))(
          arr,
          i,
          i + 1
        );
        notSorted = true;
      }
    });
  }
  return arr;
};
const checkEquals = (a, b) => {
  const sortedA = bubbleSort(a);
  const sortedB = bubbleSort(b);
  return sortedA.every((v, i) => v === sortedB[i]);
};
