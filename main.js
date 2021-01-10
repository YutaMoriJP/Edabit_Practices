const countNumber = arr =>
  arr.reduce(
    (a, c) => a + (Array.isArray(c) ? countNumber(c) : typeof c === 'number'),
    0
  );

console.log(countNumber([['', 17.2, 5, 'edabit']]));

const wordBuilder = (c, p) => {
  const arr = [];
  c.forEach((v, i) => (arr[p[i]] = v));
  return arr.join('');
};

//wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]) ➞ "test"
console.log(wordBuilder(['e', 't', 's', 't'], [1, 3, 2, 0]));

const hasHiddenFee = (p, t) => {
  return (
    p.reduce((a, c) => a + +c.replace(/\D/g, ''), 0) < +t.replace(/\D/g, '')
  );
};
console.log(hasHiddenFee(['$2', '$4', '$1', '$8'], '$15'));

const flash = ([n1, op, n2]) =>
  n2 === 0
    ? undefined
    : {
        x(n1, n2) {
          return n1 * n2;
        },
        '/'(n1, n2) {
          return n1 / n2;
        },
        '+'(n1, n2) {
          return n1 + n2;
        },
        '-'(n1, n2) {
          return n1 - n2;
        },
      }[op](n1, n2);

console.log(flash([3, 'x', 7]));

//1)Incorrect Import Statement
//In JavaScript, when we import modules, the syntax is
//import object from module_name
//But in Python the syntax is a bit different:
//from module_name import object
//Convert the JS import statement to the Python import statement
const fixImport = s => {
  const [i, o, f, m] = s.split(' ');
  return `${f} ${m} ${i} ${o}`;
};

console.log(fixImport('import object from module_name'));

//2) Nth smallest item: return the nth smallest number from the
//unsorted array:

const nthSmallest = (a, n) => a.sort((a, b) => a - b)[n - 1] || null;

console.log(nthSmallest([1, 3, 5, 7], 3));
console.log(nthSmallest([1, 3, 5, 7], 5));

const getFilename = path => path.split('/').pop();
console.log(getFilename('C:/Projects/pil_tests/ascii/edabit.txt'));

class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  intro(x, y) {
    return `My name is ${this.name} and I am ${this.age} years old. My goal is ${x} and to do ${y}`;
  }
}

const t1 = new Test('Yuta', 25);
console.log(t1.intro('Die', 'Kill'));

console.log(
  Test.prototype.intro.call({ name: 'Yuta', age: 25 }, 'Die', 'Kill')
);

const state = [{ date: { a: 1, b: 2 } }];
const date = '2020-20-10';
const o = [...state, { [date]: { c: 3, d: 4 } }];

console.log(o);

const composition = ({ name }) => {
  const monster = { name: name };
  return { ...monster };
};

//3) If edabit then leave as is, if not then add 'not' to amazing
const amazingEdabit = s =>
  !s.includes('edabit') ? s.replace(/amazing/, word => `not ${word}`) : s;
console.log(amazingEdabit('yuta is amazing'));

//4) Return the length of a number:
const numberLength = n => {
  const maxNum = BigInt(n).toString();
  return (n = 9999999999999999 ? maxNum.length - 1 : maxNum.length);
};
//We need to use th BigInt constructor since the given argument
//exceened

console.log(numberLength(7777777777777777777777777777));
console.log(numberLength(9999999999999999)); //double precision does not work
//so 9999999999999999 is rounded up
console.log(Number.MAX_SAFE_INTEGER);

//5)convert object to array
const toArray = o => Object.keys(o).map(k => [k, o[k]]);
const toArrays = o => {
  const a = [];
  for (let key in o) {
    a.push([key, o[key]]);
  }
  return a;
};
const toArrayss = o => Object.entries(o);

//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

console.log(toArray({ a: 1, b: 2 }));
console.log(toArrays({ a: 1, b: 2 }));
console.log(toArrayss({ a: 1, b: 2 }));

//6) determine which string number is larger WITHOUT converting the stirng to integer

//This is part of making code REUSABLE & DRY, we write a common reducer function
//namely, one that adds the charCode of the string
//and then we just pass the reducer callback to the reduce method
const reducer = (a, c) => a + c.charCodeAt();
const smallerNum = (n1, n2) =>
  [...n1].reduce(reducer, 0) > [...n2].reduce(reducer, 0) ? n2 : n1;
console.log(smallerNum('1500', '1'));

//7) Strange Pair:
/*
Strange Pair
A pair of strings form a strange pair if both of the following are true:

The 1st string's first letter = 2nd string's last letter.
The 1st string's last letter = 2nd string's first letter.
*/
//Reusable & DRY code: we write functions that test the condtions returning either true or false
//we check if our 2 function both return true
const lastFirst = (a, b) => a.slice(-1) === b.slice(0, 1);
const firstLast = (a, b) => a.slice(0, 1) === b.slice(-1);
const t = (a, b) => lastFirst(a, b) && firstLast(a, b);

console.log(t('', ''));
console.log(t('bush', 'hubris'));

//8) Recursion:
const sum = n => (n <= 1 ? n : n + sum(n - 1));
//factorial(3)
// 3 + sum(2) ===> 3 + 3 (sum(2) returns (2 + 1))
// 2 + sum(1) ===> 2 + 1 (sum(1) returns 1)
// 1

//9) return highest and lowest
//Test.assertEquals(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")

const highLow = s => {
  const nums = s.split(' ').sort((a, b) => +b - +a);
  return nums[0] + ' ' + nums.slice(-1)[0];
};

console.log(highLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));

console.log(highLow('13'));

const des = ({ a, b, c = 100 }) => c;
console.log(des({ a: 1, b: 2 }));

//10) Find the amount of the word 'potato' in your argument string
const potato = s => (s.match(/potato/g) || []).length;

//11) IMPORTANT: Error Messages
//The argument is a number 1-5 and each number has an error message
//We kind of could do it object literals like this {1: 'error!'}[n] but not the best way
//if we want to extract a value using a number, then the data structure should be an array

const error = n => {
  const errorMessage = [
    'Check the fan',
    'Emergency stop',
    'Pump Error',
    'c',
    'Temperature Sensor Error',
  ][n - 1];
  return errorMessage ? `${errorMessage}: e${n}` : '101';
};

