//1)return a string of numbers that converts from the alphabet to number
//alphabetIndex("Wow, does that work?")
const obj = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26};
const alph = 'abcdefghijklmnopqrstuvwxyz'
const alphabetIndex = str => {
  return str.replace(/[^a-z]/gi, '').split('').map(v => obj[v.toLowerCase()]).join(' ')
}
const alphindex = (str, s = str.toLowerCase()) => s.replace(/[^a-z]/gi, '').split('').map(v => alph.indexOf(v) + 1).join(' ')

console.log(alphabetIndex('Wednesday is hump day, but has anyone asked the camel if he’s happy about it?'))
console.log(alphindex('Wednesday is hump day, but has anyone asked the camel if he’s happy about it?'))
//2) add the total of negative numbers
const negativeSum = s => s.match(/\-\d{1,}/g).map(Number).reduce((a,c)=>a+c)

//3)Sorting: Sort it to the correct order
//letters = ["e", "t", "s", "t"]
//positions = [1, 3, 2, 0]
//test
const wordBuilder = (l, p) => {
	const obj = p.reduce((accum,curr,index) => {
      accum[curr] = l[index];
      return accum;
    }, {});
  return Array.from({length:l.length}, (_,i) => i).map(v => obj[v]).join('')
}
console.log(wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]))
//even better way of doing it
const wordBuilders = (letters, positions, length = letters.length) => {
	return Array.from({length}, (_,i) => letters[positions.indexOf(i)]).join('')
}
console.log(wordBuilders(["e", "t", "s", "t"], [1, 3, 2, 0]))
//4) Add the total of the factorials of a numbers array

const recurse = n => n === 0 ? 1 : n * recurse(n - 1)
console.log(recurse(2))
const evalFactorial = s => s.toString().match(/\d+/g).map(v => recurse(+v)).reduce((a,c) => a + c)

//more efficient way of doing it:
const evalFactorials = a => a.reduce((a,c) => a + recurse(parseInt(c)), 0)
console.log(evalFactorial(["5!", "4!", "2!"]))
console.log(evalFactorials(["5!", "4!", "2!"]))


class IceCream {
	constructor(flavor, numSprinkles) {
		this.flavor = flavor
		this.numSprinkles = numSprinkles
	}
}
console.log( new IceCream('Choco', 10).flavor)

function Person(name) {
  this.name = name;
}

const person1 = new Person('y');
console.log(person1.__proto__ === Person.prototype)
const person2 = Object.create(Person)
console.log(person2)

//5) String reverse: if argument is 'word', string order is maintained but each word is revese
//if argument is 'sentence', then word is reversed
const flip = (str, spec) => {
  const obj = {
    word() {
			return str.split(' ').map(v => [...v].reverse().join('')).join(' ')
    },
    sentence(){
      return str.split(' ').reverse().join(' ');
    }
  }
  return obj[spec]();
}

//6) return how many adverbs a sentence has
const countAdverbs = s => s.split(' ').filter(v => v.endsWith('ly,') || v.endsWith('ly') || v.endsWith('ly.')).length
const countAdverbss = s => (s.match(/\w+ly/g) || []).length// this is NOT perfetc with some cases

//7) Destructuring 
//You're given the object below: destructure them sucessfully
const game = {
  first: "yuta",
  second: 'yurina',
  games: {
    first: 'Sword',
    second: 'Shield'
  }
}
const destructuring = ({first, second, games: {first: sword, second: shield}}) => {
  return `I ${first} and ${second} believe that ${sword} and ${shield} are good games`
}
console.log(destructuring(game))

//8) Regex: replace multiple ! and ? with just one ! and ?, only at the end not mid sentence
const noYelling = s => s.replace(/[?!]+$/g, v => v.includes('?') ? '?' : '!')
const noYellings = s => s.replace(/([?!])+$/g, `$1`)
console.log(noYelling('I just!!! can!!! not!!! believe!!! it!!!'))
console.log(noYellings('I just!!! can!!! not!!! believe!!! it!!!'))

//9) Regex: you're given a string and a range as arguments, replace the given range letters with #
const replace = (s,r) => {
	let regex = new RegExp(`[${r}]`, 'g');
	return s.replace(regex, '#')
}
console.log(replace("abcdef", "c-e"))


//10) Sum of digits in between that are in rage, if 17,20, then the range is 17-20
//and sum needs to be 1+7+1+8+1+9+2+0
const sumDigits = (start, end) => {
  return Array.from({length: (end-start+1)}, (_,i) => start + i).reduce((a,c) => a + [...`${c}`].reduce((a,c) => a + +c, 0), 0)
}
console.log(sumDigits(17,20))

//11) RegEx: character classes, return a sentence of best followed by a b word
//best buy and best buddy and best thing => [best buy, best buddy]
const boundary = s => {
const REGEXP = /\bbest\b\sb\w+/g
  return s.match(REGEXP);
}
console.log(boundary('best buy and best buddy and best thing'))
//["best buy", "best buddy"]

