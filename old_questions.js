class Name {
  constructor(f, l) {
    this.fname = f[0].toUpperCase() + f.slice(1);
    this.lname = l[0].toUpperCase() + l.slice(1);
    this.initials = f[0].toUpperCase() + "." + l[0].toUpperCase();
    this.fullname = this.fname + " " + this.lname;
  }
}

const n1 = new Name("Yuta", "mori");

a = 10;

const obj = {
  a: 1,
  b: 2,
  c: this.a,
  d() {
    return this.a + this.b;
  },
}; //c property would be 10 since
//that's the scope of the property, which is in the global scope
//but when called in a method, this would be the object
//since it's called by the object
//but in a class syntax like above, it's the new operator that calls
//the constructor method, hence this is the object instance

console.log(obj);
console.log(n1);
console.log(obj.d()); //3
const method = obj.d;
console.log(method); //returns function definition d() {return this.a + this.b}
console.log(method()); //called by the global scope so this.b = window.b does not exist

const destrcuturingDefault = ({ size = "Hello, world" } = {}) => size;
const { size: hello = "NICE" } = {};
const { sizeTwo = "NICE" } = {};

console.log(hello);
console.log(sizeTwo);

const def = (x = 1) => x;

const [x, y, z, d = 10] = [1, 2, 3];
console.log(x);
console.log(d);

const keysAndValues = obj => {
  const keys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  return [keys, keys.map(key => obj[key])];
};

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

//calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

const calculateDifference = (obj, l) => {
  let num = 0;
  for (let key in obj) {
    num += obj[key];
  }
  return num - l;
};

/*
  tidyBooks([
    "     The Catcher in the Rye - J. D. Salinger    ",
    "    Brave New World - Aldous Huxley   ",
    "    Of Mice and Men - John Steinbeck    "
  ]) ➞ [
    "The Catcher in the Rye", "J. D. Salinger",
    "Brave New World", "Aldous Huley",
    "Of Mice and Men", "John Steinbeck"
  ]
  */

const tidyBooks = arr =>
  arr.map(info => {
    const [book, author] = info.split(" - ");
    return [book.trim(), author.trim()];
  });

console.log(
  tidyBooks([
    "     The Catcher in the Rye - J. D. Salinger    ",
    "    Brave New World - Aldous Huxley   ",
    "    Of Mice and Men - John Steinbeck    ",
  ])
);
//replicating trim() with regex
console.log(
  "     The Catcher in the Rye - J. D. Salinger    ".replace(/^\s+|\s+$/g, "")
);

//billSplit(["N", "S", "N"], [10, 10, 20]) ➞ [25, 15]

const billSplit = (spice, cost) => {
  const obj = { N: 0, S: 1 };
  return [
    cost.map((c, i) => [c / 2, c][obj[spice[i]]]).reduce((a, c) => a + c, 0),
    spice
      .map((s, i) => (s === "N" ? cost[i] / 2 : 0))
      .reduce((a, c) => a + c, 0),
  ];
  //cost.map((c, i) => [c / 2, c][obj[spice[i]]]).reduce((a, c) => a + c, 0)
};

console.log(billSplit(["N", "S", "N"], [10, 10, 20]));

//remix("abcd", [0, 3, 1, 2]) ➞ "acdb"

const remix = (s, n) => {
  let arr = [];
  n.forEach((num, i) => (arr[num] = s[i]));
  return arr.join("");
};

console.log(remix("abcd", [0, 3, 1, 2]));

const winRound = (y, o) => {
  const [you, opp] = [y.sort((a, b) => b - a), o.sort((a, b) => b - a)];
  return +you.slice(0, 2).join("") > +opp.slice(0, 2).join("");
};

console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]));

console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]));

//Promise
//basic asynchronous opertaion using, promise constructor, passing just the resolved function to setTimeout,
//so that it's pushed to web api and then callback queue not to the microtask queue, so the resolved promise
//will be accessed by the then function after the callstack has been cleared and the event loop
//has pushed the callback in the microtask.
const promise = () =>
  new Promise((res, rej) => {
    console.log("first");
    setTimeout(() => res("fourth"), 1000);
  });

promise().then(
  resolved => console.log(resolved),
  error => console.log(error)
);

const promise2 = () =>
  new Promise((res, rej) => {
    console.log("second");
    res("third");
  });

promise2().then(value => console.log(value));

//Nested Loop
//abc
//123
//1a1b1c...
const nestedLoop = () => {
  let final = "";
  for (let num of "123") {
    for (let alph of "abc") {
      final += num + alph;
    }
  }
  return final;
};
console.log(nestedLoop());

//Object Destructuring: Computed Values
const foo = "foo";

const non = ({ [foo]: hi } = { foo: "Jesse" }) => hi;
//hi is now the reassigned variable name so it must NOT be a string
//or else, it's an invalid destructuring assignment

console.log(non());

const iterate = arr => arr.map(v => "Hello " + v + ",");

console.log(iterate([]));

/*
  afterNYears({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }, 1) ➞ {
    "Joel" : 33,
    "Fred" : 45,
    "Reginald" : 66,
    "Susan" : 34,
    "Julian" : 14
  }
  */

const afterNYears = (names, n) => {
  for (let key in names) {
    names[key] += names[key] + Math.abs(n);
  }
  return names;
};

console.log(
  afterNYears(
    {
      Joel: 32,
      Fred: 44,
      Reginald: 65,
      Susan: 33,
      Julian: 13,
    },
    1
  )
);

let str = "hello";

str += "hello";

const obj = { a: 1, b: 2 };

obj.a += obj.a; //same as writing obj.a = obj.a + obj.a
//so obj.a = 1 + 1
//obj is now {a: 2, b: 2}

console.log(obj);

const returnEndOfNumber = num => {
  if (
    +[...(num + "")].slice(-2).join("") > 10 &&
    20 > +[...(num + "")].slice(-2).join("")
  ) {
    return num + "-TH";
  }
  return (
    num +
    {
      0: "-TH",
      1: "-ST",
      2: "-ND",
      3: "-RD",
      4: "-TH",
      5: "-TH",
      6: "-TH",
      7: "-TH",
      8: "-TH",
      9: "-TH",
    }[[...`${num}`].pop()]
  );
};

console.log(returnEndOfNumber(412));

const alliterationCorrect = s =>
  s
    .split(" ")
    .filter(v => v.length > 3)
    .map(word => word[0].toLowerCase())
    .filter((char, i, thisarg) => thisarg.indexOf(char) === i).length === 1;
console.log(alliterationCorrect("She swam to the shore."));

const timeToFinish = (full, part) =>
  full.slice(part.length).replace(/\s/g, "").length * 0.5;

console.log(
  timeToFinish(
    "And so brings my conclusion to its conclusion.",
    "And so brings my conclusion to its conclus"
  )
);

//isVowelSandwich("cat") ➞ true

const isVowelSandwich = ([...s]) =>
  s.length === 3
    ? /^[^aeiou]+$/i.test(s.shift() + s.pop()) && /[aeiou]/i.test(s.shift())
    : false;
console.log(isVowelSandwich("ear"));

const getXP = exp =>
  Object.values(exp).reduce((a, c, i) => a + [5, 10, 20, 40, 80][i] * c, 0) +
  "XP";

const obj = { a: 1, b: 2 };
console.log(Object.entries(obj));
const entry = obj => Object.keys(obj).map(key => [key, obj[key]]);
console.log(entry(obj));