//Better way of writing: include the e1, e2 etc. string in the array element and then use || operator
//to return 101 for undefined values

const errors = n =>
  [
    'Check the fan: e1',
    'Emergency stop: e2',
    'Pump Error: e3',
    'c: e4',
    'Temperature Sensor Error: e5',
  ][n - 1] || 101;

//Same answers as above, but instead of writing [n - 1] in the accessor statement
//we add an empty string

const errorss = n =>
  [
    '',
    'Check the fan: e1',
    'Emergency stop: e2',
    'Pump Error: e3',
    'c: e4',
    'Temperature Sensor Error: e5',
  ][n] || 101;

console.log(error(1));
console.log(errors(1));
console.log(errorss(1));

//11) Re-think about the map function:
//The map method calls the provided callback for each element of the array
//DON'T USE Array.prototype.map if you DON'T return a value, use forEach or for...of instead in such case

const mapMethod = Array.prototype.map;

const ASTWOtoBit = mapMethod.call('hello, world', function (value) {
  return value.charCodeAt();
});
//we use the call method to call the map method, providing 'hello world' as its value argument
//and then the callback function that receives each element of the array as an argument, so h === value, e === value etc.

console.log(ASTWOtoBit);

//12) Back and Forth:
/*
calculateArrowhead([">>>>", "<", "<", "<"]) ➞ ">"

calculateArrowhead([">", "<", ">>", "<", "<<<"]) ➞ "<<"

calculateArrowhead([">>>", "<<<"]) ➞ ""
*/

const calculateArrowhead = arr => {
  const right = arr
    .filter(arrow => /\>/.test(arrow))
    .reduce((a, c) => a + c.length, 0);
  const left = arr
    .filter(arrow => /\</.test(arrow))
    .reduce((a, c) => a + c.length, 0);
  return (left > right ? '<' : '>').repeat(
    Math.max(right, left) - Math.min(right, left)
  );
};

console.log(calculateArrowhead(['>>>>', '<', '<', '<']));

console.log(calculateArrowhead(['>', '<', '>>', '<', '<<<']));

//13) word length
const charLength = value => value.length;
const wordLengths = array => array.map(charLength);
console.log(wordLengths(['hi', 'yuta']));

//14) in a given array, is Sam and Frodo next to each other, return true or false

//below is not a bad but great solution
function middleEarth(arr) {
  return arr.some((name, i) =>
    name === 'Frodo'
      ? arr[i - 1] === 'Sam' || arr[i + 1] === 'Sam'
      : name === 'Sam'
      ? arr[i - 1] === 'Frodo' || arr[i + 1] === 'Sam'
      : false
  );
}

//a much better solution using regex, where we test if samfrodo or frodosam is true to the
//arrray converted to a joined string
const middleEarths = arr => /samfrodo|frodosam/i.test(arr.join(''));

//making use of indexOf and math.abs, as they are next to each other
//the absolute value of s - f must be 1, meaning that their index is right next to each other
const middleEarthss = arr => {
  const s = arr.indexOf('Sam');
  const f = arr.indexOf('Frodo');
  return Math.abs(s - f) === 1;
};
console.log(middleEarth(['Frodo', 'Sam', 'Gandalf']));
console.log(middleEarths(['Frodo', 'Sam', 'Gandalf']));
console.log(middleEarthss(['Frodo', 'Sam', 'Gandalf']));

//15) return the index of the first vowel
//firstVowel("STRAWBERRY") ➞ 3

//while we want to use indexOf, it does NOT accept regex as an argument
//but String.prototype.search(RegEx) does accept regex as an argument
//it searches each charcater in the string and searches for the given regex that is true
//then RETURNS THE INDEX like indexOf and -1 if not found

const firstVowel = s => s.search(/[aeiou]/i);

console.log(firstVowel('STRAWBERRY'));

function operation(a, b, op) {
  return {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    divide(a, b) {
      return b == 0 ? undefined : a / b;
    },
    multiply(a, b) {
      return a * b;
    },
  }[op](a, b);
}

console.log(operation(1, 0, 'divide'));
console.log(isFinite(1 / 0));

const user = { name: 'yuta', location: 'vic' };
const newUser = { ...user };
user.location = 'gilbrata';
console.log(newUser);

const updateLocation = (data, newLocation) => ({
  ...data,
  location: newLocation,
});

console.log(updateLocation(user, 'baku'));

//16) Boundary Assertion: filter out values that start with a CAPITAL C
const names = ['Coman', 'Lewy', 'Sane', 'Kimmich'];
//accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]

const filterOutC = names => names.filter(name => /[^C]/.test(name[0])); //this is a PURE FUNCTION
console.log(filterOutC(names));
console.log(filterOutC(['cars', 'trucks', 'planes']));

console.log(names); //remains the same
const arrayToString = arr => arr.toString().replace(/\,/g, '');
console.log(arrayToString(names));

//17) Designing Rugs
/*
Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

The default character (hash #) repeating n times (if no proc is given).
The character passed in through the proc repeating n times.
makeRug(3, 5) ➞ [
  "#####",
  "#####",
  "#####"
]

makeRug(3, 5, '$')  ➞ [
  "$$$$$",
  "$$$$$",
  "$$$$$"
]

makeRug(2, 2, 'A')  ➞ [
  "AA"
  "AA"
]
*/

const makeRug = (m, r, s = '#') => Array.from({ length: m }, _ => s.repeat(r));

//18) Meme Sum :)
/*
memeSum(26, 39) ➞ 515
// 2+3 = 5, 9+6 = 15
// 26 + 39 = 515
*/

const memeSum = (a, b) => {
  const max = String(Math.max(a, b));
  const min = String(Math.min(a, b));
  const diff = max.length - min.length;
  return +[...max].reduce((a, c, i) => {
    if (diff > i) {
      console.log(c);
      return a + +c;
    } else {
      console.log(min[i]);
      return a + (+c + +min[i - diff]);
    }
  }, '');
};

console.log(memeSum(2, 11));
//1 + 0
//1 + 2
//1 + 3 = 13

//20) Return the FIRST value if truthy and 'not found' if all are falsy
//number of arguments is not specified

const isTruthy = (...arg) => arg.find(Boolean) || 'not found';

//21) insert '.' in given number represented as d to the BigInt