//12) happy face: repalce the sad faces :( x( 8( ;( with their happy faces counter
const makeHappy = str => {
	const obj = {
		':(': ':)',
		'8(': '8)',
		'x(': 'x)',
		';(': ';)'
	}
	return str.replace(/(\:\(|8\(|x\(|;\()/g, v => obj[v])
}

//more efficient solution:
const makeHappys = s => {
  return s.replace(/([:8;x])\(/g, '$1)')
}
//
console.log(makeHappys('I am not very happy ;('))

//13) detect smiley faces

const countSmileys = arr => {
	return (arr.join(' ').match((/[:;][-~]?[)D]/g)) || []).length
}

const countSmileyss = arr => {
  return arr.filter(v => /[:;][-~]?[D\)]/g.test(v)).length
}
console.log(countSmileyss([':-)',';~D',':-D',':_D']))
console.log(countSmileys([";(", ":>", ":}", ":]"]))

//14) You're given a string and an array of index, remix the string in the order of the array index
//remix("abcd", [0, 3, 1, 2]) ➞ "acdb"

const remix = (str, arr) => {
  const obj = arr.reduce((a,c,i) => {
    a[c] = str[i];
    return a;
  }, {})
  return arr.sort((a,b) => a - b).map(v => obj[v]).join('')
}
console.log(remix("abcd", [0, 3, 1, 2]))

//one solution is to construct an object where each number is the key of the string in that index
//and then sort to make sure array is [0,1,2,3] and call the object accordingly

//with for...loop: ("abcd", [0, 3, 1, 2]) ➞ "acdb"

const remixx = (str, arr) => {
  const final = [];
  for(let i = 0; i < arr.length; i++) {
    final[arr[i]] = str[i];
    //[][0] = 'abcd'[0]
    //['a'][3] = 'abcd'[1] => ['a', undefined, undefined, 'b']
    //['a', undefined, undefined, 'b'][1] = 'abcd'[2]
    //['a','c', undefined, 'b'][2] = 'abcd'[3] => ['a','c', 'd', 'b'][2]
  }
  return final.join('')
}

console.log(remixx("abcd", [0, 3, 1, 2]))

const remixxx = (str, arr) => {
	return arr.reduce((a,c,i) => {
		a[c] = str[i];
		return a;
	}, []).join('')
}
console.log(remixxx("abcd", [0, 3, 1, 2]))
//what we can do with a for loop can be done with a forEach as well
const remixxxx = (str, arr) => {
  const final = [];
  arr.forEach((v,i) => {
    final[v] = str[i]
  })
  return final.join('')
}

console.log(remixxxx("abcd", [0, 3, 1, 2]))

//last: we could do it with map and indexof too
const remixxxxx = (str, arr) => arr.map((_,i) => str[arr.indexOf(i)]).join('')
console.log(remixxxxx("abcd", [0, 3, 1, 2]))

//15) IMPORTANT: push, pop, unshift, shift, combining with for...loop
//shift everything to left, so [1,2,3,4,5],1 we need to shift one time to left
//[1,2,3,4,5] pushing one time to left is => [2,3,4,5,1]
const a = [1,2,3,4,5]
a.push(a.shift())
console.log(a)
//[1,2,3,4,5] pushing two times to left is => [3,4,5,1,2]
const b = [1,2,3,4,5]
b.push(b.shift())
b.push(b.shift())
console.log(b)

//shift everything to right, so [1,2,3,4,5] one time to right is => [5,1,2,3,4]
const c = [1,2,3,4,5];
c.unshift(c.pop())
console.log(c)
//shifting 2 times to right is: [1,2,3,4,5] => [4,5,1,2,3]
const d = [1,2,3,4,5];
d.unshift(d.pop())
d.unshift(d.pop())
console.log(d);

//now let's do it with a function with random arguments
function leftShift(arr, num) {
	num = num % arr.length;//if num is 3, then 3%5 is still 3
	//but if num is 5, then 5%5 is 0, which is good
	//since we don't need to loop it since
	//shifting 5 times to the right is the original array
	//if num is 6, then 6%5, is 1, again as 5 is original
	//1(6%5) is pushing one time to left
	for(let i = 0; i < num; i++) {
		arr.push(arr.shift())
	}
	return arr;
}
//[1,2,3,4,5],1 ---> [2,3,4,5,1]

function rightShift(arr, num) {
	num = num % arr.length;
	for(let i = 0; i < num; i++) {
		arr.unshift(arr.pop())
	}
	return arr
}
//[1,2,3,4,5],1 ---> [5,1,2,3,4]

//16) Destruct and constuct: 'hi' -> ['h','hi','h']
//Two main ways of doing it: 
//First, we run it through a Array.from + slice
const constructDestruct = (str, x = str.length) => {
  return Array.from({length: x * 2 - 1}, (_,i) => x > i ? str.slice(0, i + 1) : str.slice(0, x - i - 1))
}
console.log(constructDestruct('hello'))
//["h", "he", "hel", "hell", "hello", "hell", "hel", "he", "h"]
//first we consturct an array with the string.length * 2 - 1, so in 'hello' it's 9 which makes sense
//we write a ternary condition that checks if x(string's length) is bigger than the index
//so in 'hello' if 5 is bigger than index then we run a certain condition, so it's 5 > 4 is the last true part
//then we slice the string argument, with str.slice(0,i+1), for the first element it's 0,0+1, 
//which gets us the first letter. Then we run that up to index 4, which gets us all the way to hello
//now the tricky part: we now need to revert from 'hello' to 'hell' to 'hel' etc.
//'hello'.slice(0,-1) is 'hell' and 'hello'.slice(0,-2) is 'hel'
//so, x is 5 and i is 5, so 5 -5 -1 is -1, which gets us slice(0,-1) => 'hell'
//x is still 5, and now is 6, so 5 -6 -1 gets us slice(0, -2) => 'hel'

//let's do it with map()
const constructDestructs = (str, x = str.length) => {
  const arr = [...str].map((_,i) => str.slice(0,i+1));
  return [...arr, ...arr.slice(0,-1).reverse()];
}
//we just run a map method, and do the same slice method, and then just concatenate the array we created
//but as arr always includes 'hello', for the reversed one, we don't need to 'hello'
//so we run slice.(0,-1) and remove 'hello' and then reverse it, then the concatenated array is our answer
console.log(constructDestructs('hello'))

//17) Digit distance:
//The digit distance between two numbers is the absolute value of the difference of each digit.
// 123,354, -> |1-3| + |2-5| + |3-4| = 6
//using reduce()
const digitDistance = (n1,n2) => {
	return [...`${n1}`].reduce((a,c,i) => a + Math.abs(+c - +String(n2)[i]), 0)
}

//using for loop
const digitDistances = (n1,n2) => {
	const final = [];
	for(let i = 0; i < String(n1).length; i++) {
		final.push(Math.abs(+String(n1)[i] - +String(n2)[i]))
	}
	return final.reduce((a,c) => a +c)
}

//using for in
const digitDistancess = (n1,n2) => {
  n1 = [...`${n1}`];
  n2 = [...`${n2}`];
  final = 0;
  for(key in n1) {
    final += Math.abs(+n1[key] - +n2[key])
  }
  return final
}
console.log(digitDistance(121, 599))

//Round to the nearest:
const nearest = (num, nearest = 1) => Math.round(num / nearest) * nearest;
console.log(nearest(36))
console.log(nearest(17,10))

//Validate legitimate canadian postal code: Below is for every valid code
/*
A1A 1A1 
A1A-1A1
A1A1B1
*/

const validatePostcalCode = str => /^[A-Z]\d[A-Z][ -]?\d[A-Z]\d$/i.test(str);
console.log(validatePostcalCode("M3M 0A9"))//true

//18) you're given an array and a one letter/number argument
//return an array of index of that second argument in the first given array
//if[1,2,3,4,4,5],4 => [3,4]
//for loop
const getIndices = (arr,el) => {
	const a = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === el) {
			a.push(i)
		} else {
			continue;
		}
	}
	return a
}
//forEach loop
const getIndicess = (arr,el) => {
	const a = [];
	arr.forEach((v,i) => {
		if(v === el) {
			a.push(i)
		}
	})
	return a;
}
//we could do with reduce as well
const getIndicesss = (arr, x) => {
	return arr.reduce((a,c,i) => c === x ? a.concat(i) : a, [])
}
console.log(getIndices(["a", "a", "b", "a", "b", "a"], "a"))

console.log(getIndicess(["a", "a", "b", "a", "b", "a"], "a"))

console.log(getIndicesss(["a", "a", "b", "a", "b", "a"], "a"))

//18) advanced template literal trick:
//'hello' he...he...hello
const stutter = w => `${`${w.slice(0,2)}...`.repeat(2)}${w}?`
const sutters = (w, x = w.slice(0,2)) => `${x}... ${x}... ${w}?`
console.log(stutter('hello'))
console.log(sutters('hello'))

//19) remove first and last letter, but if string length is smaller than 2, then return as is
const removeFirstLast = s => s.slice(1,-1) || s
//above is pretty clever
console.log(removeFirstLast('hi'))
console.log(removeFirstLast('hello'))

//20) accumulating array [1,2,3,4] => [1,3,6,10]
const accumulatingArray = arr => arr.reduce((a,c,i,arr) => a.concat(arr.slice(0,i).reduce((a,c) => a+c,0) + c), [])
console.log(accumulatingArray([1,2,3,4]))

const accumulatingArrays = a => {
  let final = 0;
  return a.map(v => final+=v)
}

console.log(accumulatingArrays([1,2,3,4]))
//21) shhh("HI THERE!") ➞ "'Hi there!', whispered Edabit."
//
const shhh = s => `"${s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()}", whispered Edabit.`
console.log(shhh('HI THERE!'))
console.log(shhh(''))

//22) 
/*
getBirthdayCake("Jack", 10) ➞ [
  "##############################",
  "# 10 Happy Birthday Jack! 10 #",
  "##############################"
]
*/
const getBirthdayCake = (name, age) => {
	let symbol = age % 2 ? '*' : '#';
	let text = `${symbol} ${age} Happy Birthday ${name}! ${age} ${symbol}`;
	let x = symbol.repeat(text.length);
	return [x, text, x];
}
//23)sumOfNthNumber => [1,2,3,4,5], 2 => 2 + 4 = 6
const sumOfNthNumber = (arr, num) => {
  let n = 0;
  for(let i = num; i <= arr.length; i+=num) {
    n += arr[i - 1];
  }
  return n;
}
console.log(sumOfNthNumber([1,2,3,4,5], 2))

const sumOfNthNumbers = (arr, num) => arr.reduce((a,c,i) => !((i+1) % num) ? a + c : a, 0)

console.log(sumOfNthNumbers([1,2,3,4,5], 2))
//sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4) ➞ 14

//24) you're given a number, get the difference of that maximum possible return and minimum possible number
const rearrangedDifference = num => {
  return +[...`${num}`].sort((a,b) => b - a).join('') - +[...`${num}`].sort((a,b) => a - b).join('')
}
console.log(rearrangedDifference(972882))
// 988722 - 227889 = 760833

//25) convert from year to century
const centuryFromYear = n => Math.ceil(n/100)
console.log(centuryFromYear(2020))


//26)you're given a range from start to end, create a numbers array from that range
//and then check which numbers are evenly divisble by the given divisor argument
//and then add that into a total
//[1,2,3,4,5,6], 2 => [2,4,6] => 12
const evenlyDivisible = (start,end,divisor) => {
	const reducer = arr => arr.reduce((total, current) => total + current, 0);
	return reducer(Array.from({length: end - start + 1}, ((_, i) => start + i)).filter(v => v % divisor === 0))
}

//27) BigInt: You're given a random number, and have to square it, so Math.pow(2,n)
//and find how many 666 are in that integer, and return certain phrases depending on how many
const intObj = {0: 'Safe', 1: 'Single', 2: 'Double', 3: 'Triple'}
const isApocalyptic = n => intObj[(`${BigInt(Math.pow(2, n))}`.match(/666/g)|| []).length]
//you could solve it like this too:
const isApocalyptics = n => ['Safe', 'Single', 'Double', 'Triple'][(`${BigInt(Math.pow(2, n))}`.match(/666/g)|| []).length]

console.log(isApocalyptic(931))
console.log(isApocalyptics(931))

console.log(BigInt(Math.pow(2,100)))


//28) check for Palindromes:
//you're given a range from start to end, and check how many numbers are Palindromes
const countPalindromes = (start, end) => {
	const filter = arr => arr.filter(v => +[...`${v}`].reverse().join('') === v).length
	return filter(Array.from({length: end - start + 1}, (_,i) => start + i))
}
console.log(countPalindromes(8,34))//5
//we can do it like below as well
const countPalindromess = (start, end) => {
	const isPali = n => String(n) === [...String(n)].reverse().join('')
	let count = 0;
	for(let i = start; i <= end; i++) {
		if(isPali(i)) {
			count++;
		} else {
			continue;
		}
	}
	return count;
}


//29) Anti-Divisors of a Number
const isKaprekar = n => {
	const squared = String(Math.pow(n,2));
	const half = squared.length % 2 ? ((squared.length+1) / 2) - 1 : squared.length / 2;
	return +squared.slice(0, half) + +squared.slice(half) === n
}
console.log(isKaprekar(297))//true
//the above code works, but don't complicate it:
//in half, you tried to find the number in the middle, but that isn't needed
console.log('88209'.slice(0, 5/2))//88
console.log('88209'.slice(5/2))//88


const isKaprekars = n => {
  const squared = String(Math.pow(n, 2));
  const num = squared.length / 2;
  return +squared.slice(0, num) + +squared.slice(num) === n
}
console.log(isKaprekars(297))//true

const isKaprekarss = (n, sqr = String(n**2), num = sqr.length/2) => +sqr.slice(0,num) + +sqr.slice(num) === n
console.log(isKaprekarss(297))//true

//30) convert DNA to RNA
//A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.
const converter = {
	'A'() {return 'U'},
	'T'() {return 'A'},
	'G'() {return 'C'},
	'C'() {return 'G'}
}
const dnaToRna = dna => dna.replace(/[ATGC]/g, v => converter[v]())
//different way of doing it:
const converters = {
	'A':'U',
	'T':'A',
	'G':'C',
	'C':'G'
}
const dnaToRnas = dna => [...dna].map(v => converters[v]).join('')
const dnatorna = dna => [...dna].reduce((a,c) => a + converters[c], '')
console.log(dnaToRnas('ATTAGCGCGATATACGCGTAC'))
console.log(dnatorna('ATTAGCGCGATATACGCGTAC'))


//31) sort by string length from small to long
const sortByLength = arr => arr.sort((a,b) => a.length - b.length)
const sortbylengh = arr => arr.sort((a,b) => b.length - a.length)
console.log(sortByLength(["a", "ccc", "dddd", "bb"])) //small to long
console.log(sortbylengh(["a", "ccc", "dddd", "bb"])) //long to small


//32) 2 arguments, a string and a number, repeat the last character a number of times
//'hello',4 -> 'helloooo'
const modifyLast = (s,n) => s.slice(0, -1) + s.slice(-1).repeat(n)

//we don't slice twice and just once and just substract n by one
const modifyLasts = (s,n) => `${s}${s.slice(-1).repeat(n - 1)}`

//here we match the last character with /.$/ regex, and then repeat that letter n times
const modifyLastss = (s,n) => s.replace(/.$/, v => v.repeat(n))
console.log(modifyLast('hey', 6))
console.log(modifyLasts('hey', 6))
console.log(modifyLastss('hey', 6))

//33) You're given an number of arrays, and a number parameter, 
//return the sum of index for those numbers that match the n
const sumFoundIndexes = (arr,n) => arr.reduce((a,c,i) => a + (c===n ? i : 0), 0)
console.log(sumFoundIndexes([2, 1, 7, 6, 3, 10, 6, 1, 3, 9, 1, 9, 3, 3, 9, 10, 4, 6, 3, 2, 5, 3, 0, 1, 0, 1, 9, 4, 8, 0, 5], 2))

//34) check if a**2+b**2 = c**2 is true, c will always be the biggest number
//you will be given 3 numbers
const isTriplet = (n1,n2,n3, sorted = [n1,n2,n3].sort((a,b) => a-b)) => sorted[0]**2+sorted[1]**2 === sorted[2]**2
console.log(isTriplet(13, 5, 12))
//clearer syntax:
const isTriplets = (n1,n2,n3) => {
  const [a,b,c] = [n1,n2,n3].sort((a,b) => a - b)
  return a**2 + b**2 === c **2
}
console.log(isTriplets(13, 5, 12))
//35) You're given a matrix, so [[1,2],[3,4],[5,6,8]] => 1 + 4 + 8
const trace = arr => arr.reduce((a,c,i) => a + c[i], 0) 
console.log(trace([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))//15

//36) There are 3 different types of triangles: see below for definition
/*
No sides equal: "scalene"
Two sides equal: "isosceles"
All sides equal: "equilateral"
Less or more than 3 sides given: "not a triangle"
*/
const triangle = {1: 'equilateral', 2: 'isosceles', 3: 'scalene'}
const getTriangleType = arr => arr.length === 3 ? triangle[new Set(arr).size] : 'not a triangle'
console.log(getTriangleType([4, 4, 1]))
//we can use an array instead of an object
const getTriangleTypes = arr => arr.length === 3 ? [,'equilateral', 'isosceles', 'scalene'][new Set(arr).size] : 'not a triangle'
//slightly different than above by without making the length 4, but 3 and substracting the Set.size by one
const getTriangleTypess = arr => arr.length === 3 ? ['equilateral', 'isosceles', 'scalene'][new Set(arr).size - 1] : 'not a triangle'

//37) Collatz Conjecture
//you start with a given number n, like 3, and if n is even then divide it by 2
//if n is odd, then multiply by 3 and add 1, and repeat that until that number becomes 1
//then you have an array like =[3,10,5,16,8,4,2,1] => return 16

const collatz = n => {
  const arr = [];
  arr.push(n);
  while(arr[arr.length - 1] !== 1) {
    arr[arr.length - 1] % 2 ? arr.push(arr[arr.length - 1] * 3 + 1) : arr.push(arr[arr.length - 1] / 2)
  }
  return Math.max(...arr)
}
console.log(collatz(3))//16

//38) eval: evalutes a problem like 1+1, 1*1, but not 3=3, it needs to be 3===3
const isTrue = x => x.includes('=') ? eval(x.replace('=', '===')) : eval(x)
//this works but could make it shorter
const isTrues = x => eval(x.replace('=', '==='))
console.log(isTrue('3=3'))

//39) Return the largest even number, and if there are no even numbers then return -1
const largestEven = n => {
	const even = n.filter(v => v % 2 === 0);
	return even.length > 0 ? Math.max(...even) : -1
}
//an empty array is returned for even when there are no even numbers
//and passing [] to Math.max() returns Infinity hence we check that at the end

const largesteven = n => Math.max(...n.filter(v => v % 2 === 0), -1)
//above is shorter and smart way to return -1 if you get -Infinity
console.log(largesteven([1,3,5,7,9]))

//40) check if good match, if array total elements are odd then return 'bad match'
//if even, return an array with a total of a pair, so [1,2,3,4] => [3, 7]
const isGoodMatch = arr => {
	if(arr.length % 2) {
		return 'bad match'
	}
	const a = [];
	for(let i = 0; i < arr.length; i+=2) {
		a.push(arr.slice(i, i + 2))
	}
	return a.map(v => v.reduce((a,c) => a + c, 0))
}
//more efficient solution
const isGoodMatchs = arr => {
  if(arr.length % 2) {
    return 'bad match';
  }
  const a = [];
  for(let i = 0; i < arr.length; i+=2) {
    a.push(arr[i] + arr[i+1])
  }
  return a
}

//even shorter code 
const isGoodMatches = arr => {
  if(arr.length % 2) { return 'bad match' };
  const sum = v => arr.splice(0,2).reduce((a,c) => a + c, 0);
  return Array.from({length: arr.length/2}, v => sum(v))
  //or just write Array.from({length: arr.length / 2}, sum)
}

console.log(isGoodMatches([1,2,3,4]))
//41) return if sum of ASCII of string is even or odd, if even return true, if not return false
const isAlpha = word => [...word.replace(/[^a-z]/gi, '')].map(v => v.charCodeAt() - 96).reduce((a,c) => a + c, 0) % 2 === 0

//shorter and more efficint solution
const isAlphas = word => word.match(/[a-z]/g).reduce((a,c) => a + c.charCodeAt() - 96, 0) % 2 === 0
console.log(isAlphas("i'am king"))

//42) You're given a sentence, return the first letter of that word if even, and middle if odd
const firstOrMiddle = sentence => sentence.split(' ').map(word => word.length % 2 === 0 ? word[0] : word[Math.floor(word.length / 2)]).join('')
console.log(firstOrMiddle('Alexa have to paid'))
//The clever part is the usage of Math.floor(), without it you would do( (word.length - 1) / 2)
//because if word.length is 5, then the middle is 2, so 5-1 / 2 is 4, but 5/2 is 2.5, and Math.floor(2.5) is 2

//43) Flatten the cursve, you're given an array of numbers, fill that array with the mean of the array numbers
//[1,2,3,4,5,6,7] => 28/7 => [4,4,4,4,4,4,4]
//round the numbers to 1 decimal

const flattenCurve = curve => Array.from({length: curve.length}).fill(+(curve.reduce((a,c) => a + c, 0) / curve.length).toFixed(1))
console.log(flattenCurve([1,2,3,4,5,6,7]))
//more efficient way of doing it:
const flattenCurves = arr => {
	const mean = +(arr.reduce((a,c) => a + c, 0) / arr.length).toFixed(1);
	return arr.map(v => mean)
}

console.log(flattenCurves([1,2,3,4,5,6,7]))

//44)Create a function that divides a string into parts of size n.
//'chew', 2 => ['ch', 'ew']
const partition = (str, n) => {
	const arr = [];
	for(let i = 0; i < str.length; i+=n) {
		arr.push(str.slice(i, i+n))
	}
	return arr
}

//45) Return the longest time, so you're given hours, minutes, seconds
//2, 30, 900, then it's 2, since 2 hours is the longest

const longestTime = (h, m, s) => {
  const format = [h, m, s].map((time, i) => i === 0 ? time * 3600 : i === 1 ? time * 60 : time)
  return [h, m, s][format.indexOf(Math.max(...format))]
} 
console.log(longestTime(2, 30, 900))

//using sort()
const longestTimes = (h, m, s) => {
  return [[h,h*3600], [m, m*60], [s, s]].sort((a,b) => b[1] - a[1])[0][0]
}
console.log(longestTime(15, 955, 59400))

//46) return the longest word from a sentence
const longestWord = s => s.split(' ').sort((a,b) => b.length - a.length)[0]
console.log(longestWord('Hello darkness my old friend'))

const longestWords = sentence => {
	let str = '';
	const arr = sentence.split(' ')
	for(let i = 0; i < arr.length; i++) {
		if(arr[i].length > str.length) {
			str = arr[i]
		} else {
			continue;
		}
	}
	return str
}
console.log(longestWords('Hello darkness my old friend'))

//47) check if given number is a factorial
const isFactorial = number => {
  let result = 1;
  for(let i = 1; i < number; i++) {
    result *= i;
    if(result === number) {
      return true
    } else {
      continue;
    }
  }
  return false
}
//shorter and more efficient syntax:
const isFactorials = number => {
  let n = 1;
  for(let i = 2; n < number; i++) {
    n *= i;
  }
  return n === number
}

//first step of using recurison, but not exactly a recurisve method since it doesn't call itself
const isFactoriualss = number => {
  const recurse = n => n === 1 ? 1 : n * recurse(n - 1)
  for(let i = 1; i < number; i++) {
    if(recurse(i) === number) {
      return true
    } else {
      continue;
    }
  }
  return false
}
console.log(isFactorial(6))
console.log(isFactorials(6))
console.log(isFactoriualss(6))
//48) mysterfunctin: figure out what's going on
//A4B3 => AAAABBB
const mysteryFunc = str => {
  const num = str.match(/\d/g);
  return str.match(/[a-z]/gi).map((v,i) => v.repeat(+num[i])).join('')
}
console.log(mysteryFunc('A4B3'))

//we could do this with a for loop as well
const mysteryFuncs = str => {
  let result = '';
  for(let i = 0; i < str.length; i+=2) {
    result += str[i].repeat(+str[i+1])
  }
  return result;
}
console.log(mysteryFuncs('A4B5C2'))
//most efficient and clever way of solving it
const mysteryFuncss = str => {
  return Array.from({length: str.length / 2}, (_, i) => str[i * 2].repeat(str[i * 2 + 1])).join('')
}
//first we create a length which is half of the given string since letters and numbers have the same amount
//then get the string, as strings are at even indices, we multiply it by 2 to get strings
//and then call repeat and get the numbers of that string as the numbers are odd indices
//so we multiply the indices by 2 and then add 1 to get an odd number
console.log(mysteryFuncss('A4B5C2'))

//49) figure out this problem: winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) 
//the arrays represent your card deck
//return true if you get a larger number, here you can get 96 and your opponent gets 73
const winRound = (you, opponent) => {
  const sorted = x => +x.sort((a,b) => b - a).slice(0,2).join('');
  return sorted(you) > sorted(opponent);
}

console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]))
//different syntax with using array destructuring
//and then assining a and b to their respective sorted and converted largest numbers value
const winRounds = (you, opponent) => {
  const [a, b] = [you, opponent].map(v => +v.sort((a, b) => b - a).slice(0,2).join(''))
  return a > b
}