const invert = obj => {
  const o = {};
  Object.keys(obj).forEach(key => (o[obj[key]] = key));
  return o;
};
/*
  invert({ "z": "q", "w": "f" })
  ➞ { "q": "z", "f": "w" }
  */

console.log(invert({ z: "q", w: "f" }));

let n1 = 10;

n1 *= 10; //100
n1 -= 10; //90
n1 /= 10; //9
n1 += 1; //10
console.log(n1);

//Leaderboard Sort: Sort by the trueScore which is score + reputaiton * 2
/*
  leaderboards([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ]) ➞ [
    { name: "c", score: 115, reputation: 30 },  // trueScore = 175
    { name: "b", score: 90, reputation: 40 },   // trueScore = 170
    { name: "a", score: 100, reputation: 20 }   // trueScore = 140
  ]
  */

//running sort function to sort by DESCENDING ORDER
const leaderboards = arr =>
  arr.sort((a, b) => b.score + b.reputation * 2 - (a.score + a.reputation * 2));

//running sort function but destructuring the object in the parameter
const leaderboardss = arr => {
  return arr.sort(
    (
      { score: scoreA, reputation: reputationA },
      { score: scoreB, reputation: reputationB }
    ) => {
      return scoreB + reputationB * 2 - (scoreA + reputationA * 2);
    }
  );
};

console.log(
  leaderboards([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ])
);

console.log(
  leaderboardss([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ])
);

const seesaw = num => {
  const length = String(num).length;
  const left = +[...`${num}`].slice(0, Math.floor(length / 2)).join("");
  const right = +[...`${num}`].slice(Math.ceil(length / 2)).join("");
  return left > right ? "left" : right > left ? "right" : "balanced";
};

console.log(seesaw(3449));
console.log(seesaw(1143113));
console.log(seesaw(111));

const findOdd = arr => {
  const unique = arr.filter((n, i) => arr.indexOf(n) === i);
  const array = unique.map(key => ({
    [key]: arr.filter(v => v === key).length,
  }));
  return +Object.keys(array.find((obj, index) => obj[unique[index]] % 2)).pop();
};

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));

const spinAround = r => {
  const right = r.filter(v => v === "right").length;
  const left = r.filter(v => v === "left").length;
  return Math.round(Math.abs(right * 90 - left * 90) / 360);
};
function abcmath(a, b, c) {
  let final = a;
  for (let i = 0; i < b; i++) {
    final += final;
  }
  return final % c === 0;
}
console.log(abcmath(42, 5, 10));

const versioning = (semver, ver) => semver.split(".")[ver];
const retrieveMajor = semver => versioning(semver, 0);
const retrieveMinor = semver => versioning(semver, 1);
const retrievePatch = semver => versioning(semver, 2);

console.log(retrieveMajor("2.1.0"));
console.log(retrieveMinor("2.1.0"));
console.log(retrievePatch("2.1.0"));

const correctStream = (f, c) =>
  f.map((word, index) => [-1, 1][+(word === c[index])]);

console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]));
//Calculate Determinant of a 2x2 Matrix

function calcDeterminant([[a, b], [c, d]]) {
  return a * d - b * c;
}

const s = "ss/ss/ff";

console.log(s.split("/").pop());

function firstArg(...arg) {
  return arg.shift();
}

function lastArg(...arg) {
  arg.pop();
}

const afterNYears = (names, n) => {
  Object.keys(names).forEach(key => (names[key] += Math.abs(n)));
  return names;
};

console.log(
  afterNYears(
    {
      Genie: 1000,
      Joe: 40,
    },
    5
  )
);

const countAll = s => ({
  LETTERS: (s.match(/[a-z]/gi) || []).length,
  DIGITS: (s.match(/\d/gi) || []).length,
});
console.log(countAll("Hello World"));

const filterValues = obj => {
  Object.keys(obj).forEach(key => (obj[key] < 5000 ? delete obj[key] : null));
  return obj;
};
console.log(filterValues({ tv: 4999, guitar: 5000, fork: 5001 }));

const multiply = arr =>
  Array.from({ length: arr.length }, (_, index) =>
    Array.from({ length: arr.length }, _ => arr[index])
  );

console.log(multiply([4, 5]));
console.log(multiply(["*", "%", "$"]));

const findOdd = arr => {
  const o = Array.from(new Set(arr)).reduce((a, c) => {
    a[c] = arr.filter(n => n === c).length;
    return a;
  }, {});
  return +Object.keys(o).find(key => o[key] % 2);
};

//findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) ➞ -1

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

const filterUnique = arr =>
  arr.filter(chars => chars.length === new Set([...chars]).size);
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));

//charCount("b", "big fat bubble") ➞ 4

const charCount = (char, s) =>
  s.length - s.replace(new RegExp(char, "g"), "").length;

console.log(charCount("b", "big fat bubble"));

//don't use if or switch statements:

const match = {
  1: "Check the fan",
  2: "Emergency stop",
  3: "Pump Error",
  4: "c",
  5: "Temperature Sensor Error",
};

const error = n => (n >= 1 && 5 >= n ? `${match[n]}: e${n}` : 101);

//better solution: if number is not between 1 and 5, then it returns undefined so right side of the || expression gets executed, which is 101
const error = n => match[n] || 101;

//All about Constructor functions and prototype inheritance:
//CONSTRUCTOR function, called with new keyword
function Car(name, country) {
  this.name = name;
  this.country = country;
  this.bio = function () {
    return this.name + " is from " + this.country;
  };
}

//functions defined on prototype can be called with call method as well, by setting the this object
Car.prototype.bio = function () {
  return this.name + " is from " + this.country;
};

console.log(Car.prototype.bio.call({ name: "BMW", country: "Germany" })); //calls function defiend on prototype

console.log(Car.prototype.constructor); //calls function constructor that defines object

const car1 = new Car("Audi", "Germany");

/*
  The instanceof operator tests to see if the prototype property of a constructor (ConstructorFunction.prototype)
  appears anywhere in the prototype chain of an object. The return value is a boolean value. 
  */

//Null ===> Object.prototype ===> Function.prototype ===> Car.prototype === car1

console.log(car1.__proto__); //returns Car.prototype, so the bio method

console.log(car1 instanceof Car); //true since Car is the constructor function

console.log(car1 instanceof Object); //true since Object appears in the prototype chain

console.log(Car instanceof Object); //true since Object is the constructor for all objects

console.log(Function.prototype === Car.__proto__); //Car's prototype is Function.prototype

console.log(Array instanceof Object); //true since object is the constructor of array

console.log([1] instanceof Array); //true since Array is the constructor of arrays

console.log([].__proto__ === Array.prototype); //true since array object's prototype is Array.prototype

//Remember that what's defined on the prototype is what's inherited by the instances
//like, Car.prototype.bio = function(){...}

const elements = { 0: "Zero", 1: "One", 2: "Two", 3: "Three", length: 4 };

const threeElements = Array.prototype.slice.call(elements, 1);

let numbers = "";
let realNums = "";
for (let value of threeElements) {
  numbers += value;
}
for (let key in threeElements) {
  realNums += key;
}

console.log(numbers);
console.log(realNums);

//152) using the spread syntax operator on objects
//Note: rest turns multiple variables into an array, like const f = (...arr) => arr, f(1, 2, 3) => [1,2,3]
//while the spread syntax expands an array into single elements, while rest syntax collects multiple elements
//into a single element