//using splice
const formatBigInt = (n, d) => {
  const a = [...n.toString()];
  a.splice(-d, 0, '.');
  return a.join('');
};

//using slice
const formatBigInts = (bigNubmer, decimal) =>
  bigNubmer.toString().slice(0, -decimal) +
  '.' +
  bigNubmer.toString().slice(-decimal);

//same as above but slightly different syntax:
const formatBigIntss = (b, d, s = '' + b) => s.slice(0, -d) + '.' + s.slice(-d);

console.log(formatBigInt(987654321987654321n, 6));

console.log(formatBigInts(987654321987654321n, 6));

//22 Check if last charcater is n or not. DON'T USE REGEX

//by calling toLowerCase we can just pass 'n' without worrying about capped n
const isSmallN = word => word.toLowerCase().endsWith('n');

//23 return length of string WITHOUT using the length property

const length = s => [...s].reduce((a, c) => a + 1, 0);
/*
findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    },
  }) ➞ {
    bedroom: {
      slippers: 10000,
      piano: 5500,
    },
  }
  */

const findAndRemove = obj => {
  for (let key in obj) {
    for (let deepKey in obj[key]) {
      const isNum = +obj[key][deepKey];
      isNum ? (obj[key][deepKey] = isNum) : delete obj[key][deepKey];
    }
  }
  return obj;
};

console.log(
  findAndRemove({
    bedroom: {
      slippers: '10000',
      piano: '550',
      call: 'vet',
      travel: 'world',
    },
  })
);
/*
const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
  };

signAll(obj, "Rocky") ➞ {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "Rocky",  // changed
    },
    bathroom: {
      stereo: 220,
      signature: "Rocky",  // changed
    }
    signature: "Rocky",  // changed
}
*/

const signAll = (o, s) => {
  Object.entries(o).forEach(([key, nestedObj]) => {
    if (key === 'signature') {
      o[key] = s;
    }
    Object.keys(nestedObj).forEach(nestedKey => {
      if (nestedKey === 'signature') {
        o[key][nestedKey] = s;
      }
    });
  });
  return o;
};

const sourceObj = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: '',
  },
  bathroom: {
    stereo: 220,
    signature: '',
  },
  signature: '',
};

console.log(signAll(sourceObj, 'Rocky'));

//24) Prevent Object from getting mutated, so the object cannot have its internals changed
//that means values cannot change and new properties cannot be added

const isMutated = obj => {
  Object.freeze(obj);
  obj.newProp = 'can i do this?';
  obj.existingProp = 'can i do this then';
  return obj;
};

console.log(isMutated({ existingProp: 'hmmm' }));

//Configurable: object properties cannot be deleted and attributes not named writable cannot be changed

const isConfigurable = obj =>
  Object.defineProperty(obj, 'nope', {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true, //if false you cannot re-define so configure the object again
  });

const myObj = { changeIt: 'flexible', existingProp: 'works?' };

isConfigurable(myObj);