console.log(winRounds([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]))


//50)Pythagoras' Theorem: a**2 + b**2 === c**2
//c is the longest side of the triangle. a and b are the other 2 sides.
//Given three numbers, x, y and z, determine whether they are the edges of a right angled triangle.
//if even one side is 0, then you must return false

const rightTriangle = (x, y, z) => {
  const [c, b, a] = [x, y, z].sort((a, b) => b - a);
  return c**2 === a**2 + b**2 && [x,y,z].every(v => v > 0)
}

//use rest parameter + array destructuring 
const rightTriangles = (...angles) => {
  const [c, b, a] = angles.sort((a,b) => b - a);
  return c**2 === b**2 + a**2 === angles.every(v => v > 0)
}

//slightly more efficient solution
const rightTriangless = (...angles) => {
  if(angles.some(v => 0 >= v)) { return false; }
  //efficient as it doesn't check for every value, by running some, once one value is 0 or lower, it return false
  const [c, b, a] = angles.sort((a,b) => b - a);
  return c**2 === b**2 + a**2 
}
console.log(rightTriangle(145, 105, 100))
console.log(rightTriangles(145, 105, 100))
console.log(rightTriangless(145, 105, 100))

//51)
//Write a function that sorts an array of characters alphabetically in ascending order (a-z) 
//by the character at the n-th character.