//it's not just strings or arrays where we can use the spread syntax, since 2018, we can use the spread suyntax
//on objects as well

//syntax for the spread syntax:
//1)function calls: myFunction(...iterableObj)
//2)Array OR strings: [...iterableObj, 4, 5, 6]
//3)Objects: {...obj}

//1)Function Call Example:
const a = [1, 2, 3];

const funcCall = (a, b, c, d, e) => [a, b, c, d, e].reduce((a, c) => a + c, 0);

console.log(funcCall(...a, 4, ...[5]));

//without spread syntax on function call, need to use apply, and set this as null
console.log(Math.max.apply(null, a));
//with spread syntax on max function call, no apply needed, and just need to spread the arry
console.log(Math.max(...a));

//2)
//we can use the spread syntax to convert one array to multiple elements
//and that is useful to copy an array without using slice, or concatenating an array without concat
const copyThisArray = [1, 2, 3];
const copiedThisArray = [...copyThisArray];
copiedThisArray.pop(); //copiedThisArray is now mutated, but copyThisArray is unaffected

//we also create a new array by mergin them without concat, just spread that array into single elements
const mergedArray = [...copyThisArray, ...copiedThisArray];

//before the spread syntax: if we wanted to unshift one array to another array, then we needed to use
//Array.prototype.unshift.apply(arr1, arr2), like this:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//With Array.prototype.unshift.apply, we are calling the unshift function with apply
//setting this object to arr1, so we're unshifting arr2 to arr1, but with spread syntax it's much easier to do so
Array.prototype.unshift.apply(arr1, arr2);
const arr3 = [...arr2, ...arr1]; //note that arr1 is mutated to the unshifted array

//3)Spread Syntax using Object Literal:
//With spread syntax, we can copy enumerable (properties that can be iteraed in for of loops) properties
//from a provided object onto a NEW OBJECT

//Copying an object to another object with the spread syntax, makes this easier than using Object.assign()

//Object.assign(): copies all enumerable properties from one source object to target object, returns the target object
const target = { a: 1, b: 2 };
const source = { c: 3, d: 4 };
Object.assign(target, source);
console.log(target); // {a: 1, b: 2, c: 3, d: 4}

//Closning an object with Object.assign()
const fill = { a: "Hello, World" };
const copy = Object.assign({}, fill);
console.log(copy);

//adding the a newly created object with a variable as the key and the value variable as the value
const key = "Brutus";
const value = 400;
const addName = (o, key, value) => Object.assign(o, { [key]: value });
console.log(addName({ piano: 500 }, key, value));
//we can do the above with spread syntax on object literals

//IMPORTANT: we spread the object into a new object {...o}, and then add another key-value pair inside that new object
//{...o, [key]: value}
const addnames = (o, key, value) => ({ ...o, [key]: value });
console.log(addnames({ piano: 500 }, key, value));

//Merging an object
const aa = { a: 1 };
const bb = { b: 2 };
const cc = { c: 3 };

const merger = Object.assign({}, aa, bb, cc);
console.log(merger);

//Copying an object with the spread and not Object.assign
const cloneObj = { ...aa };
const mergeObj = { ...aa, ...bb, ...cc };
console.log(cloneObj);
console.log(mergeObj);

//This works fine: {a:1,b:2,c:3} a new object is created
const f = (a, b, c) => ({ ...a, ...b, ...c });
console.log(f(aa, bb, cc));

//But, using the REST syntax with SPREAD syntax on object does not work as expected
//first look at this example, we use the rest syntax, to collect multiple elemtnts into a single one, to an array

const g = (...arg) => arg;
console.log(g(aa, bb, cc)); //[{a:1}, {b:2}, {c:3}]
//so the rest syntax, puts the 3 objects into an array

//Now the issue: we use the rest syntax to collect multiple arguments into one element
//and then we spread that argument inside an object
const ff = (...arg) => ({ ...arg });
console.log(ff(aa, bb, cc)); //{0: {a:1}, 1: {b:2}, 2: {c:3}}
//it spreads an array of arguments into the object literal, due to the rest parameter.
console.log(ff({}, aa, bb, cc)); //{0: {},1: {a:1}, 2: {b:2}, 3: {c:3}}

//153)word builder
/*
  letters = ["e", "t", "s", "t"]
  positions = [1, 3, 2, 0]
  
  Step 1 ➞ Letter "e" goes to index 1 ➞ _  e  _   _
  Step 2 ➞ Letter "t" goes to index 3 ➞ _  e  _   t
  Step 3 ➞ Letter "s" goes to index 2 ➞ _  e  s   t
  Step 4 ➞ Letter "t" goes to index 0 ➞ t  e  s   t
  */
const wordBuilder = (word, order) => {
  const final = [];
  word.forEach((char, i) => {
    final[order[i]] = char;
  });
  return final.join("");
};

//154)
//The double bang: one bang, !, negates the boolean, or flips it
//The double bang: two bangs, !!, a string isn't a boolean, so the function
//function destruct({comment, unit}) { return comment && unit } while we want to test if comment and unit exist by testing it with &&
//comment and unit are both strings, so && would return the second value which is unit, and not true althoug both are strings
//for something where the values aren't boolean values, we can test their truthyness with the double !!, see below:

const products = { product: "Eggs", comment: "Top Quality" };

const doesExist = ({ product, comment }) => product && comment; //would return comment
console.log(doesExist(products)); //returns Top Quality

const doesExists = ({ product, comment }) => !!product && !!comment; //returns true
console.log(doesExists(products));

//155)
//Unit of Measure: know when trying to destructure objects, if the parameter is empty, you CANNOT destruct it
//in that case, it's better to assign default values in such cases, withf const f = (o = {}) =>
//The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.
const hasValidUnitOfMeasure = (o = {}) => {
  const { unitOfMeasure, comment } = o;
  return "PCEL".includes(unitOfMeasure) || !!comment;
};

const measure = { product: "Milk", unitOfMeasure: "L" };
console.log(hasValidUnitOfMeasure(measure));

//So as long as EITHER the unitOfMeasure is L or PCE or if there is a comment property then we return true
//instead of doing 2 checks if unitOfMeasure is PCE or L, we just run one test, which is whether that varibale
//has PCEL with include, which is more efficient then below

const hasValidUnitOfMeasures = (o = {}) => {
  const { unitOfMeasure, comment } = o;
  return unitOfMeasure === "PCE" || unitOfMeasure === "L" || !!comment;
};
//the reason for assigning the default values of an empty object is because cases where we don't pass an argument
console.log(hasValidUnitOfMeasure());

//156) word rank:
const wordRank = sentence => {
  const s = sentence.replace(/[^a-z\s]/gi, "").split(" ");
  const max = Math.max(
    ...s.map(word =>
      [...word].reduce(
        (a, c) =>
          a +
          ([
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ].indexOf(c) +
            1),
        0
      )
    )
  );
  return s.find(
    word =>
      [...word].reduce(
        (a, c) =>
          a +
          ([
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ].indexOf(c) +
            1),
        0
      ) === max
  );
};
console.log(
  wordRank(
    "If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?"
  )
);