Object.defineProperty(myObj, 'nope', {
  value: 11,
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(myObj);

//Object.seal - no new properties can be added and makes it non-configurable,
//but values can be changed of existing properties

const looseRestriction = o => {
  //  'use strict' - would throw error in strict mode
  Object.seal(o);
  o.changeIt = 'changed!';
  o.notValid = 'will not work';
  return o;
};

console.log(looseRestriction(myObj));

/*
Object.freeze() prevents object from ADDING NEW PROPERTIES
and existing properties CANNOT CHANGED VALUES, NON-WRITABLE, and NON-CONFIGURABLE

A frozen object can no longer be changed; 
freezing an object prevents new properties from being added to it, 
existing properties from being removed, prevents changing the enumerability, 
configurability, or writability of existing properties, 
and prevents the values of existing properties from being changed. 

Object.seal() makes object non-configurable
In other words, you can still mutate the object by changing values of EXISTING PROPERTIES
but you cannot add new properties
*/

//replicate Object.freeze with Object.seal and Object.defineProperty

const newTestObj = {
  existingProp: 'same same',
};
const replicateFreeze = obj => {
  Object.keys(obj).forEach(key =>
    Object.defineProperty(obj, key, {
      writable: false,
      enumerable: true,
      configurable: false,
    })
  );
  Object.seal(obj);
  obj.existingProp = 'changed?'; //existing property, but cannot be mutated
  obj.newProp = 'allowed?'; //cannot be added because of Object.seal()
  return obj;
};
console.log(replicateFreeze(newTestObj));
const testo = { a: 1, b: 2 };
const testtwo = testo;
const fixIt = { ...testo };
testo.b = 3;
console.log(testtwo);
console.log(fixIt);

//Is Object extensible? Extensible means if it can have new properties added
//like extending a new property to the Sting.prototype
//if we add toNumber to Stirng.prototype.toNumber then we're extending the String object
const isExtensible = o => {
  o.initial = 'it was extensible here';
  const keys = Object.keys(o);
  keys.forEach(key =>
    Object.defineProperty(o, key, {
      writable: false,
      enumerable: true,
      configurable: false,
    })
  );
  o.after = 'can this be added?';
  o.canBeAdded = 'YES';
  Object.seal(o);
  o.cannotBeAdded = 'YES';
  return { value: o, isObjectExtensible: Object.isExtensible(o) };
};

console.log(isExtensible({ initial: '', after: '' }));

//25) return which function is larger
const whichIsLarger = (f, g) =>
  f() > g() ? f.name : g() > f() ? g.name : 'neither';

console.log(
  whichIsLarger(
    function f() {
      return 10;
    },
    function g() {
      return 11;
    }
  )
);

//26) In a given string, find the MOST LEFT DIGIT, but don't convert the string to an array
const mostLeftDigit = s => +s[s.search(/\d/)];
console.log(mostLeftDigit('abcdef5asdf4'));

const preventExtension = () => {
  const obj = { a: 1 };
  Object.preventExtensions(obj);
  try {
    Object.defineProperty(obj, 'b', {
      value: 2,
    });
  } catch (e) {
    return e; //error is thrown
  }
};

console.log(preventExtension());

//27) prevent deletion:

const preventDeletion = () => {
  'use strict';
  const myObj = { a: 1 };
  Object.defineProperty(myObj, 'b', {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: false,
  });
  //delete myObj.b throws error in strict mode as configurable is set to true so
  //property cannot be deleted and other property descriptors cannot be edited
};

console.log(preventDeletion());

//28) define multiple proerties

const mult = () => {
  const o = {};
  Object.defineProperties(o, {
    a: {
      value: 1,
      writable: true,
      enumerable: true,
    },
    b: {
      value: 2,
      writable: true,
      enumerable: true,
    },
    c: {
      get() {
        return this.a + this.b;
      },
      set(x) {
        this.a = x + x;
      },
      enumerable: true,
      configurable: true,
    },
  });
  return o;
};

console.log(mult());

//Try...catch: deals with different typeerrors by using instanceof operator
//if the error object is an instance of the TypeError object etc.

const tryCatch = () => {
  try {
    const a = 10;
    a = 12;
  } catch (e) {
    if (e instanceof TypeError) {
      console.log([] instanceof Array);
      console.log([].__proto__ === Array.prototype);
      console.log([].constructor === Array);
      return 'TypeError';
    } else {
      return { e: e };
    }
  }
};

console.log(tryCatch());

//28) join numbers:
const joinDigits = n =>
  Array.from({ length: n }, (_, i) => (i + 1 + '').split('').join('-')).join(
    '-'
  );
console.log(joinDigits(12));

const immutaedArray = [1, 2, 3, 4, 5];

const isMutaed1 = arr => arr.filter(v => v % 2);
isMutaed1(immutaedArray);
console.log(immutaedArray);
const isMutated2 = arr => arr.pop(); //the pop method removes the last element of an array
//so it's a mutating function
isMutated2(immutaedArray);
console.log(immutaedArray);

const isMutated3 = arr => arr.sort((a, b) => b - a); //sort mutates the array
const isMutated4 = arr => [...arr].sort();
isMutated3(immutaedArray);
console.log(immutaedArray);

console.log(isMutated4(immutaedArray));
console.log(immutaedArray);

//29 Sort by word length if same length then by lexicon order
const makeGrlex = arr => {
  return [...arr].sort((a, b) => a.length - b.length || (a > b ? 1 : -1));
};
//slight better way to compare lexical order instead of (a > b ? 1 : -1)

const makeGrlexx = arr =>
  arr.sort((a, b) => a.length - b.lengt || a.localeCompare(b));
console.log(makeGrlex(['this', 'is', 'a', 'small', 'test']));
//makeGrlex(["cat", "ran", "for", "the", "rat"]) ➞ ["cat", "for", "ran", "rat", "the"]

//30) Add the numbers in the string
const grabNumberSum = s => s.match(/\d+/g).reduce((a, c) => a + +c, 0);
console.log(grabNumberSum('hello20asds180'));

//31) return the next alphabet in the string
function move(word) {
  return [...word]
    .map(char => String.fromCharCode(char.charCodeAt() + 1))
    .join('');
}

console.log(move('hello'));

//32)Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.
//duplicateCount("Indivisibilities") ➞ 2

const duplicateCount = str =>
  [...str]
    .filter((v, i) => str.indexOf(v) !== i)
    .filter((v, i, thisArr) => thisArr.indexOf(v) === i).length;
console.log(duplicateCount('Indivisibilities'));

const camelToSnake = s => s.replace(/[A-Z]/g, v => `_${v.toLowerCase()}`);
//camelToSnake("magicCarrots") ➞ "magic_carrots"

console.log(camelToSnake('magicCarrots'));

//33 How Many Decimal Places?
/*
getDecimalPlaces("43.20") ➞ 2

getDecimalPlaces("400") ➞ 0

getDecimalPlaces("3.1") ➞ 1
*/
const getDecimalPlaces = n => (n.split('.')[1] || []).length;

//n.split('.') would return just the array of the number
//if there is no period. And accessing the 1 index of it
//returns undefined since that value in index 1 does not exist
//is thus undefined. We can use the || operator to return an empty array

//34 Who's The Oldest?
//In a key value pair of name and age, return the name of the oldest person
/*
oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
}) ➞ "Emma"

oldest({
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
}) ➞ "Sam"
*/
const oldest = p =>
  Object.entries(p).sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  )[0][0];
console.log(
  oldest({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29,
  })
);

//35 Burglary Series (06): Convert to Number

const convertToNumber = obj =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, +value]));

console.log(convertToNumber({ piano: '200' }));

class Name {
  static howManyInstances = 0;
  constructor(f, l) {
    Name.howManyInstances += 1;
    this.fname = f[0].toUpperCase() + f.slice(1).toLowerCase();
    this.lname = l[0].toUpperCase() + l.slice(1).toLowerCase();
    this.fullname = `${this.fname} ${this.lname}`;
    this.initials = f[0].toUpperCase() + '.' + l[0].toUpperCase();
  }
}

const n1 = new Name('yuta', 'MoRi');
console.log(n1.fullname);
console.log(Name.howManyInstances);
const n2 = new Name('add', 'MsddoRi');
console.log(Name.howManyInstances);
/*

36 Create a Book class using a JavaScript function - instantiable.
It should have a author and published property.

Create an Author class using a literal object - singleton.

It should have a name and books property.

Create a Publisher class by using the new constructor and an anonymous function - singleton.

It should have a authors and books property.

Create a Review class using a class declaration - instantiable.

It should have a rating and user property.

Create a Bookstore class using an IIFE - singleton. 
It should have a books and prices property.


*/

function Book(author = 'author', published = 'published') {
  this.author = author;
  this.published = published;
}

const Author = {
  name: 'name',
  books: 'books',
};

const Publisher = new (function (authors = 'a', books = 'b') {
  this.authors = authors;
  this.books = books;
})();

class Review {
  constructor(rating = 'rating', user = 'user') {
    this.rating = rating;
    this.user = user;
  }
}

const Bookstore = (function (books = 'one piece', prices = '499 YEN') {
  return {
    books: books,
    prices: prices,
  };
})();

console.log(Bookstore);
const a = [1, 2];
const b = a;
b.push(4);
console.log(a);

console.log([] instanceof Array);
console.log(new String('s') instanceof String);

//37 Single Occurrence
//return the single occurence character in its upper case form
//note that it's not case sensitive, so a === A
const singleOccurrence = str =>
  [...str.toUpperCase()].find(
    (v, i, thisarg) => thisarg.indexOf(v) === thisarg.lastIndexOf(v)
  ) || '';