const sortByCharacter = (arr, n) => arr.sort((a, b) => a.charCodeAt(n - 1) - b.charCodeAt(n - 1))
console.log(sortByCharacter(['az16', 'by35', 'cx24'], 3))

//52) you're given an array that contains an object as an element
//the object is an a student's name, id, and their grades
const topGrade = students => students.map(v => Math.max(...v.notes, 0))

console.log(topGrade([{name: 'Yuta', id:1, notes: [1,2,3,4,5]}, {name: 'Yuti', id: 2, notes: [1,5,5,3,4]}, {name: 'Yuuta', id: 3, notes: [3,3,3,3,4]}]))
//it's possible that the student won't have any notes, so in that case Math.max() would return -Infinity
//so we pass 0 just in case
console.log(topGrade([{name: 'Y', id: 1, notes: [1,2,3,3,3]}, {name: 'M', id: 2, notes: []}]))

//53) Sum Fractions: you're given a nested array like this [[1,2], [3,4]]
//divide each value by the next value, and then add the two values to zero decimals
//so, 1/2 + 3/4
const sumFractions = arr => Math.round(arr.map(v => v[0] / v[1]).reduce((a, c) => a + c, 0))
console.log(sumFractions([[36, 4], [22, 60]]))

//more efficient way of doing it
const sumFractionss = arr => Math.round(arr.reduce((a, c) => a + c[0]/c[1], 0))
console.log(sumFractionss([[36, 4], [22, 60]]))

//same as above, but make use array destructuring:

const sumFractionsss = arr => Math.round(arr.reduce((a, [x, y]) => a + x / y, 0))
console.log(sumFractionsss([[36, 4], [22, 60]]))
//as the current value in our reducer callback, is the array inside the array
//we can destruct it as a parameter by x and y

//53) Number of Two or More Consecutive Ones
//countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]) ➞ 2
// Two instances: [1, 1] (middle) and [1, 1, 1] (end)

const countOnes = arr => (arr.join('').match(/1{2,}/g) || []).length
console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]))

//a non regex approach, but it uses regex once
const countOness = arr => {
	return arr.join('').split(/0+/g).filter(v => v.length > 1).length
}
console.log(countOness([1, 0, 0, 1, 1, 0, 1, 1, 1]))

//54) Sudoku is a 9x9 grid that is completed when every 3x3 square, 
//row & column consist of numbers 1-9
//you will be given a completed 3x3 square, in the form of a two-dimensional array

//First method: we first create a reducer function that flattens the array
//Then, we pass the nested array into that flattenArray function to flatten the array
//we then run sort, to make the range from 1...9
//then call join('') and check if it's '123456789' which is what we want

const flattenArray = nested => nested.reduce((a,c) => [...a, ...c], [])

const isMiniSudoku = square => 
	flattenArray(square)
	.sort()
	.join('') === '123456789'
console.log(isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]]))

//Second method: the sum of 1-9 is 45, so we can run reduce to get the sum
//and check if it's 45
const isMiniSudokus = square => square.reduce((a,c) =>a + c.reduce((x,y) => x + y, 0), 0) === 45

//55) you're given an array with a full names
//change it to the intial of first and last followed by a dot
const initialize = names => 
	names.map(v => 
			  v.split(' ')
			  .map(name => `${name[0].toUpperCase()}.`)
			  .join(' '))
console.log(initialize(['Sherlock Holmes', 'John Watson', 'Irene Adler']))

//56) check if given number is a perfect number or not
const perfectNum = num => {
  let total = 0;
  for(let i = 1; i <= num; i++) {
    total += i;
    if(total === num) {
      return true
    }
  }
  return false
}
console.log(perfectNum(6))
//57)Determine if number is prime
//a prime number is a number that gets divided by exactly 2 natural numbers
//which by 1 and by itself

const isPrime = n => {
  for(let i = 2; i < n; i++) {
    if(n % i === 0) { return false };
  }
  return true
}
const nthPrime = n => {
  let maybePrime = 2;//the number that will be passed to isPrime to check if it's a prime number or not
  let nPrime = 0; //this will be assigned the prime number
  while(n > 0) {
    if(isPrime(maybePrime)) {
      nPrime = maybePrime; //so nPrime will only be assigned maybePrime if isPrime(maybePrime) is true
      //which means that it must be a prime number, so nPrime will always keep track of it
      n--;//the while loop will stop if n is not bigger than 0 anymore
      //and n will ONLY be decremented by one if the maybePrime passed to isPrime is indeed a prime number
      //So, if maybePrime is NOT a prime number then n won't be decremented
      //and this allows to return the nth Prime number
      //if n = 1,  maybePrime starts as 2, and isPrime returns true, so nPrime is 2, and n will be decremented 
      //and becomes 0, so the while loop stops and maybePrime is returned, which is 2
      //if n = 3, maybePrime starts as 2, isPrime(2) => true => nPrime = 2; n(3)--->n(2)
      //maybePrime gets always incremented, isPrime(3) => true => nPrime = 3, n(2) --->n(1)
      //isPrime(4) => false => n does NOT decrement => nPrime stays 3, and maybePrime gets incremented
      //isPrime(5) => true => nPrime = 5, n(1) ---> n(0), loop stops, and nPrime, which is 5 is returned
    }
    maybePrime++;//nPrime gets only assigned the prime number if isPrime() is true and n only gets decremented
    //if isPrime() is true, but maybePrime is outside the if conditional and gets always incremented
    //so every number gets checked if it's a prime or not
  }
  return nPrime;
}
console.log(nthPrime(20))