//157) String Comparison:
//to see which string is 'greater', they are determined by their dictionary order, b is greater than a
//Strings are compared letter by letter and the moment one is greater than the other,
//the comparision stops and the GREATER letter is returned like z > a is true
//'aaaazzzz' > 'z' is false since a and z are compared in the first letter and z is greater
//Hence, when sorting string, we use localeCompare()
//The Algortihm is:
/*
  Compare the first character of both strings.
  If the first character from the first string is greater (or less) than the other string’s, then the first 
  string is greater (or less) than the second. We’re done.
  Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
  Repeat until the end of either string.
  If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
  */
//Check if first, last, word and if word is between first and last, according to their dictionary order
//isBetween("apple", "banana", "azure") ➞ true azure is between apple and banana
const isBetween = (f, l, w) =>
  [f, l, w].sort((a, b) => a.localeCompare())[1] === w;
const isBetweens = (f, l, w) => [f, l, w].sort()[1] === 1;
//just running the default sort behavior is enough too. sort() default sort order is ASCENDING, so 1 2 3
//descending is 3 2 1

//158) Stripping a Sentence Down
/*
  Create a function which takes in a sentence str and a string of characters chars and return 
  the sentence but with all the specified characters removed.
  
  stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"
  */
const stripSentence = (s, c) =>
  [...s].filter(char => (!c.includes(char) ? char : "")).join("");
const stripSentences = (s, c) => s.replace(new RegExp(`[${c}]`, "g"), "");

console.log(
  stripSentence("the quick brown fox jumps over the lazy dog", "aeiou")
);
console.log(
  stripSentences("the quick brown fox jumps over the lazy dog", "aeiou")
);

//159) Sorting with map:
//The compareFunction callback passed into the sort method can become inefficent if there
//are too many elements to sort
//So, it may be more efficient to sort with map
//The idea is to TRAVERSE the array ONCE to extract the actual values used for sorting into
//a temporary array, sort the temporary array, and then traverse the temporary array to achieve
//the right order

const list = ["Delta", "alpha", "CHARLIE", "bravo"];

const mapped = list.map((v, i) => ({ index: i, value: v.toLowerCase() }));

mapped.sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0));
//mapped.sort((a, b) => a.value.localeCompare(b.value))

const result = mapped.map(o => o.value);
console.log(result);

//160) Default values with object destructuring

const duplicates = {
  name: "Yuta",
  age: 25,
  bestFriendProfile: {
    name: "Yuta",
    age: 25,
  },
};
//the issue is the object duplciates has the same property name, name and age
//so we can't destruct them under the same or a duplicate parameter error will be thrown

//First, learn how to pass DEFAULT VALUES: we're assigning default parameters, in case no argument is passed
const defaults = ({ name = "Yuta", age = 25, dream = "inner peace" } = {}) =>
  `${name}, ${age} dreams of finding ${dream}`;
console.log(defaults());
//"Yuta, 25 dreams of finding inner peace"

console.log(defaults({ name: "Yuti", age: 27, dream: "die" }));
//"Yuti, 27 dreams of finding die"

//Second: assign the proeprty to a different variable name:
const assignNewName = ({
  name,
  age,
  bestFriendProfile: { name: bestName, age: bestAge },
}) =>
  `I am ${name} and ${age} years old. My best firend is ${bestName} and is ${bestAge} old`;

//So, we're assing the name and age property of the bestFriendProfile object to bestName and bestAge
//the first 2 name and age properties will keep their property name and the second name and age
//got new variable names and we destructed property without getting duplicate parameters error

//Third: assign default values AND variable name

const defaultValueVariable = ({
  name: newName = "Yuta",
  age: newAge = 27,
} = {}) => `${newName} and ${newAge}`;

console.log(defaultValueVariable()); //"Yuta and 27"

console.log(defaultValueVariable({ name: "Yuti", age: 25 })); //"Yuti and 25"

const obj = { name: "Yuta", age: 25, goal: "Coder" };
const array = [1, 2, 3, 4, 5];
const jsonObj = JSON.stringify(obj);
const jsonArr = JSON.stringify(array);

const parseJsonObj = JSON.parse(jsonObj);
const parseJsonArr = JSON.parse(jsonArr);
console.log(obj); //> Object { name: "Yuta", age: 25, goal: "Coder" }

console.log(jsonObj); //> "{"name":"Yuta","age":25,"goal":"Coder"}"

console.log(parseJsonObj); //> Object { name: "Yuta", age: 25, goal: "Coder" }

console.log(jsonArr);

console.log(parseJsonArr);

//161) Sort the word in a lexigraphical order first and last
/*
  Lexicographically first: the permutation of the string that would appear first in the English dictionary 
  (if the word existed).
  Lexicographically last: the permutation of the string that would appear last in the English dictionary 
  (if the word existed).
  */
const word = "marmite";
console.log([...word].sort((a, b) => a.localeCompare(b)).join(""));

console.log([...word].sort((a, b) => b.localeCompare(a)).join(""));

const firstAndLast = word => [
  [...word].sort((a, b) => a.localeCompare(b)).join(""),
  [...word].sort((a, b) => b.localeCompare(a)).join(""),
];

//161) decimal to binary: count how many 1's are in the binary, toString(2) on a decimal will convert it to a binary
const countOnes = n => [...n.toString(2)].filter(v => +v === 1).length;

//162) Recreate Math.abs()

const absolute = n => (n < 0 ? n * -1 : n);
const absolutes = n => n * Math.sign(n);

//clever way of doing it: we create an array with [n, -n] and then access it with []
//where the value tests if n is smaller than 0, will return true if n is n < 0 and false if n > 0
//as [false] or [true] can't be used to access a value, we convert the boolean with an urnary operator +
//so [+(n < 0)] becomes 1 if true, so number is less than zero than accesses -n which converts number to plus
//why? because (-(-3.14)) is 3.14
//if number is bigger than 0 than it's false and returns 0, which means it stays the same since it just returns n
const absolutess = n => [n, -n][+(n < 0)];

console.log(absolute(-3.14));
console.log(absolutes(-3.14));
console.log(absolutess(3.14));

//163) Object Destructuring:
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" },
];

const [, , { name: thirdUser }] = users;
console.log(thirdUser);

//164) Find all Biograms:
/*
  You are given an input array of bigrams, and an array of words.
  
  Write a function that returns true if every single bigram from this array 
  can be found at least once in an array of words.
  
  canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
  
  canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
  # "cu" does not exist in any of the words.
  
  canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
  
  canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false
  */

const canFind = (b, w) =>
  b.every(v => w.some(word => RegExp(`${v}`, "g").test(word)));

//165) Filter out an object depending on if the value of a property is less than 5000
const filterValues = o => {
  const copy = { ...o };
  for (let key in copy) {
    if (copy[key] < 5000) {
      delete copy[key];
    }
  }
  return copy;
};

console.log(filterValues({ tv: 4999, guitar: 5000, fork: 5001 }));

const filterValuess = o => {
  const obj = {};
  for (let key in o) {
    if (o[key] >= 5000) {
      obj[key] = o[key];
    }
  }
  return obj;
};
console.log(filterValuess({ tv: 4999, guitar: 5000, fork: 5001 }));

//Using Object.fromEntries() and Object.entries(), they're essentially the opposite
//Object.entries() turns an object into an array of key value pairs
//while Object.fromEntries() converts an array of key value pairs into an object

const filterValuesss = o =>
  Object.fromEntries(Object.entries(o).filter(([key, value]) => value >= 5000));

console.log(filterValuesss({ tv: 4999, guitar: 5000, fork: 5001 }));