//38 Encryption: (Recursion) - IMPORTANT
//spaceMessage("AB[3CD]") ➞ "ABCDCDCD"
//spaceMessage("AB[2[3CD]]") -> "ABCDCDCDCDCDCD"
/*
Message string will consist of capital letters, numbers, and brackets only.
When there's a block of code inside the brackets, such as [10AB], it means you need to repeat the letters AB for 10 times.
Message can be embedded in multiple layers of blocks.
Final decrypted message will only consist of capital letters.
*/

const spaceMessage = s =>
  !s.includes('[')
    ? s
    : spaceMessage(
        s.replace(/\[[\w]+\]/g, v => {
          v = v.slice(1, -1);
          return v
            .match(/[a-z]+/i)
            .join('')
            .repeat(v.replace(/[a-z]+/gi, ''));
        })
      );
console.log(spaceMessage('AB[2[3CD]]')); //ABCDCDCDCDCDCD
//As we do NOT know how deeply nested the [] is, we recurisvely run the operation
//of removing one [], and then pass that as an argument to the function
//and then test if it still includes [], if true, then we perform that operation again
//if not, then we return that string argument

//39)
//animals(2, 3, 5)
const animals = (c, cc, p, cow = c * 2, crow = cc * 4, pig = p * 4) =>
  cow + crow + pig;
console.log(animals(2, 3, 5));

//40 After N Months...

const afterNMonths = (y, m) =>
  y + Math.floor(m / 12) || (y ? 'month missing' : 'year missing');
console.log(afterNMonths(2222, 24));

//41 Return most optimized name

const mostOptimized = arr =>
  arr.reduce((a, c) => (c.optimized > (a.optimized || 0) ? c : a), {});

console.log(
  mostOptimized([
    { name: 'A', optimized: 5 },
    { name: 'B', optimized: 7 },
    { name: 'C', optimized: 1 },
    { name: 'D', optimized: 10 },
  ])
);

const isOne = arr => arr.reduce((a, c) => a + (c === 1), 0);
console.log(isOne([1, 2, 4, 5, 6, 1, 1]));

const f = count => {
  return [
    { n: 'a', score: 120 + count },
    { n: 'b', score: 50 + count * 3 },
    { n: 'c', score: 80 + count * 2 },
  ].reduce((arr, curr) => (curr.score > (arr.score || 0) ? curr : arr), {});
};
console.log(f(51));

//42) parameter is a name, if it's mubashir then replace it to my love if not then just return name
const greeting = n => `Hello, ${n.replace('Mubashir', 'my Love')}!`;

//43) Multiply HTML tags with given HTML tag and number
//secret("div*2") ➞ "<div></div><div></div>"
const secret = t => {
  const [tag, n] = t.split('*');
  return `<${tag}></${tag}>`.repeat(n);
};

console.log(secret('div*2'));
console.log(secret('h3*2'));

//44) Create a function that removes the last element of an array but does NOT mutate
//the argument array, so do not mutate the original array
const unmutatedArray = [1, 2, 3, 4, 5];
const notMutate = arr => arr.filter((_, i) => i !== arr.length - 1);
console.log(notMutate(unmutatedArray));
console.log(unmutatedArray);

//45) how many and who are online
function chatroomStatus(users) {
  return !users.length
    ? 'no one online'
    : users.length === 1
    ? `${users[0]} online`
    : users.length === 2
    ? `${users[0]} and ${users[1]} online`
    : `${users[0]}, ${users[1]}, and ${users.length - 2} more online`;
}
console.log(
  chatroomStatus([
    'pap_ier44',
    'townieBOY',
    'panda321',
    'motor_bike5',
    'sandwichmaker833',
    'violinist91',
  ])
);

//46) Memoization:
/*
Memoization - a programing technique to cache the result of expensive function computations
The function must be a pure function, so 1) no side effects (don't mutate things outside the function scope)
2) output depends on input, so if given the same input, then the output must always be the same
It's essentially caching the return value of a function
In React, we can use React.memo (cache the component if props and state do not update), 
useMemo (cache the returning value of a creator function), and useCallback (cache the callback itself)
with useMemo and useCallback, we can use the dependecy array and tell the hooks
to only re-run the function if the given items update, so the values that the callback depends on
With React.memo we can pass a second callback that receives the prevprops and nextprop
Caching components, callbacks, and objects can be useful because it could improve performance
and React does a shallow comparison and that causes unnecessary redners
due to referential equality, the internals of the obejct may not chagne but the heap memory address
so the pointer will change

Outside of react, we can create our own cache function using 
- High Order functions and Closures
HOF - functional programming: funtions are treated as first class citizens - so as any other value
this means that it can be 1) passed as arguments to other functions 2) assinged as values to variables
3) and returned from another function - e.g. function f(){return function(){return 'HI}}, f()()
Closures - closure is the combination of the lexical scope and how inner function has access to inner function's scope
the lexical scope is essentialy all the scopes that are created in a function
function lexical() {return function b() {return function c(){return 'over'}}} 
lexical()()() - contains 4 scopes, the global, scope of lexical, then scope of b and then c
- most inner function, so C has access to all 4 scopes and 'remembers' all variables

Using Closures, when a function is defined, it forms its own closure, when we pass another function(HOF)
that function runs some operation that is an expensive computation, like the factorial of a number example
The outer function defines an object called cache, const cache = {}, so outer has the cache object
and receives the another function as an argument
then it returns another annonymous function (HOF) and inner function receives some random parameter
that random parameter will later be passed in to the argument function that outer receives
we run a conditional statement to check if the cache object has a property with the name of 
argument of the inner function, if(cache[n]) {return cache[n]} if it does, then we return the value of that property
doing that we just return the value that is stored in the cache object and do NOT call the expensive function
and if cache[n] is NOT true, then we create a variable called result
and assign result to the expensive computation passing the argument from the inner function
const result = expensiveFunction(innerFunctionParameter), result is assigned the RETURNING VALUE not the function itself
and then we assign result to cache[n] cache[n] = result
and then we return result

So now everytime the outer function, const memoizeFactorial = memoize(factorialFunction),
like memoizeFactorial is called memoizeFactorial(1) then the cache object looks like 
cache[1] = factorialFunction(1), {1: 1} and has the return value stored and 
we do not need to make the expensive computation so dont need to call factorialFunction again
This is because memoizeFactorial has formed a CLOSURE, that has the pointer address to the cache object in the heap
and that will persist even after the function has been invoked

We can pass any function to memoize like, const memoizeSum = memoize(sumFunction)
memoizeSum(5) returns 15, cache[5] = sumFunction(5) => {5: 15}
*/