//We can check the same thing for BigInt as well
//remember that the Number primitive can only represent between -2**53 - 1 ~ 2**53 - 1
//and bigger or smaller is not a safe number, Number.MAX_SAFE_INTEGER
//but the BigInt object accepts numbers above the safe number range
//BigInt(1) === 1n true, BigInt appends n at the end, so make sure that n is added for every number
//in the prime number checker for BigInt numbers
const isPrimeBigInt = num => {
  for(let i = 2n; i < num; i++) {
    if(num % i === 0n) { return false }
  }
  return true
}


const nthPrimeBigInt = num => {
  let maybePrime = 2n;
  let nthPrime = 0;
  while(num > 0) {
    if(isPrimeBigInt(maybePrime)) {
      nthPrime = maybePrime;
      num--;
    }
    maybePrime++;
  }
  return nthPrime;
}
console.log(nthPrimeBigInt(3))


//58) Flatten a deeply nested array recurisvely with reduce

const flattenRecursion = arr => {
  return arr.reduce((a, c) => a.concat(Array.isArray(c) ? flattenRecursion(c) : c), [])
}
//First, we don't know how deeply nested the array is
//In our reduce function, a starts as [] and we call the concat method to concatenate the arrays
//We don't know how deeply nested c is, it could be [1], [[1]] or [[[[1]]]]
//so writing [].concat([[1]]) would result in [[1]] and it isn't what we want
//so we run Array.isArray(c) to first check if c is an array or not, if it is then
//we call our function again and pass c as an argument flattenRecursion(c)
//note that this doesn't alter the orinal passed argument, [[[1]], [[[[[5]]]]], [4]]
//but flattenRecursion(c) is a function and will return a value for this iteration
//so, the function call is flattenRecursion([[[[1]]]]), how does it get flattened?
//Here's how, [[[[1]]]].reduce() looks like this, [[[[1]]]].reduce(([], [[[1]]]))
//we can already see that the c value is one level flattened
//imagine it like this, [1,2].reduce(([], 1)) is the first iteration
//this is exactly the same for in [[[[1]]]] as well, then it gets tested with Array.isArray() again
//and as it's still an array we call the function again, but this time, with one level flattened array
//so this is how it looks:
//[[[[1]]]].reduce(([], [[[1]]])) => [[[1]]].reduce(([], [[1]])) => [[1]].reduce(([], [1])) => [1].reduce(([], 1))
//Our nested array isn't an array anymore, which means [].concat(Array.isArray(1) ? false! : 1) => [].concat(1)
//now finally, our nested array got flattened and added the the accumulator parameter
//and this will happen for all the elements that are an array, no matter how deeply nested they are, it will be flattened


console.log(flattenRecursion([[[1]], [[[[[5]]]]], [4]]))


//59) only return words that start with a vowel
const startsVowel = str => (str.match(/\b[aeiou]\w*\b/gi) || []).map(v => v[0]+v.slice(1))

console.log(startsVowel('Exercising is a healthy way to burn off energy.'))

//60) count a specific digit
//digitOccurrences(min, max, digit) ➞ number of times digit occurs
//digitOccurrences(51, 55, 5) ➞ 6
// [51, 52, 53, 54, 55] : 5 occurs 6 times
const regexOp = (value, regex) => {
	return (`${value}`.match(regex) || []).length;
}
const digitOccurrences = (min, max, digit) => {
	let regex = new RegExp(`${digit}`, 'g')
	return Array.from({length: max - min + 1}, (_, i) => i + min).reduce((a, c) => a + (regexOp(c, regex)), 0)
}


//61) sort by the last letter of a word, alphabetically

const sortByLastLetter = sentence => sentence.split(' ').sort((a, b) => a.slice(-1).charCodeAt() - b.slice(-1).charCodeAt()).join(' ')
console.log(sortByLastLetter('herb camera dynamic'))
const sortletter = sentence => 
  sentence.split(' ')
          .sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
          .join(' ')
console.log(sortletter('herb camera dynamic'))
//'string'.localeCompare('string') method is a method called on the string prototype
//and checks if the called string comes before the passed string, if true it returns 1, and if not 0


//62) using the arguments object

function listArguments(seperator) {
  let result = '';
  for(let i = 1; i < arguments.length; i++) {
    result += arguments[i] + seperator
  }
  return result
}

console.log(listArguments(', ', 'Pokemon', 'Dragon Quest', 'Mario'))
//"Pokemon, Dragon Quest, Mario, "
//note that the seperator parameter is NOT the arguments object, it's the first parameter, 
//so seperator = ', '
//But as we don't want the returned value to be ", Pokemon, Dragon Quest, Mario, "
//we start our initial value as 1 because the first parameter, 0 is ', '
//and then we add the seperator, which is ', ' after every value, so this adds the comma
//NOTE! the arguments object is NOT an array, it does share properties like length but not all

const restParam = (multiplier, ...theArgs) => {
  return theArgs.map(v => v * multiplier)
}
console.log(restParam(2, 3, 4, 5, 6))
//63) Black Jack Game: J, Q, K are 10, and if value is over 21, return true if not false
//'A' is one

const overTwentyOne = cards => {
	return cards.reduce((accum, curr) => {
		if(['J', 'Q', 'K'].includes(curr)) { curr = 10; }
		if(['A'].includes(curr)) { curr = 1; }
		return accum + curr
	}, 0) > 21
}
console.log(overTwentyOne(['A', 'J', 'K', 'Q']))

//64) You're given an array with obejcts as values, sort by the score + reputation * 2
//by descending order

const sortScore = arr => {
  return arr.sort((a, b) => (b.score + b.reputation * 2) - (a.score + a.reputation * 2))
}

const advancedSortScore = arr => {
  arr.forEach(v => {
    v.trueScore = v.score + v.reputation * 2
  })
  const sorted = arr.sort((a, b) => b.trueScore - a.trueScore);
  sorted.map( v => delete v.trueScore);
  return sorted
  
}
console.log(sortScore([
  {studentId: 1, score: 180, reputation: 30},
  {studentId: 2, score: 190, reputation: 35},
  {studentId: 3, score: 185, reputation: 45},
  {studentId: 4, score: 100, reputation: 99}
]))

console.log(advancedSortScore([
  {studentId: 1, score: 180, reputation: 30},
  {studentId: 2, score: 190, reputation: 35},
  {studentId: 3, score: 185, reputation: 45},
  {studentId: 4, score: 100, reputation: 99}
]))


//65) calculate the total of the checkout, apply tax of 0.06 if the items are taxable

const checkout = cart => {
  const tax = 0.06;
  return cart.reduce((a, c) => a + c.price + c.amount + (c.taxable ? c.price * c.amount * tax : 0), 0)
}

console.log(checkout([
  {price: 35, amount: 4, taxable: true},
  {price: 20, amount: 1, taxable: false}, 
  {price: 50, amount: 1, taxable: true}
]))//122.4

//66) Create a function which replaces the last n words with "blah". Add "..." to the last blah.
const blahBlah = (str, n, arr = str.split(' ')) => {
	return `${arr.slice(0, -n).join(' ')}${arr.length < n ? '' : ' '}${arr.slice(-n).map(v => 'blah').join(' ')}...`
}

const blahBlahs = (str, n) => {
	return str.split(' ')
			  .map((word, index, arr) => index >= arr.length - n ? 'blah' : word )
			  .join(' ')+'...'
}
//fisrt, we split the array between a space ' '
//then we run the map method, and pass the third parameter as arr, which is the array map was called on
//If the sentence has 5 words, and we replace the nth word, where n is 3
//then every condition that returns true to index (3) > 5 (array.length) - 3 (n)
//will be replace with 'blah'. As 5-3, is 2, from the index that is 2 or higher will become blah
//then we call join and convert the array into a string
console.log(blahBlah("A function is a block of code which only runs when it is called",  5))
console.log(blahBlahs("one two three four five",  3))

//67) annonymous function all the way down: 
//you're given a number that represents the function depth
//so, if n is 2 then it means 2 calls lambdaDepth(2)()