//166) check empty array depth:
//measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11

//solving it with Recursion:
const measureDepth = arr =>
  !Array.isArray(arr) ? 0 : 1 + measureDepth(arr.pop());

//we convert the array into a JSON string, return the length, and then divide by 2, as [].lenght is 2
const measureDepths = arr => JSON.stringify(arr).length / 2;
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]]));
console.log(measureDepths([[[[[[[[[[[]]]]]]]]]]]));

//167) You're given 'Des' or 'Asc' or 'None', if Des then sort in descending order, Asc then ascending order
//if none then leave as is

//Simple way of doing it:
const ascDesNone = (arr, order) =>
  order === "Asc"
    ? arr.sort((a, b) => a - b)
    : order === "Des"
    ? arr.sort((a, b) => b - a)
    : arr;
//Better way of doing it by checking the order variable inside the sort callback
const ascDesNones = (arr, order) =>
  arr.sort((a, b) => (order === "Asc" ? a - b : order === "Des" ? b - a : 0));
console.log(ascDesNone([4, 3, 2, 1], "Asc"));

//168)Invert Keys and Values
//invert({ "z": "q", "w": "f" })
//➞ { "q": "z", "f": "w" }

const invert = o =>
  Object.fromEntries(Object.entries(o).map(([key, value]) => [value, key]));

//same as above but we just run reverse on the array returned from Object.entries
const inverts = o =>
  Object.fromEntries(Object.entries(o).map(a => a.reverse()));

//use a for each loop
const inverted = o => {
  const obj = {};
  Object.entries(o).forEach(([key, value]) => {
    obj[value] = key;
  });
  return obj;
};
console.log(invert({ z: "q", w: "f" }));
console.log(inverted({ z: "q", w: "f" }));

//169) automatically generate the alphabet
const alphabet = n =>
  Array.from({ length: n }, (_, i) => String.fromCharCode(97 + i));
console.log(alphabet(26));
//["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//170)Adding up Letters
// d + e + f would be 4 + 5 + 6 = 15
//Like with y + c, that's 25 + 3 = 28, which doesn't exist. Consider that the 27th letter
//just wraps around and ends back up at a. With this logic, y + c = b.
const addLetters = a => {
  let n = a.reduce((a, c) => a + (c.charCodeAt() - 96), 0);
  n = n > 26 ? n % 26 : n;
  return a.length === 0
    ? "z"
    : Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))[n - 1];
};
//first we run reduce and get the total sum of the letters, where a is 1, b is 2 etc.
//if n is bigger than 26, then we run n % 26 which gets us 1~26, so 28 is b and n % 26 gives 2, which is b
//then we create the alphabet with Array.from({length: 26}, (_,i) => String.fromCharCode(97 + i))
//and then access the letter with [n - 1]. We substract by one since array are zero indexed

//171) Zip it: create a new array of each pair of the 2 arrays, if the sizes of the 2 arrays are not the same
//return 'sizes don't match'
/*
  zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
   ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]
  */

//simple way of doing it:
const zipIt = (a, b) =>
  a.length === b.length ? a.map((v, i) => [v, b[i]]) : "sizes don't match";

//Using the && operatir to execute the right expression if the left expression is true
//e.g. true && 'this is returned', string is returned
const zipIts = (a, b) =>
  (a.length === b.length && a.map((v, i) => [v, b[i]])) || "sizes don't match";