const memoize = fn => {
  const cache = {};
  return arg => {
    console.log(cache); //current cache object
    if (cache[arg]) {
      console.log(
        `Fetching result from the cache object with the proeprty ${arg}`
      );
      return cache[arg];
    }
    console.log(
      `Input is new so calculating the result of fn(arg) and store it in result and then cache object`
    );
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
};
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
const factorialCache = memoize(factorial);
console.log(factorialCache(5)); //new input...
console.log(factorialCache(5)); //fetching result...

//47)
/*
lonelyInteger([1,-1,2,-2,3]) ➞ 3
//3 has no matching negative appearance

lonelyInteger([-3,1,2,3,-1,-4,-2]) ➞ -4
//-4 has no matching positive appearance

lonelyInteger([-9,-105,-9,-9,-9,-9,105]) ➞ -9
*/

const lonelyInteger = nums =>
  nums[
    nums
      .map(n => n * (n > 0 ? -1 : 1))
      .findIndex(
        (n, _, thisarg) => thisarg.indexOf(n) === thisarg.lastIndexOf(n)
      )
  ];

const lonelyIntegers = nums =>
  nums.find(n => nums.filter(v => v === n * -1).length === 0);
console.log(lonelyIntegers([-3, 1, 2, 3, -1, -4, -2]));
console.log(lonelyIntegers([-9, -105, -9, -9, -9, -9, 105]));

const promise = n =>
  new Promise((resolve, reject) => {
    n > 0
      ? setTimeout(() => resolve('number is larger than 0'), 1000)
      : reject('invalid n');
  });

promise(1).then(value => value);

let countDwarves = function () {
  return 7;
};
let dwarves = countDwarves;

countDwarves = function () {
  return 'hi';
};

console.log(dwarves);

const age = [43, 86, 49, 86];

const ageDifference = ages => {
  const [s1, s2] = [...ages].sort((a, b) => b - a),
    diff = s1 - s2;
  return diff ? `${diff} year${diff > 1 ? 's' : ''}` : 'no age difference';
};

console.log(ageDifference([29, 1, 6, 8, 28]));

console.log(ageDifference(age));

console.log(age);

const sortWord = w =>
  [...w]
    .sort((a, b) => (/[A-Z]/.test(`${a}${b}`) ? 0 : a.localeCompare(b)))
    .join('');

console.log(sortWord('Unpredictable'));
//sortWord("Unpredictable") ➞ "Uabcdeeilnprt"

//48)
const filterStateNames = (arr, type) =>
  arr.filter(
    v => (type === 'abb' && v.length === 2) || (type === 'full' && v.length > 2)
  );
console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full'));

//49) Functional Programming - Currying Function
/*
a global object named carList, const carList = {}
a function that receives the car name and that function returns another function
with a n parameter that adds the car name property with the value of n

function toyotaCars("Toyota")
function hyundaiCars("Hyundai")

kiaCars(3)
kiaCars(4)
hyundaiCars(2)
hyundaiCars(1)

console.log(carList) // { Kia: 7, Hyundai: 3}
*/

const carList = {};

const carValues = car => n => (carList[car] = (carList[car] || 0) + n);
//outer function receives car name as argument, and that function returns another function
//that inner function receives parameter n and it returns an expression that evaluates
//to an object with the car name as the property and the value that adds the n

const kiaCars = carValues('Kia');
kiaCars(3);
kiaCars(4);
const bmw = carValues('Bmw');
bmw(2);
bmw(1);

console.log(carList);

//50) See the functions below and re-produce the same output
/*
secret("p.one.two.three") ➞ `<p class="one two three"></p>`

secret("p.one") ➞ `<p class="one"></p>`

secret("p.four.five") ➞ `<p class="four five"></p>`
*/
const secretTag = text => {
  const [tag, ...rest] = text.split('.');
  return `<${tag} class='${rest.join(' ')}'></${tag}>`;
};

console.log(secretTag('p.one.two.three'));

console.log(secretTag('p.one'));

//highestDigit(379) ➞ 9

const highestDigit = n => Math.max(...[...`${n}`]);
console.log(highestDigit(369));

//51) sort number given on 'asc' 'des'

const reorderDigits = (a, d) =>
  a.reduce(
    (a, c) =>
      a.concat(
        +[...`${c}`].sort((a, b) => (d === 'asc' ? +a - +b : +b - +a)).join('')
      ),
    []
  );
/*
reorderDigits([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]

reorderDigits([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]
*/

console.log(reorderDigits([515, 341, 98, 44, 211], 'asc'));

console.log(reorderDigits([515, 341, 98, 44, 211], 'desc'));

//52) search the index of the array using recurison, so no indexOf
const search = (a, item) =>
  !a.includes(item)
    ? -1
    : a.slice(-1)[0] === item
    ? a.length - 1
    : search(a.slice(0, -1), item);
//search([1, 2, 3, 4], 3) ➞ 2

console.log(search([1, 2, 3, 4], 3));
console.log(search([1, 3, 5, 7, 9], 11));

const strictEquals = (a, b) => {
  return typeof a == typeof b && a == b;
};

const strictEqual = (a, b) =>
  Number.isNaN(a || b)
    ? false
    : (a === -0 && b === 0) || (b === -0 && a === 0)
    ? true
    : Object.is(a, b);

let tree = {};
let stone = {};
let water = tree;

let president = { name: 'Pooh', next: null };
president.next = { name: 'Pa', next: president };

console.log(president.next.next.next.name);

console.log(Math.abs(-1));

const scaleTip = arr => {
  const index = arr.findIndex(v => /[a-z]/i.test(v));
  const leftVal = arr.slice(0, index).reduce((a, c) => a + c, 0);
  const rightVal = arr.slice(index + 1).reduce((a, c) => a + c, 0);
  return leftVal > rightVal
    ? 'left'
    : rightVal > leftVal
    ? 'right'
    : 'balanced';
};

console.log(scaleTip([1, 2, 3, 'G', 4, 5, 6]));
console.log(scaleTip([500, 0, 0, 'I', 32, 53, 12]));

//53) return the Nth smallest number in a given array, if n is bigger than array length, then return null
const nthSmallests = (arr, n) => arr.sort((a, b) => a - b)[n - 1] || null;
console.log(nthSmallests([1, 3, 5, 7], 5));

//54) determine if parameter is an integer or string
const intOrString = p => (+p ? 'int' : 'str');
//+'somestring' converts the string to NaN which is falsy to 'str' return
//+12 returns 12 so as is
console.log(intOrString('hi'));
console.log(intOrString(121));
console.log(+'hi'); //NaN
console.log(Math.ceil(20.5));

const asciiCapitalize = s =>
  [...s]
    .map(char =>
      char.charCodeAt() % 2 === 0 ? char['toUpperCase']() : char.toLowerCase()
    )
    .join('');
console.log(asciiCapitalize('to be or not to be!'));

//55) Ones, Threes and Nines (Version #1)
/*
let n1 = new OnesThreesNines(5)
n1.nines ➞ 0

n1.ones ➞ 5

n1.threes ➞ 1
*/
class OnesThreesNines {
  constructor(num) {
    this.num = num;
  }
  get ones() {
    return Math.floor(this.num / 1);
  }
  get threes() {
    return Math.floor(this.num / 3);
  }
  get nines() {
    return Math.floor(this.num / 9);
  }
}

const dataProfile = [
  ['name', 'yuta'],
  ['age', 25],
];

const profile = dataProfile.reduce((a, [key, value]) => {
  a[key] = value;
  return a;
}, {});

console.log(profile);
//{age: 25, name: 'yuta'}

//56) Determine if a or b are 10 or a + b are 10

const isTen = (a, b) => a == 10 || b == 10 || a + b == 10;

//better answer

const isTens = (a, b) => [a, b, a + b].includes(10);

//57) determine the data type of the fifth element in the index

const fifth = (...rest) =>
  rest.length >= 5 ? typeof rest[4] : 'Not enough arguments';
console.log(fifth(1, 2, 3, 'e', 'haha'));

console.log(fifth(1, 2, 3, 'e'));

const findLargestNums = arr => arr.map(nums => nums.sort((a, b) => b - a)[0]);
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);