const lambdaDepth = n => n === 0 ? 'edabit' : () => lambdaDepth(n - 1)
//If n is 0, then we immediatley return 'edabit'
//If not, then it return an annonymous function () => lambdaDepth(n - 1)
//So if we just call lamdaDepth() then it would return () => lamdaDepth(n - 1)
//But note that it returns the function depth
//So if n is 1, then the call is lambdaDepth(1)(), 
//which means that the second call returns the annonymous function () => lambdaDepth(n - 1)
//and as that annonymous function return the lambdaDepth(n - 1) but DECREMENTS n by one
//and now n is 0, and in the recursive call, n===0 is true and we return 'edabit'
//and this is true no matter how deep n is, if it's 2 lambdaDepth(2)()()
//then in the first call lambdaDepth() it returns () => lambdaDepth(n - 1)
//then in the second call lambdaDepth()() it returns lambdaDepth(n - 1)
//which then returns the annonymous function as n is still 1 and above 0
//and finally lambdaDepth(2)()() makes the third call and returns lambdaDepth(n - 1)
//but now n is 1, so 1 - 1 is zero, and n === 0 is true and returns 'edabit'


//68) Create a Book constructor
//it has 2 properties, author and book
//create 2 methods that returns the author's name and the book's name

//We first will do it with a function constructor
function Book(title, author) {
	this.title = title;
	this.author = author
}

Book.prototype.getTitle = function() {
	return `Title: ${this.title}`;
}

Book.prototype.getAuthor = function() {
	return `Author: ${this.author}`
}

class Books {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	};
	
	getTitle() {
		return `Title: ${this.title}`;
	};
	getAuthor() {
		return `Author: ${this.author}`;
	}
}

const PP = new Book('Pride and Prejudice', 'Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');

const PPs = new Books('Pride and Prejudice', 'Jane Austen');
const Hs = new Books('Hamlet', 'William Shakespeare');
const WPs = new Books('War and Peace', 'Leo Tolstoy');

console.log(PPs.getTitle())
console.log(PP.getAuthor())

//69)You're given an array with objects as its elements
//[{name: 'Yuta', notes: [1,4,5]}] -> [name: 'Yuta', topNotes: 5]
//The notes property could be empty so make sure you check for that as well

const topNotes = students => {
  students.forEach(obj => {
  obj.notes.length === 0 ? obj.topNote = 0 : obj.topNote = Math.max(...obj.notes)
  delete obj.notes
});
  return students
}//note that forEach returns undefined, so like a for loop, after the loop has finished
//return the mutated array

//we can also write it with a map method
//unlike forEach, the map method RETURNS a value
//so we essentially need to create a new object literal
//we just need the name property and add topNotes as a new property 
//and don't need to delete anything as we create a new object
const topNoteMap = students => students.map(obj => ({name: obj.name, topNote: obj.notes.length === 0 ? 0 : Math.max(...obj.notes)}))
//the reason why we need to put a bracket around the curly brackets
//is because otherwise javascript will read it as this => {}
//so the curly brackets the enclose the function and NOT an object curly brackets
//but, by surrounding it with a bracket ({}) we successfully create a new object
//see below for clearer illustration
const toptop = s => s.map(obj => {
  return {name: obj.name, topNotes: Math.max(...obj.notes, 0)}
})
//we can see why the round bracket was necessary ({}) in our first case
//and why it isn't necessary in the second case
//writing (=> {}) and return {} or (=> ({})) are different
//IMPORTANT, instead of running a ternary operator to check if the notes array is empty or not
//we can just pass Math.max(obj.notes, 0), add just a 0, and it would return that instead

//another way: let's use OBJECT DESTRUCTURING

const toptoptop = students => students.map(({name, notes}) => {
  return {name: name, topNotes: Math.max(...notes, 0)}
})
console.log(topNotes([{name: 'Yuta', notes: [1,4,5]}]))
console.log(topNoteMap([{name: 'Yuta', notes: [1,4,5]}]))
console.log(toptop([{name: 'Yuta', notes: [1,4,5]}]))
console.log(toptoptop([{name: 'Yuta', notes: [1,4,5]}]))

//70)Convert your array to an object
//getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
//The property will be value of the array, but the property needs to be unique
//so, there are 4 'A's but only have one,
//and the value will be the number of occurence of that element
//there are 4 A, so the key value pair will be A: 4

const toObj = (arr, unique) => unique.reduce((a, c) => {
	a[c] = arr.filter(v => v === c).length;
	return a
}, {})

const getFrequencies = arr => {
	const filtered = arr.filter((v, i) => arr.indexOf(v) === i);	
	return toObj(arr, filtered);
}
//First we filter the array and make the elements unique
//then we create a toObj function that converts the array to an object
//Note: do a[c] and not a.c, so don't use dot notation
//as it will look for a property c, and not assign a NEW one
//then we call arr.filter and return the length of the c occurences in that original array
//so first, we filter by the condition A === A, as there are 4 A, the value is 4

console.log(getFrequencies(["A", "B", "A", "A", "A"]))

//71) ["3V", "5V", "12V"], "4.5V"
//value must be bigger than given number
const chooseFuse = (fuses, current) => 
	fuses.sort((a, b) => +a.slice(0, -1) - +b.slice(0, -1))
	.find(value => +value.slice(0, - 1) >= +current.slice(0, -1))

//72) Golf Score:
const score = {
	'eagle'(score) {
		return score - 2;
	},
	'birdie'(score) {
		return score - 1;
	},
	'par'(score) {
		return score;
	},
	'bogey'(score) {
		return score + 1
	},
	"double-bogey"(score) {
		return  score + 2
	}
}
const golfScore = (course, result) => {
  return result.reduce((a, c, i) => a + score[c](course[i]), 0)
}
//more efficient syntax:
const golfScores = (course, result) => 
	course.reduce((total, score, index) => 
    total + {eagle: -2, birdie: -1, par: 0, bogey: 1, 'double-bogey': 2}[result[index]] + score, 0)

console.log(golfScore([4, 4, 4, 4, 5, 3, 3, 4, 3, 5, 4, 4, 3, 4, 5, 4, 4, 5], ['double-bogey', 'par', 'par', 'double-bogey', 'eagle', 'par', 'bogey', 'birdie', 'birdie', 'bogey', 'par', 'birdie', 'par', 'par', 'par', 'par', 'bogey', 'par']))

console.log(golfScores([4, 4, 4, 4, 5, 3, 3, 4, 3, 5, 4, 4, 3, 4, 5, 4, 4, 5], ['double-bogey', 'par', 'par', 'double-bogey', 'eagle', 'par', 'bogey', 'birdie', 'birdie', 'bogey', 'par', 'birdie', 'par', 'par', 'par', 'par', 'bogey', 'par']))

//73) //"C. Y. T. O. P. L. A. S. M. Cytoplasm?"
//check if the given letter match the last word, so check the spellings
const validateSpelling = words => {
  const word = words.split(' ').map(v => v.toLowerCase().replace('.', ''))
  return new RegExp(`${word.slice(0, -1).join('')}`, 'g', 'i').test(word.slice(-1))
}
//more efficient syntax, using match
const validateSpellings = words => {
  let check = words.toLowerCase().match(/\w+/gi)
  return check.slice(0, -1).join('') === check[check.length - 1]
}
console.log(validateSpellings("C. Y. T. O. P. L. A. S. M. Cytoplasm?"))

//74) accumulated product:
//[1,2,3, 4] => [1, 2, 6, 24]

const accumulatedproduct = arr => {
  let multiplier = 1;
  return arr.map(v => multiplier *= v)
}
console.log(accumulatedproduct([1,2,3,4]))

//75) Make A Box: only argument is a number of the dimension of the box, see below for example:
/*
makeBox(2) ➞ [
  "##",
  "##"
]

makeBox(5) ➞ [
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]
*/
//one method:
const makeBox = n => Array.from({length: n}, (_, i) => 
                     i === 0 || i === n - 1 ? '#'.repeat(n) : `#${' '.repeat(n - 2)}#`)

//second method: similar as above but bit different
const makeBoxs = n => Array.from({length: n}, (_, i) => {
	return [0, n - 1].includes(i) ? '#'.repeat(n) : `#${' '.repeat(n - 2)}#`
})
console.log(makeBoxs(5))
console.log(makeBox(5))
//76) check if the given abbrevation is unique or not
/*
uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true
*/
//first one, 'ho' and 'h' work for both house and hope, so they are NOT unique

const uniqueAbbrev = (abbre, words) => {
  return words.every(word => abbre.filter(abbrevation => word.startsWith(abbrevation)).length === 1)
}

console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]))

//77) Return the largest number of the adajcent product

const adjacentProduct = arr =>
  Math.max(...arr.slice(1).map((num, i) => num * arr[i]));

const adjacentProducts = arr => 
  arr.slice(1).map((num, i) => num * arr[i]).sort((a, b) => b - a)[0]

console.log(adjacentProduct([1,2,3,4,4,6,8,9,11,4,5,6]))

//77) return the FILE NAME of a given path:
//C:/Projects/pil_tests/ascii/edabit.txt

//use split, to convert the string to an array and split between the slash '/'
//then run slice(-1) to return the last element of the array
//which returns ['edabit.txt'] but as we want to return a string
//we return the zero indexed element out of the array, [0]
const fileName = path => path.split('/').slice(-1)[0];
console.log(fileName("C:/Projects/pil_tests/ascii/edabit.txt"));

//Another way: calling split is the same, but we just call pop()
//to return the last value of the array

const fileNames = path => path.split('/').pop();
console.log(fileNames("C:/Projects/pil_tests/ascii/edabit.txt"));