console.log(zipIts(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
//another intersting way of doing it using for in loop of an array
//the for in loop iterates over the iterable PROPERTIES of an object
//for of loop iterates over the VALUES
const zipItss = (a, b) => {
  const arr = [];
  if (a.length !== b.length) {
    return "sizes don't match";
  }
  for (let i in a) {
    arr.push([a[i], b[i]]);
  }
  return arr;
};

console.log(zipItss(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Robb"]));

//171) Nested Object: You're given a nested object with the structure of
//{r1: {me:1, spouse:2}, r2: {me: 3, spouse: 4}, r3: {me: 4, spouse: 5}}
//the value of the me and spouse keys are the amount of times each have cursed
//return who cursed more.

//using for in loop
const determineWhoCursedTheMost = o => {
  let me = 0;
  let spouse = 0;
  for (let key in o) {
    me += o[key].me;
    spouse += o[key].spouse;
  }
  return me > spouse ? "ME!" : spouse > me ? "SPOUSE!" : "DRAW!";
};
//using Object.values() and reduce
const determineWhoCursedTheMosts = o => {
  const isBigger = Object.values(o).reduce((a, c) => a + (c.me - c.spouse), 0);
  return (isBigger === 0 ? "DRAW" : isBigger > 0 ? "ME" : "SPOUSE") + "!";
};

console.log(
  determineWhoCursedTheMosts({
    round1: {
      me: 10,
      spouse: 5,
    },
    round2: {
      me: 100,
      spouse: 4,
    },
  })
);

//172) Product of Digits of Sum
//get the SUM of total given arguments, and then get the product of that digit
//e.g.sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

//using a while loop
const sumDigProd = (...nums) => {
  let n = nums.reduce((a, c) => a + c, 0);
  while (n > 9) {
    n = [...`${n}`].reduce((a, c) => a * +c, 1);
  }
  return n;
};

//sumDigProd(98526, 54, 863, 156489, 45, 6156) => 2
console.log(sumDigProd(98526, 54, 863, 156489, 45, 6156));

//using recursion
const product = n =>
  n < 10 ? n : product([...`${n}`].reduce((a, c) => a * +c, 1));

const sumDigProds = (...nums) => product(nums.reduce((a, c) => a + c, 0));

console.log(sumDigProds(98526, 54, 863, 156489, 45, 6156));

//173) Return the length of the stirng without using the .length property

//map returns an array of the 1 + i, where the last element is the length since we add index + 1
//where length like 5, would be index 4 for the last element and by adding 1, like 4 + 1, we get 5
//then we call pop() to get the last element which is the length of the string
const lengths = s => [...s].map((v, i) => 1 + i).pop() || 0;

//we run reduce and 1 to the accumulator, which adds only 1 for every iteration, which is the length
const lengthss = s => [...s].reduce((a, c) => a + 1, 0);

//recursive solution which removes one character for every call with s.lice(1)
//until our s argument becomes an empty string, then we return 0
//and then when the numbers add up, it returns the length
const lengthsss = s => (!!s ? 1 + length(s.slice(1)) : 0);

//174) Check if every number in the array is a prime number:
const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return n !== 1;
};

const allPrime = a => a.every(isPrime);

//175) Nested loop:

//using 2 for loops to make a nested loop:
//printAllGroups() ➞ "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e "
const printAllGroups = () => {
  const arr = ["a", "b", "c", "d", "e"];
  const a = [];
  for (let i = 1; i < 7; i++) {
    for (let j = 0; j < arr.length; j++) {
      a.push(i + arr[j]);
    }
  }
  return a.join(", ");
};
//using map to create the same outcome

const printAllGroupss = () =>
  [1, 2, 3, 4, 5, 6]
    .map(
      num => ["a", "b", "c", "d", "e"].map(char => num + char).join(", ") + ","
    )
    .join(" ")
    .slice(0, -1);

//best solution with using for of loop
const printAllGroupsss = () => {
  const a = [];
  for (let x of "123456") {
    for (let y of "abcde") {
      a.push(x + y);
    }
  }
  return a.join(", ");
};

//176) How Many decimal places?
const getDecimalPlaces = nums => (nums.split(".")[1] || []).length;
console.log(getDecimalPlaces("42.222"));
console.log(getDecimalPlaces("2343"));

//177) Advanced sort question: sort by length
//if word has same length, then sort by alphabatical order

const sortByLength = sentence =>
  sentence
    .split(" ")
    .sort(
      (a, b) =>
        a.length - b.length ||
        a.localeCompare(b, undefined, { sensitivity: "base" })
    )
    .join(" ");
//first we sort the array by word length, a.length - b.length, if word length is the same then it's 0
//so, the right sided expression gets executed if that is truthy, which it is
//that will pass the test of words with the same length and allow us to sort alphabetically
//then we run a.localeCompare(b)
//but as in the test case below, we must include an options object to NOT make it case sensitive
//or else To and to are different, but we want that to be ignored
//"base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
console.log(sortByLength("To be or not to be, that is the question."));

//178) Get the length of a number through recursion
//e.g. 1234 ---> 4
const count = n => (Math.abs(n) < 10 ? 1 : 1 + count(Math.abs(n / 10)));

//179) Finish the Sentence You're On!
//You're given a complete sentence and part of the sentence
//determine how long you need to finish the partial sentence, given each character takes 0.5
//ignore spaces but include puncutation
const timeToFinish = (fin, part) =>
  ((fin.match(/[^\s]/g) || []).length - (part.match(/[^\s]/g) || []).length) *
  0.5;
const timeToFinishs = (fin, part) =>
  fin.slice(part.length).replace(/\s/g, "").length * 0.5;

//180) re-create Object.values and Object.entries
Object.prototype.newValues = function (obj) {
  const arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
};
console.log(Object.newValues({ a: 1, b: 2, c: 3 }));
//First, we don't use the this keyword since that's the calling object, so unlike
//String.prototype.methodName, this is Not what calls the method since we invoke the object
//as a method defined directly on Object, so it's the function argument
//IMPORTANT: we have to run hasOwnProperty or else the method name newValues would be included as a key of the object
//so obj[key] would return the value which is the function itself that we defined
//hence we run obj.hasOwnProperty(key) to check if the property is the object's own property and NOT inherited

Object.prototype.newEntries = function (obj) {
  const arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
};

console.log(Object.newEntries({ a: 1, b: 2, c: 3 }));

//181) Converting Array to Object
//The first 2 are basic ways to convert
const toObject = arr => {
  const obj = {};
  arr.forEach(array => {
    obj[array[0]] = array[1];
  });
  return obj;
};

const toObjects = arr => {
  return arr.reduce((a, c) => {
    a[c[0]] = c[1];
    return a;
  }, {});
};
//advanced array to object conversion
/*
  makeDetailedList([
    ["basement", ["baseball bat"], [500] ],
    ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
  ]) ➞ {
    basement: {
      "baseball bat": 500
    },
    garage: {
      horses : 110,
      cadillac: 2000,
      flowers: 30
    }
  }
  */
const toObjectAdvanced = arr =>
  arr.reduce((a, c) => {
    a[c[0]] = c[1].reduce((x, y, i) => {
      x[y] = c[2][i];
      return x;
    }, {});
    return a;
  }, {});

console.log(
  toObject([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
console.log(
  toObjects([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
console.log(
  toObjectAdvanced([
    ["basement", ["baseball bat"], [500]],
    ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]],
  ])
);

//Interesting way of calling the upper and lower case method, mainly through bracket notation and not dot notation
//strings are sorted under lexigraphical order, and a is bigger than A, so 'Low' is called
const inverteded = s =>
  [...s]
    .reverse()
    .map(c => c[`to${c < "a" ? "Low" : "Upp"}erCase`]())
    .join("");

//182) Object: assigning its own value plus n years
const afterNYears = (names, n) => {
  for (let key in names) {
    names[key] += Math.abs(n);
  }
  return names;
};

const afterNYearss = (names, n) => {
  Object.keys(names).forEach(key => {
    names[key] += Math.abs(n);
    //why is an assignmnt like names[key] = names[key] + n, necessary?
    //because you're assigning a new value to the names[key] property
    //which is the value of the key-value pair
    //like, obj.a = 10, where names[key] is assigned it's own value + n
  });
  return names;
};

console.log(
  afterNYears(
    {
      Genie: 1000,
      Joe: 40,
    },
    5
  )
);

console.log(
  afterNYearss(
    {
      Genie: 1000,
      Joe: 40,
    },
    5
  )
);

//183) invert string:
//recursion: !string.length is true when string length is 0, so 0 is flipped to 1 true
const invertRecursion = string =>
  !string.length
    ? ""
    : (/[A-Z]/.test(string.slice(-1))
        ? string.slice(-1).toLowerCase()
        : string.slice(-1).toUpperCase()) +
      invertRecursion(string.slice(0, -1));

//Advanced Method call: instead of using bracket notation instead of dot notation
const invertMethod = s =>
  [...s]
    .reverse()
    .map(c => c[`to${c < "a" ? "Low" : "Upp"}erCase`]())
    .join("");

//See below for example:
const valueOne = "Hello";
const valueTwo = "World";
const keyOne = "keyone";
const keyTwo = "keytwo";
const bracketNotationCall = {
  [keyOne]: valueOne,
  [keyTwo]: valueTwo,
  keyThree() {
    return "Hello, World";
  },
};

console.log(bracketNotationCall["keyThree"]());

//184) Sorting and object destructuring
/*
  leaderboards([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ]) ➞ [
    { name: "c", score: 115, reputation: 30 },  // trueScore = 175
    { name: "b", score: 90, reputation: 40 },   // trueScore = 170
    { name: "a", score: 100, reputation: 20 }   // trueScore = 140
  ]
  */

const leaderboards = students =>
  students.sort(
    (
      { name: nameA, score: scoreA, reputation: reputationA },
      { name: nameB, score: scoreB, reputation: reputationB }
    ) => scoreB + reputationB * 2 - (scoreA + reputationA * 2)
  );

console.log(
  leaderboards([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ])
);

//185) numerous ways of constructirng objects from object values
const countNumberOfOccurrences = obj =>
  Object.values(obj).reduce((a, c) => {
    if (!a[c]) {
      a[c] = 1;
      return a;
    }
    a[c] += 1;
    return a;
  }, {});

const countNumberOfOccurrencess = obj =>
  Object.values(obj).reduce((a, c) => {
    if (!a[c]) a[c] = 1;
    else a[c] += 1;
    return a;
  }, {});

const countNumberOfOccurrencesss = obj => {
  const o = {};
  Object.values(obj).forEach(key => (!o[key] ? (o[key] = 1) : (o[key] += 1)));
  return o;
};

console.log(
  countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
  })
);

console.log(
  countNumberOfOccurrencess({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
  })
);

console.log(
  countNumberOfOccurrencesss({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
  })
);

//186) Using objectName.hasOwnProperty(keyName)
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

const greeting = name => {
  return GUEST_LIST.hasOwnProperty(name)
    ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}`
    : `Hi! I'm ${name}, and I'm a guest.`;
};

const flip = (str, spec) => {
  const obj = {
    word() {
      return str
        .split(" ")
        .map(v => [...v].reverse().join(""))
        .join("");
    },
    sentence() {
      return str.split(" ").reverse().join("");
    },
  };
  return obj[spec]();
};
console.log(flip("Hello", "word"));

console.log("potatopotato".match(/potato/g).length);

const median = n => {
  return n.length % 2 === 1
    ? n[(n.length - 1) / 2]
    : (n[n.length / 2] + n[n.length / 2 - 1]) / 2;
};
console.log(median([1, 4, 4, 9, 9, 10]));
const countAdverbs = s =>
  s
    .split(" ")
    .filter(v => v.endsWith("ly,") || v.endsWith("ly") || v.endsWith("ly,"))
    .length;
const countAdverbss = s => (s.match(/\w+ly/g) || []).length;
console.log(countAdverbs("He was happily, crazily, foolishly over the moon."));
console.log(countAdverbss("Ilya ran to the store."));

//7) check if a given interval of array intersects with a given point
//so if point is 5, then [5,6] and [5,7] would be intersecting
const countOverlapping = (intervals, point) => {
  return intervals.filter(v => v[1] >= point && point >= v[0]).length;
};
//we could write the filter function like this too
const countOverlappings = (i, p) =>
  i.filter(([a, b]) => p >= a && b >= p).length;
//we destructed the array in our callback in our filter method with ([a,b])

//we could do it with reduce as well
const countOverlappingss = (i, p) => {
  return i.reduce((a, c) => a + (c[1] >= p && p >= c[0]), 0);
};

console.log(
  countOverlapping(
    [
      [1, 2],
      [5, 6],
      [5, 7],
    ],
    5
  )
);

const arr = [1, [[2], 3]];
const arr2 = ["one", "two", "three", "four"];
const [, , , frous] = arr2;
const [ones, ...tail] = arr2;
console.log(tail);
const [one, [[two], three]] = arr;
console.log(two + three + one);

console.log(frous);

const objs = { foo: "bar", bar: "foo" };
const { foo, bar } = objs;
const { foo: newfoo } = objs;
console.log(newfoo);

const complicatedObj = {
  arrayProp: ["Zapp", { second: "Bra" }],
};
//const func = ({first,last, another:{first:one,last:two}} )=> `I, ${first} ${last} consider, ${one} and ${two} to be very good games`

const [missing = "one"] = [];
const { variable: msg = "check it out" } = {};
console.log(msg);
console.log(missing);
const obj = {
  first: "Y",
  last: "M",
  another: {
    first: "Sword",
    last: "Shield",
  },
};

//console.log(func(obj))
console.log(JSON.stringify(objs));
const func = ({ first, last, another: { first: gameOne, last: gameTwo } }) => {
  return `I, ${first} believe that ${gameOne} is the best game I've played all year`;
};
console.log(func(obj));
//Hahaloo -> hoholoo
const replacer = s => s.replace(/([aeiou])+(h)+/g, "$2");
console.log(replacer("Hahaloo"));

const noyelling = s => s.replace(/([!?])+$/g, "$1");
console.log(noyelling("I just!!! can!!! not!!! believe!!! it!!!"));

//Write a function that replaces all letters within a
//specified range with the hash symbol #.

const replace = (s, r) => {
  let regex = new RegExp(`[${r}]`, "g");
  return s.replace(regex, "#");
};
console.log(replace("abcdef", "c-e"));

//17,20

const rangeArr = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).reduce(
    (a, c) => a + [...`${c}`].reduce((a, c) => a + +c, 0),
    0
  );
};
console.log(rangeArr(10, 12));

const makeHappy = str => {
  const obj = {
    ":(": ":)",
    "8(": "8)",
    "x(": "x)",
    ";(": ";)",
  };
  return str.replace(/(\:\(|8\(|x\(|;\()/g, v => obj[v]);
};
console.log(makeHappy("I am not very happy ;("));

//more efficient solution:
const makeHappys = s => {
  return s.replace(/([:8;x])\(/g, "$1)");
};

console.log(makeHappys("I am not very happy ;("));
/*
  
  mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8])
  ➞ ["f", 5, "d", 3, "w", 7, "t", 8]
  
  */

//const mergeArraysss = (a,b) => a[0].split('').concat(Number(b[0].toString().split('')))
//const mergeArrayss = (a,b) => a.reduce((a,c,i) => a.concat(c.split('').concat(Number(b[i].toString().split('')))), [])
/*
  const mergeArrays = (a,b) => {
      if(a.length >= b.length) {
          return b.reduce((accum,curr,i) => {
              if(typeof a[0] === 'number') {
                  return accum.concat(curr.split('').concat(Number(a[i].toString().split(''))))
              } else {
                  return accum.concat(curr.toString().split('').concat(a[i].split('')))
              }
          }, []).concat(a.slice(b.length)).map(v => Boolean(Number(v)) ? Number(v) : v)
      } else {
          return 'wrong'
      }
  }  
  */
const mergeArrays = (a, b) => {
  const arr = [];
  if (a.length >= b.length) {
    for (let i = 0; i < b.length; i++) {
      arr.push(Array(String(a[i])).concat(String(b[i])));
    }
    return arr
      .flat()
      .concat(a.slice(b.length))
      .map(v => (Boolean(Number(v)) ? +v : v));
  } else {
    for (let i = 0; i < a.length; i++) {
      arr.push(Array(String(a[i])).concat(String(b[i])));
    }
    return arr
      .flat()
      .concat(b.slice(a.length))
      .map(v => (Boolean(Number(v)) ? +v : v));
  }
};

//console.log(mergeArrayss(["f", "d", "w", "t",'r','s'], [5, 3, 7, 8]))
console.log(mergeArrays([123, 456], ["c", "b", "a"]));
console.log([":)", ";(", ";}", ":-D"].join(" "));

//[2,4] n(3) is in the range

//if result is lower than 0, then return 0
const checkScore = arr => {
  const obj = { "#": 5, O: 3, X: 1, "!": -1, "!!": -3, "!!!": -5 };
  const result = arr.reduce((a, c) => a + c.reduce((x, y) => x + obj[y], 0), 0);
  return result <= 0 ? 0 : result;
};

//better answer using Math.max()

const checkScores = arr => {
  const obj = { "#": 5, O: 3, X: 1, "!": -1, "!!": -3, "!!!": -5 };
  return Math.max(
    arr.reduce((a, c) => a + c.reduce((x, y) => x + obj[y], 0), 0),
    0
  );
};

console.log(
  checkScore([
    ["!!!", "O", "!"],
    ["X", "#", "!!!"],
    ["!!", "X", "O"],
  ])
);

console.log(
  checkScores([
    ["!!!", "O", "!"],
    ["X", "#", "!!!"],
    ["!!", "X", "O"],
  ])
);
/*
  checkScore([
    ["#", "!"],
    ["!!", "X"]
  ]) ➞ 2
  */

function arrayOperation(x, y, n) {
  return Array.from({ length: y - x + 1 }, (_, i) => x + i).filter(
    num => num % n === 0
  );
}
/*
  VERY HARD
  numSplit(39) ➞ [30, 9]
  
  numSplit(-434) ➞ [-400, -30, -4]
  
  numSplit(100) ➞ [100, 0, 0]
  */

const numSplit = n => {
  const s = `${n}`.replace(/\-/g, "");
  return Array.from({ length: s.length }, (_, i) =>
    s[i] === "0"
      ? 0
      : +((0 > n ? "-" : "") + s[i] + "0".repeat(s.length - 1 - i))
  );
};

console.log(numSplit(-434));

//Using switch...case statement:
const operations = (x, y, op) => {
  switch (op) {
    case "add":
      return +x + +y;
      break;
    case "subtract":
      return +x - +y;
      break;
    case "multiply":
      return +x * +y;
      break;
    case "divide":
      return y == 0 ? "undefined" : +x / +y;
      break;
    default:
      return false;
  }
};
//Using Getter:
const operation = (a, b, op) => {
  const obj = {
    a: 0,
    b: 0,
    get add() {
      return this.a + this.b;
    },
    //the reason why getter can access this.a is because it's obj that calls the getter method, so this === obj
    //but if it's a property, then 'this' would still be a property of the global object which is window
    //hence: it works fine with getters or classes, but not as a property of object literals
    get subtract() {
      return this.a - this.b;
    },
    get multiply() {
      return this.a * this.b;
    },
    get divide() {
      return this.a / this.b;
    },
  };
  (obj.a = a), (obj.b = b);
  return isFinite(obj[op]) ? obj[op] : "undefined";
};

console.log(operation(10, 0, "divide"));
console.log(operations(10, 0, "divide"));

//Inclusive Array Ranges
//inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]

const inclusiveArray = (s, e) =>
  s > e ? [s] : Array.from({ length: e - s + 1 }, (_, i) => s + i);

const inclusiveArrays = (s, e) => {
  const a = [];
  if (s > e) a.push(s);
  else for (let i = s; i <= e; i++) a.push(i);
  return a;
};
console.log(inclusiveArray(1, 5));
console.log(inclusiveArrays(1, 5));

/*
  First 100 Units will be charged at $1/unit.
  Next 100 Units will be charged at $2/unit.
  Next 100 Units will be charged at $3/unit.
  Next 200 Units will be charged at $4/unit.
  Next Units will be charged at $5/unit.
  10% tax to be added in final amount.
  Extra $15 to be added for Meter Charge.
  */

// 100 units at $1/unit = 100,
// 10% Tax = 10,
// $15 for Meter Charge = 15,
// Electricity Bill = 100 + 10 + 15
const electricityBill = n => {
  const l = Math.ceil(n / 100);
  const total = Array.from({ length: l }, (_, i) => {
    const num = 100 * (i + 1);
    const final = n > num ? 100 : n - 100 * i;
    const t =
      i === 0
        ? final * 1
        : i === 1
        ? final * 2
        : i === 2
        ? final * 3
        : i === 3
        ? final * 4
        : i === 4
        ? final * 4
        : final * 5;
    return Math.ceil(t * 100) / 100;
  }).reduce((a, c) => a + c, 0);
  const final = +(total * 0.1 + total + 15).toFixed(2);
  return +(final + 0.01).toFixed(2);
};

console.log(electricityBill(133.17));
console.log(electricityBill(111.11));

//asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"

const asciiCapitalize = str =>
  [...str]
    .map(char => char[`to${char.charCodeAt() % 2 ? "Lower" : "Upper"}Case`]())
    .join("");
console.log(asciiCapitalize("THE LITTLE MERMAID"));

const error = n =>
  n > 0
    ? `${
        [
          "Check the fan",
          "Emergency stop",
          "Pump Error",
          "c",
          "Temperature Sensor Error",
        ][n - 1]
      }: e${n}`
    : 101;

const operation = (n1, n2) => {
  switch (24) {
    case n1 + n2:
      return "added";
    case n1 - n2:
      return "subtracted";
    case n1 * n2:
      return "multiplied";
    case n1 / n2:
      return "divided";
    default:
      return null;
  }
};

const obj = { name: "Yuta", age: 25, talent: "loser who should just die" };

const profile = {
  data: obj,
};

let s = "";

for (let key in profile.data) {
  if (key === "name") {
    s += `My name is ${profile.data[key]}. `;
  } else if (key === "age") {
    s += `And my age is ${profile.data[key]}. `;
  } else {
    s += `And I'm a worthless ${profile.data[key]}`;
  }
}

const global = {
  users: 0,
  get total() {
    this.users += 1;
    return this.users;
  },
};

class User {
  constructor(username) {
    this.username = username;
  }
  static get userCount() {
    return global.total;
  }
}

const u1 = new User("p1");
const u2 = new User("p2");
const u3 = new User("p3");

console.log(u1.username);
console.log(User.userCount);

console.log(u2.username);
console.log(User.userCount);

console.log(u3.username);
console.log(User.userCount);

//IMPORTANT!!!
class Users {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    Users.userCount += 1;
  }
}

console.log(Users.userCount); //0
const p1 = new Users("u1");
console.log(Users.userCount); //1
const p2 = new Users("u2");
console.log(Users.userCount); //2
const p3 = new Users("u3");

//Explanation: while the class instance p1, p2, and p3 are different objects, the class 'Users' is one and the same
//so static properties like 'userCount', defined directly on Users and not the prototype, will be the same
//and there won't be multiple instances of it, those are for object instances
//and every time we call instantiated a new instance by calling the class's constructor with new()
//the constructor method is invoked, and inside the constructor method, we increment the static property userCount
//by one, we could also just write Users.userCount++ instead of Users.userCount += 1
//The logic is simple, as constructor() is a method, and when defined, everything inside it will be executed
//like a function that does not return a value and just performs a task, like a DOM manipulation
//document.body.style.color = 'blue', we don't return anything but just perform a task
//and when the function body is executed, that DOM manipulation is performed as well
//and likewise, when constructor is called, Users.userCount+=1 is also executed,
//and it will increment the static userCount property by one

//Return the key name with the highest integer as its value:

//Best way is to use Object.entries and then run sort
const mostExpensiveItem = obj =>
  Object.entries(obj).sort(([, a], [, b]) => b - a)[0][0];
console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
); //returns 'stereo' since it's the key-value pair with the highest value

//Another way to solve is using reduce:
const mostExpensiveItem = obj =>
  Object.keys(obj).reduce((key, currKey) => {
    if (obj[currKey] > obj[key]) {
      return currKey;
    } else {
      return key;
    }
  }, Object.keys(obj)[0]);
//As the accumulator (here named as key) is UPDATED EVERY ITERATION, we compare if the current key-value pair is larger than the previous current-value pair
//If obj[currKey] is bigger than obj[key], then we return currKey, if not then we just return key.

//Recursion: Find the highest number in an array using recurison
/*
  findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99
  
  findHighest([0, 12, 4, 87]) ➞ 87
  
  findHighest([6,7,8]) ➞ 8
  */
const findHighest = (nums, max = nums[0]) => {
  if (nums.length <= 1) {
    return max;
  } else {
    max = max >= nums.slice(-1)[0] ? max : nums.slice(-1)[0];
    return findHighest(nums.slice(0, -1), max);
  }
};

console.log(findHighest([6, 7, 8, 5, 10]));
console.log(findHighest([-1, 3, 5, 6, 99, 12, 2]));
console.log(findHighest([0, 12, 4, 87]));
console.log(findHighest([6, 7, 8]));

const isTruthy = v => [0, 1][+!!v];

console.log(isTruthy(""));

/*
  highLow("1 2 3 4 5") ➞ "5 1"
  
  */

const highLow = n => {
  const a = n.split(" ");
  return `${Math.max(...a)} ${Math.min(...a)}`;
};

console.log(highLow("1 2 3 4 5"));