//58) use and for of loop and reduce function to return a concatenated string value
//of the values of the every object property

const namecollection = [
  {
    name: 'Y',
  },
  {
    name: 'U',
  },
  {
    name: 'T',
  },
  {
    name: 'A',
  },
];

const forOfLoop = arr => {
  let s = '';
  for (let { name } of arr) {
    s += name;
  }
  return s;
};

console.log(forOfLoop(namecollection));

const doitwithreduce = arr => arr.reduce((a, { name }) => (a += name), '');

console.log(doitwithreduce(namecollection));

//60 convert an object to an array with each array element having 2 values, with first being the property
//and second being the value
//use the reduce method as welll as object.entries

const objectToArray = obj =>
  Object.keys(obj).reduce((arr, key) => {
    return [...arr, [key, obj[key]]];
  }, []);

const objectToArrays = obj => Object.entries(obj);
/*
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]
*/

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
);
console.log(
  objectToArrays({
    D: 1,
    B: 2,
    C: 3,
  })
);

const itemCollections = { piano: 300, tv: 100, skate: 50 };
const itemName = 'skate';

//61) remove the itemname key-value pair from the object
//use the reduce function
const removeEntry = (obj, item) =>
  Object.keys(obj).reduce((accumObj, key) => {
    if (key !== item) {
      accumObj[key] = obj[key];
    }
    return accumObj;
  }, {});
console.log(removeEntry(itemCollections, itemName));
console.log(itemCollections);
//{ piano: 300, tv: 100, skate:50 }, skate ➞ { piano: 300, tv: 100 }

//62) check if 2 objects are equal in their values

const isObjEqual = (obj1, obj2) => {
  const arr1 = Object.entries(obj1);
  const arr2 = Object.entries(obj2);
  return arr1.every(([key, value], index) => {
    let [key2, value2] = arr2[index];
    return key === key2 && value === value2;
  });
};

const isObjEquals = (obj1, obj2) =>
  JSON.stringify(obj1).replace(/\s/g, '') ===
  JSON.stringify(obj2).replace(/\s/g, '');

console.log(
  isObjEqual(
    { name: 'Yuta', age: 25, goal: 'peace' },
    { name: 'Yuta', age: 25, goal: 'peace' }
  )
);

console.log(
  isObjEquals(
    { name: 'Yuta', age: 25, goal: 'peace' },
    { name: 'Yuta', age: 25, goal: 'peace' }
  )
);

//63) An object with key value pairs of a profile of a person
//return the oldest person's name
const oldestPerson = people =>
  Object.entries(people).sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  )[0][0];

/*
oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
}) ➞ "Emma"
*/
console.log(
  oldestPerson({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29,
  })
);

//64) check if perosn is missing or not, if in object then missing if not then return here

const findIt = (missing, name) =>
  `${name[0].toUpperCase() + name.slice(1).toLowerCase()} ${
    Object.keys(missing).includes(name.toLowerCase())
      ? 'is gone...'
      : 'is here!'
  }`;
/*
findIt({
  tv: 30,
  stereo: 50,
}, "rocky")
---> Rocky is here
*/
console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    'rocky'
  )
);

//65 - Object destructuring - default parameter

const defaultParameter = ({ size = 'BIG' } = {}) => size;

const defaultParameters = (state = { name: 'Y' }) => state.name;

console.log(defaultParameter());

console.log(defaultParameters());

const signAlls = (obj, name) =>
  Object.keys(obj).reduce((finalObj, mainKey) => {
    if (typeof obj[mainKey] === 'object') {
      finalObj[mainKey] = { ...obj[mainKey], signature: name };
      return finalObj;
    } else {
      finalObj[mainKey] = name;
      return finalObj;
    }
  }, {});

const collectionobj = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: '',
  },
  bathroom: {
    stereo: 220,
    signature: '',
  },
  signature: '',
};

console.log(signAlls(collectionobj, 'Rocky'));

//66) Upload Count
const uploadCount = (date, month) =>
  (date.join('').match(RegExp(month, 'g')) || []).length;