//78) Return whether the left or right number is bigger
//if null, undefined, or left and right are equal are given, then return balanced
//'3449' 34 < 49 => right
//44589 => 44 < 89 => right (odd numebrs, ignore the middle)

const seesaw = (n, s = String(n)) => {
  if(s.length === 1) { return 'balanced' };
  
  const midPoint = s.length / 2;
  const left = +s.slice(0, midPoint);
  const right = +s.slice(-midPoint);
  //odd or even, s.slice(-s.length / 2) will return the last half
 
  return right > left ? 'right' : left > right ? 'left' : 'balanced'
}
//more efficient solution:

const seesaws = (n, s = String(n)) => {
  if(s.length === 1) { return 'balanced' };
  const left = s.slice(0, s.length / 2);
  const right = s.slice(Math.ceil(s.length / 2));
  //Math.ceil() returns the next largest integer
  // Math.ceil(4/2) => 2, which works for even numbers
  // Math.ceil(5/2) => 3, which ignores the middle number in odd
  //and returns the number we want
  return right > left ? 'right' : left > right ? 'left' : 'balanced'
}

console.log(seesaw('2349'))
console.log(seesaw('49539'))
console.log(seesaws('2349'))
console.log(seesaws('49539'))
//79)You're given an expression like 'One plus One'
//return the result
//only numbers are zero, one, two and operation are plus and minus
const calc = {
	zero: 0,
	one: 1,
	two: 2,
	0: 'Zero',
	1: 'One',
	2: 'Two',
	plus(n1, n2) {
		return this[`${this[n1] + this[n2]}`]
	},
	minus(n1, n2) {
		return this[`${this[n1] - this[n2]}`]
	}
}
function wordedMath(expr) {
	const [n1, operation, n2] = expr.split(' ');
	return calc[operation.toLowerCase()](n1.toLowerCase(), n2.toLowerCase())
}


console.log(wordedMath('one plus one'))

//79) 2 arrays are passed, slot the second array in between the first array's elements
//[1,5],[2,3,4] => [1,2,3,4,5]

const tuckIn = ([a,z], b) => [a, ...b, z];
console.log(tuckIn([1,10],[2,3,4,5,6,7,8,9]))

//think of push, unshift, pop, shift

const tuckIns = (a, b) => [a.shift(), ...b, a.pop()]
console.log(tuckIns([1,10],[2,3,4,5,6,7,8,9]))

//80)Create a function that finds all elements in the given array, 
//such that each element is greater than all elements to the right of it.
//[1,2,4,20,9,8,5] => returns [20, 9, 8, 5] is valid since 20 is the biggest number
//BUT: [3,5,22,1,16,14] returns [22, 16, 14], 1 is NOT greater than 16
//So, the new array's element is greater than all elements to the right 

const leader = arr => {
  return arr.filter((num, index) => num >= Math.max(...arr.slice(index)));
}
//We call filter, and then do a comparison operation
//where each element, which is a number must be or equal than the max number of sliced array
//For [3,5,22,1,16,14], 22 is the biggest number so 3 and 5 get filtered out
//22 is equal to 22 so passes the test,
//then we have [1,16,14] => now 16 is the largest number
//1 is NOT bigger or equal to 16, so gets filtered out, same for 16 as it was for 22
//and 14 is the last number so always passes the test
console.log(leader([3,5,22,1,16,14]))

//81) Sorting Array: 2 arguments which are arrays,
//first arry is already sorted, and you must concatenate the 2 arrays and sort them
//in the way the first array is sorted
//so if first array is [3,2,1] and second array is [4,5,6]
//first array is descending order, so [6,5,4,3,2,1]
//if first array is [1,2,3] then it's ascending and it's [1,2,3,4,5,6]

//sort() rules are:
//a is less than b ([1,2,3])=> return -1
//a is greater than b ([3,2,1]) => return 1
//a must be equal to b ([1,1]) => return 0 (same order)

//const sort = a => a.sort((a, b) => a > b ? 1 : -1)
//[1,2,3] => a(1) is not bigger than b(2) so it returns -1
//[3,2,1] => a(2) is bigger than b(1) so it returns 1

const mergeSort = (a, b) => {
	if(a[0] > a[1]) {
		return [...a, ...b].sort((a, b) => a > b ? -1 : 1)
	} else  {
		return [...a, ...b].sort((a, b) => a > b ? 1 : -1)
	}
}
//we first check if the sorted array a's first element is bigger than the second element
//so first array is something like [3, 2, 1]
//if TRUE, then we must sort in descending order => [3,2,1]
//so our sort runs a > b ? -1 : 1 => so it sorts in descending order
//if we wanted it in ascending order then, a > b ? 1 : -1

//if not, then we know it the first array is sorted [1,2,3], ascending order!
//so we run write it like before, is a is bigger than b then return 1 (to make [2,1] => [1,2])
//and if a is not bigger than b than return -1 to sort ([1,2,4,3,5] => [1,2,3,4,5])
console.log(mergeSort([3,2,1], [4,5,6]))
//[6,5,4,3,2,1]
console.log(mergeSort([1,2,3], [4,5,6]))
//[1, 2, 3, 4, 5, 6]

//more efficient solution;

const mergeSorts = (x, y) => [...x, ...y].sort((a, b) => x[1] > x[0] ? a - b : b -a)
console.log(mergeSorts([3,2,1],[4,5,6]))

//82) Write the Finobacci Sequence:

//first using a for loop and push

//This algorithm is LINEAR
const fibSeq = n => {
	if(typeof n !== 'number') { return undefined };
	const arr = [0, 1];
	for(let i = 2; i < n; i++) {
		arr.push(arr[i - 1] + arr[i - 2])
	}
	return n === 0 ? [] : n === 1 ? [0] : arr
}


//Using Recurison, the algortihm is expontential since the tree gets bigger after each call
const fibRecursion = n => n <= 1 ? n : fibRecursion(n - 1) + fibRecursion(n - 2)

//lets use the recursion above, and use Array.from()

const fibSequence = length => {
  if(typeof length !== 'number') { return undefined };
  
  return Array.from({length: length}, (_, i) => fibRecursion(i));
  //first call, i is 0 so the recursion returns 0
  //second call i is 1, so the recurison returns 1 etc.
}

console.log(fibSeq(4))
console.log(fibSequence(4))

//83) create camel case and snake case functions
/*
toCamelCase("hello_edabit") ➞ "helloEdabit"

toSnakeCase("helloEdabit") ➞ "hello_edabit"
*/
const toSnakeCase = s => {
	const lookup = (s.match(/[A-Z]/g) || []);
	return [...s].map(v => lookup.includes(v) ? `_${v.toLowerCase()}` : v).join('')
}

const toCamelCase = s => s.split('_').map((word, i) => i !== 0 ? word[0].toUpperCase() + word.slice(1) : word).join('')

//Let's solve it more efficintly with the replace function

const toSnakeCases = s => {
  return s.replace(/[A-Z]/g, v => `_${v.toLowerCase()}`)
}

const toCameCases = s => {
  return s.replace(/_\w/g, v => v[1].toUpperCase());
}

console.log(toSnakeCases('helloEdabit'))
console.log(toCameCases('hello_edabit'))

//84) You're given a number, add the sum of that number, and return evenish or oddish
//the question is simple as seen below, BUT check out the second version of the code

const oddishOrEvenish = n => [...`${n}`].reduce((a, c) => a + +c, 0) % 2 ? 'Oddish' : 'Evenish'
console.log(oddishOrEvenish(55))

//Creative Solution:

const oddishOrEvenishs = n => 
  ['Even', 'Odd'][[...`${n}`].reduce((a,c) => a + +c, 0) % 2] + 'ish';
console.log(oddishOrEvenishs(55))
//Explanation: First we create an array with elements 'Even' and 'Odd'
//then we create the index by getting the sum and get the remainder of either 0 or 1
//if 0, then that array would return 'Even' and then we concatenate 'ish' to get 'Evenish'
//if 1, then we get 'Oddish'

//85) regular expression: write a regexp that looks for decimal numbers
//including integer, floating point numbers and negative ones
//let str = "-1.5 0 2 -123.4."
//returns [-1.5, 0, 2, -123.4]

const numberLookup = s => s.match(/\-?\d+\.?\-?\d*/g);
console.log(numberLookup("-1.5 0 2 -123.4."))

//86)A pandigital number contains all digits (0-9) at least once.
//Check if the passed argument is a pandigital number or not

//We will do it with 2 methods: One is Set and then other through filter and indexof

const isPandigital = num => new Set(`${num}`).size === 10;
console.log(isPandigital(6781235184590))
//We use the Set() constructor to construct a set object
//which is like an array but only stores unique values
//We can distinguish between methods and object constructors through a JS convention
//For constructors, they are uppercased like Set(), while methods are lowercased

//87) ["1+1=2", "2+2=3", "5*5=10", "3/3=1"] => ['1+1=2', '3/3=1']
//Return the elements in the array where the operation is true 

const operations = {
  '+'(x, y) {return +x + +y},
  '-'(x, y) {return +x - +y},
  '*'(x, y) {return +x * +y},
  '/'(x, y) {return +x / +y}
}

const trueEquations = arr =>
	arr.filter(equation=> {
		const [x, operator, y, result] = equation.match(/\d+|[+-/*]|\d+/g);
		return operations[operator](x, y) === +result
	})
console.log(trueEquations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]))

//we have a more efficient way of solving it by using the eval function

const trueEquationss = arr => arr.filter(v => eval(v.replace('=', '===')))
console.log(trueEquationss(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]))

//88)check if it's a valid floating number
//12.12 -> valid
//use regular expression
const isFloatingCharacter = num => /^(\-?\d*\.\d+)$/.test(num)

//the best way of solving it is with regular expression
//but we can do it differently too

const isFloatingCharacters = num => num == +num && num.includes('.')
//first we check the given number is valid number or not
//with strict equality num === +num isn't true since we compare a string with a number
//but with loose quality '1' == 1 is true so this works for checking
//if the argument is a number or not
//then we check if the num argument includes '.' to ensure it's a floating number

//89) Class Syntax: Shiritori
//This class will have 2 properties:
//words: which is an array that contains the words

//game_over: a boolean that indicates if game is over or not

//This class will have 2 methods:
//play() takes a word as an argument and checks if it's valid
//-> 2 conditions for validity: 
//first character of next word matches last charcter of previous word. 
//word must not already been said
//if VALID => adds the word to the array words property
//if INVALID => returns 'game over', and sets game_over property to true

//restart() sets the words proeprty array to [] so it empties previous elements

//and game_over property to false, and returns 'game restarted'
class Shiritori {
	constructor(words, game_over) {
		this.words = []; //keeps track of all words
		this.game_over = false; //keeps track of status of game
	};
	play(word) {
		if(!this.words.includes(word.toLowerCase())&& this.words.slice(-1).every(v => v.slice(-1).toLowerCase() === word[0].toLowerCase())) {
          //first, we check if word argument is already in the array, must not be the case
          //also checks last element of words array, then we check if last letter from the last word
          //is the first letter of word argument, if both true then it's valid
			this.words.push(word);//pushes word argument to words array
			return this.words;//then we return that array like ["apple", "ear", "rhino"]
		}
      //if our test fails, then it's invalid
		this.game_over = true; //game_over property is set to true
		return 'game over' //returns game over message
	};
	restart() {
		this.words = [];
		this.game_over = false;
		return 'game restarted';
      //restart method restarts the game, so words array is emptied
      //game_over is set to false and finally returns 'game restarted' message
	}
}

const game1 = new Shiritori();
game1.play('Pokemon');
game1.play('Nio Mata');
game1.play('Arial');

console.log(game1.words)

//90) Object: Return the year the song was released
//You're given an object that has the years as its key 
//and the value is an arra with elements of songs
//the argument is the song name, return the year that song was released
const releaseYear = album => {
		const albums = {
    "2015": ["Vulnicura", "Honeymoon", "Rebel Heart"],
    "2016": ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
    "2017": ["Flower Boy", "Antisocialites"],
    "2018": ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
    "2019": ["thank u next", "Magdalene", "Ode to Joy"],
    "2020": ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"],
  };
	return +Object.keys(albums).filter(year => albums[year].includes(album)).join('') || 'Unknown';
}
//First, we run Object.keys(albums) to an array of keys from the albums object
//which returns [2015, 2016, 2017, 2018, 2019, 2020]
//then, we run the filter method on that years array, 
//in that filter callback, we access the albums objects value with bracket notation, and pass in the year
//which allows us to access the object's value from 2015 through 2020
//as albums[year] returns the albums values, which is an array of songs
//we call the includes method and pass in releaseYear function's argument, which is the song name
//if any of the albums objects values have that song, then albums[year].includes(album) will return true
//and the filter method will return the array element that passes the test
//so if true we will get year from Object.keys(albums), which is [2015, 2016, 2017, 2018, 2019, 2020]
//'Rebel Hear' will return true as albums['2015'].includes('Rebel Hear') is true
//and ['2015'] will be returned, we convert that to a string with join, and convert the string to a number
//with the urnary operator +. IF, the given song is NOT in the object
//then we return 'Unknown'
//filter would return an empty array [] and join converts to an emtpty string ''
//and Boolean('') returns false, so the || statement returns the true value, which is 'Unknown'
console.log(releaseYear('Rebel Heart'))//2015
console.log(releaseYear('Lemon'))//'Unknown'

//91) very hard: you're given a string like 'is2 Thi1s T4est 3a'
//rearrange the string from the order of number so 
//'is2 Thi1s T4est 3a' => 'Thi1s  is2  3a T4est', and return that sorted string by removing the numbers
//so you get 'This is a Test'
const rearrange = str => {
  const string = (str.match(/\w+[.,!]?/gi) || []);
  const nums = (str.match(/\d+/g) || []);
  const obj = nums.reduce((a, c, i) => {
    a[c] = string[i].replace(/\d+/g, '');
    return a
  }, {})
  return Object.keys(obj).map(key => obj[key]).join(' ')
}
//Not very efficient and there's a better way of solving it, but let's walk through this solution
//first we create an array of strings from the argument
//and an array of the numbers from the argument
//we create an object with the nums array by running the reduce method
//the object's property is the number starting from 2: and the value is the is
//then we return that object
//which returns
/*
[object Object] {
  1: "This",
  2: "is",
  3: "a",
  4: "Test"
}
*/
//then we create an array of keys from that object, which is [1,2,3,4]
//then we access the object's value with the keys, and call join to return the string
console.log(rearrange('is2 Thi1s T4est 3a'))

//we can solve this more efficiently by using sort
const rearranger = str => 
  str.length > 1 ?
	str.split(' ')
	.sort((a, b) => +a.match(/\d/).join('') - +b.match(/\d/).join(''))
	.map(word => word.replace(/\d/g, ''))
	.join(' ')
	: ''
//first we check for the possibly of the argument being just an empty string or ' '
//if it's longer then we run the important code
//first, we convert the string to an array
//then we run sort on the array ['is3', 'Cri1stiano', '4the', 'Rona2ldo', '5best.'];
//as each element contains a number, sort it in ASCENDING order(1,2,3...)
//to get the number we return it with match 'is3'.match(/\d/) would return 3
//to sort it by ascending order we just write the code a - b,
//and here we do the same thing, we just get the numebrs first
//now we have an array that is sorted correctly
//then we run the map method, and replace all numbers in the array element with an empty string
//this effectively removes the number from the array
//then we call join
//if string is shorter than 1, we return an empty string
console.log(rearranger('is3 Cri1stiano 4the Rona2ldo 5best.'))
//"Cristiano Ronaldo is the best."


//92) HangMan game:
//Create a function that, given a phrase and number of letters guessed, 
//returns a string with hyphens - for every letter of the phrase not guessed, 
//and each letter guessed in place.
//All characters other than letters should always be returned, so 3 or . would stay the same

const hangman = (phrase, arr) => 
	[...phrase]
	.map(v => /[^a-z]/i.test(v) ? v : arr.includes(v.toLowerCase()) ? v : '-')
	.join('')
//first, we convert the string to an array with the spread operator
//then we first test if the letter is a letter or not so if it's a number or special character
//with [^a-z] if true then we return it as is ${v}
//if it's a letter then we check if that letter is a part of the array argument
//if yes, then we return that letter
//if false, we return '-'
//then we call join and return that new string
console.log(hangman('thE elePhaNt IN the rOom.', ["o", "g", "g", "m", "h","n","p"]))
//"-h- ---Ph-N- -N -h- -Oom."

//93)Check if the array has Consecutive Numbers
//This means that it must follow 2, 3, 4, etc.
//and must Not have identical numbers

const consecutive = num => {
  if(new Set(num).size !== num.length) { return false; };
  const sorted = num.sort((a, b) => a - b);
  return sorted.slice(1).every((n, i) => n - 1 === sorted[i])
}

console.log(consecutive([2,4,5,3,6]))


//94) Return how many leap years are in the given range of years, like 1980 and 1984
const numLeapYears = years => {
	//argument years is "1980-1984"
	const [start, end] = years.split('-');
	//start is assinged as 1980 and end is 1984
	let final = 0;
	for(let i = +start; i <= +end; i++) {
		//i starts as 1980, and loop ends when i is bigger than 1984
		if((new Date(i, 1, 29)).getMonth() === 1) { 
			//if the Month is still given as 1
			//then it means the month of February has 29 days
			//in that case, we increment the final variable by one
			final++ 
		} else {
			continue;
		}
	}
	return final;
}

//95) Check anti divisor of a number
//rules:
//given number must NOT be a divisor of num
//if given number is even then it must be a divisor of num * 2
//if odd, then it must be a divisor of num * 2 + 1 or num * 2 - 1
const antiDivisors = num => {
  const arr = [];
  const odd = n => ((num * 2 + 1) % n === 0 || (num * 2 - 1) % n === 0) && !(num % n === 0)
  const even = n => (num * 2) % n === 0 && !(num % n === 0)
  for(let i = 2; i < num; i++) {
    if(i % 2 === 0 && even(i)) { arr.push(i); }
    else if(i % 2 === 1 && odd(i)) { arr.push(i); }
  }
  return arr
}
console.log(antiDivisors(10))