const uploadCounts = (date, month) =>
  date.reduce((a, c) => a + RegExp(month).test(c), 0);

console.log(uploadCount(['Sept 22', 'Sept 21', 'Oct 15'], 'Sept'));

console.log(uploadCounts(['Sept 22', 'Sept 21', 'Oct 15'], 'Sept'));

//67) IMPORTANT - Recurison - return the HIGHEST NUMBER in an array using recursion

const isHighest = nums => {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums[0] > nums[nums.length - 1]) {
    return isHighest(num.slice(0, -1));
  }
  return isHighest(nums.slice(1));
};

//We check if first number index against last number index and if first is greater then we remove the last
//if last is greater than we remove first, and we recursively call the function until
//only one element is left, which is the highest number nums[0]

//68) Composition + IIEF - a magic function
const strLength = (s = '') => s.length;
const trim = (s = '') => s.trim();
const replace = (word, replacee, replacer) => word.replace(replacee, replacer);
const slice = (arr, start, end) => arr.slice(start, end);
const magic = ((arg = '', x = '', y = '') => {
  return {
    length(arg) {
      return strLength(arg);
    },
    replace(arg = '', x = '', y = '') {
      return replace(arg, x, y);
    },
    slice(arg = '', x = '', y = '') {
      return slice(arg, x, y);
    },
    trim(arg) {
      return trim(arg);
    },
  };
})();
/*
Test.assertEquals(magic.trim("  javascript is awesome  "), "javascript is awesome");
Test.assertEquals(magic.length("hello word"), 10);
Test.assertEquals(magic.slice([1, 2, 3, 4, 5], 2, 4)[0], 3);
Test.assertEquals(magic.slice([1, 2, 3, 4, 5], 2, 4)[1], 4);
Test.assertEquals(magic.replace("azerty", "a","A"), "Azerty");
*/

const intersectionUnion = (a1, a2) => {
  const unique = (n, i, thisarg) => thisarg.indexOf(n) === i;
  const i = a1
    .filter(n => a2.includes(n))
    .filter(unique)
    .sort();
  const u = [...a1, ...a2].sort().filter(unique);
  return [i, u];
};

console.log(intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]));
console.log(intersectionUnion([1, 2, 3], [4, 5, 6]));

/*
intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]) ➞ [[4], [1, 2, 3, 4, 5, 9]]

intersectionUnion([1, 2, 3], [4, 5, 6]) ➞ [[], [1, 2, 3, 4, 5, 6]]

intersectionUnion([1, 1], [1, 1, 1, 1]) ➞ [[1], [1]]
*/
//69)
//third argument s may not be given, so assign default parameter in such case
const makeRugs = (m, n, s = '#') =>
  Array.from({ length: m }, _ => Array.from({ length: n }, _ => s).join(''));

const isunique = {
  a: 'moron',
  b: 'scumbag',
  c: 'moron',
  d: 'idiot',
  e: 'idiot',
};

//70) Count Number of Occurences:
const countNumberOfOccurrences = obj =>
  Object.fromEntries(
    Object.values(obj)
      .filter((v, i, thisarg) => thisarg.indexOf(v) === i)
      .map(key => [key, Object.values(obj).filter(v => v === key).length])
  );

console.log(
  countNumberOfOccurrences({
    a: 'moron',
    b: 'scumbag',
    c: 'moron',
    d: 'idiot',
    e: 'idiot',
  })
);

//71) Expensive Orders

const expensiveProducts = { a: 3000, b: 200, c: 1050 };
const expensiveOrders = (o, c) =>
  Object.fromEntries(Object.entries(o).filter(([k, v]) => v > c));
console.log(expensiveOrders(expensiveProducts, 1000));
console.log(expensiveProducts);

//72) Construct and Deconstruct

const constructDeconstruct = s =>
  Array.from({ length: s.length * 2 - 1 }, (_, i) => {
    if (s.length > i) {
      return s.slice(0, i + 1);
    }
    return s.slice(0, -i + s.length - 1);
  });

console.log(constructDeconstruct('edabit'));

const billSplit = (spice, cost) => {
  const comb = spice.map((v, i) => [v, cost[i]]);
  return [
    comb.reduce((a, [s, c]) => {
      return s === 'S' ? a + c : a + c / 2;
    }, 0),
    comb.reduce((a, [s, c]) => {
      console.log([s, c]);
      return s === 'N' ? a + c / 2 : a + 0;
    }, 0),
  ];
};

//billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) ➞ [41, 9]
console.log(billSplit(['S', 'N', 'S', 'S'], [13, 18, 15, 4]));
console.log(billSplit(['N', 'N'], [10, 10]));

//73) Return last charcater of a string
/*
firstPlace("====b===O===e===U=A==") ➞ "A"

firstPlace("e==B=Fe") ➞ "e"

firstPlace("proeNeoOJGnfl") ➞ "l"
*/
const firstPlace = road => {
  road = [...road].reverse().join('');
  return road[road.search(/\w/)] || 'No car available';
};
console.log(firstPlace('====b===O===e===U=A=='));

const lastItem = (arg = '') => [...arg].join('').slice(-1) || undefined;

console.log(lastItem(''));

//74 Aging Population
const population = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};
//the below does NOT mutate the original object as it returns a new array and then converts back to an object
const afterNYears = (names, n) =>
  Object.fromEntries(
    Object.entries(names).map(([key, value]) => [key, value + n])
  );

console.log(afterNYears(population, 5));
console.log(afterNYears(population, -5));
console.log(population);

const mostExpensiveItem = obj =>
  Object.entries(obj).sort(
    ([key, value], [keys, values]) => values - value
  )[0][0];

console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
  })
);

//75 String Pairs
/*
stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]

stringPairs("edabit") ➞ ["ed", "ab", "it"]

stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]
*/

const stringPairs = s => `${s}*`.match(/.{2}/g) || [];
//or, just match any 2 characters with /../ and not specify the range with {2}
const stringPairs = s => `${s}*`.match(/../g) || [];

//writing it like below is NOT necessary
const stringPairs = str => (str + (str.length % 2 ? '*' : '')).match(/../g) || []
//Reason - the match function's regex matches any character that is 2 characters long, so by adding * to an even length string, it makes the * an odd charcater and not matched by the function
