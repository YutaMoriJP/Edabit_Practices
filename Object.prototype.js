String.prototype.toString = function () {
  let s = "";
  for (let i = this.length - 1; i >= 0; i--) {
    s += this[i];
  }
  return s;
};

console.log("Hello".toString()); //reverses string order
//The this object is a property of the execution context and the calling object
//toString is the method and is what calls the toString, hence, it's 'this'

/*
  Object.prototype.entries() takes a single object as an argument, 
  and returns an array. In this array are arrays with the 
  name of every property of the object, and the value of the property.
  
  Object.prototype.values() also takes a single object as an argument, 
  and returns an array. In this array are the values of every property of the object.
  
  const myObject = {
    a: 1,
    b: 2
  }
  
  Object.entries(myObject) ➞ [ ["a", 1], ["b", 2] ]
  Object.values(myObject) ➞ [1, 2]
  */

Object.prototype.entries = function (obj) {
  const arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
};

const myObj = { a: 1, b: 2 };

Object.prototype.values = function (obj) {
  const arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr;
};
console.log(Object.entries(myObj));
console.log(Object.values(myObj));
console.log(Object.entries("hi"));
//for...in iterates over the key of the object, {a: 1} would be a,
//'hi' is the same as {0: 'h', 1: 'i'} so it's 0
//[a, b] is the same as {0: a, 1: b} so it's 0
console.log("Hello".entries("hi"));
//as we define it on the Object's prototype,
//it's inherited by all objects that appear on the prototype chain and inherit from Object

Object.myValues = function (obj) {
  const a = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      a.push([key, obj[key]]);
    }
  }
  return a;
};

console.log(Object.myValues({ a: 1, b: 2, c: 3 }));
//if we don't define on the prototype, then it's directly called on Object

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

const o = {
  a: "Hello",
  b: "World",
  get sentence() {
    return this.a + ", " + this.b;
  },
};

const instance = Object.create(o);

console.log(instance);

console.log(instance.__proto__ === o);

console.log({}.__proto__ === Object.prototype);

console.log(instance.__proto__.__proto__ === Object.prototype);

const myObj = Object.create(Object.prototype, {
  a: { value: 10, enumerable: true, writable: true, configurable: true },
  b: {
    enumerable: true,
    configurable: true,
    get() {
      return `The value of property a is: ${this.a}`;
    },
    set(newValue) {
      this.a = newValue;
    },
  },
});

function ConstructorFunction() {
  this.a = 10;
  this.b = 20;
}

ConstructorFunction.prototype.add = function () {
  return this.a + this.b;
};

function SubClassFunction() {
  ConstructorFunction.call(this);
  return this === window;
}

console.log(SubClassFunction());

SubClassFunction.prototype = Object.create(ConstructorFunction.prototype);

SubClassFunction.constructor = SubClassFunction;

const instanceFunction = new SubClassFunction();

console.log(instanceFunction.constructor);
console.log(instanceFunction instanceof SubClassFunction);
console.log(instanceFunction instanceof ConstructorFunction);

/*NEWLY ADDED: using function.prototype.call method to assign object to another consturctor function */
//So, uses function.prototype.call to make it like the super() call

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.default = "No argument needed";
}
function Buyer(n, p) {
  Product.call(this, n, p); //assigns Product constructo function to Buyer
  //we use the call method to assign the 'this' value of Buyer to Product, and invoke it
  //by assigning the n and p arguments of Buyer to Product's name and buyer arguments
  //but in Product, default is already assignd, so no argument is needed
  this.extra = "this is unique to the Buyer constructor function";
}
const b1 = new Buyer("new macbook pro", 2500);
console.log(b1);

function greeting() {
  const arr = [
    this.animal,
    "usually sleep for",
    this.hours,
    "hours a day",
  ].join(" ");
  return arr;
}
const animalFacts = { animal: "Dogs and Cats", hours: "10 to 15" };
console.log(greeting.call(animalFacts));

class Animal {
  constructor(animal, fact) {
    this.animal = animal;
    this.fact = fact;
  }
  facts() {
    return `${this.animal} ${this.fact}`;
  }
}
class Dog extends Animal {
  constructor(animal, fact, life) {
    super(animal, fact); //similar to Functin.prototype.call method
    this.life = life;
  }
  final() {
    return super.facts();
  }
}
const d1 = new Dog("Dog", "Super Sweet", 20);
console.log(d1.final());

function Football(team, best, worst) {
  this.team = team;
  this.best = best;
  this.worst = worst;
}

function NBA(name, mvp, ass) {
  this.name = name;
  this.mvp = mvp;
  this.ass = ass;
}

function Combined(t, b, w, n, m, a) {
  Football.call(this, t, b, w);
  NBA.call(this, n, m, a);
}

Combined.prototype = Object.create(Football.prototype);

Object.assign(Combined.prototype, NBA.prototype);

console.log(Combined.prototype.constructor); //will be Football.constructor, since Combined.prototype is Football.prototype
console.log(Combined.prototype.constructor === Football); //true, see above

Combined.prototype.constructor = Combined;

console.log(Combined.prototype.constructor === Combined); //true since we reassigned it

const combined = new Combined(
  "Bayern",
  "Lewy",
  "Sarr",
  "GSW",
  "Curry",
  "Poole"
);

console.log(combined.__proto__ === Combined.prototype); //true

console.log(combined instanceof Combined); //true
console.log(combined instanceof Football); //true
console.log(combined);

//IN-DEPTH: how inheritnance in JS works:
function Club(name) {
  this.name = name;
}
function Player(name, club) {
  Club.call(this, name); //like the super call in class syntax
  this.club = club;
  this.bio = function () {
    return this.name + " players for " + this.club;
  };
}
Club.prototype.status = function () {
  return "best in the world";
}; //defind on Club.prototype, so not yet inherited by Player

Player.prototype = Object.create(Club.prototype); //now the method status is inheritd by Player
//just calling Club.call(this, name) will just assign new Club's object instnace to Player
//but assigning Player.prototype to Club.prototype will make Club.prototype the prototype of Player.prototype
//and inherit properties defined on Club.prototype, which includes the status method

Player.prototype.constructor = Player;
//without this, Player.prototype.constructor would be the parent constructor, so Club
//as we made prototype of Player.prototype to Club.prototype
//without this, p1, the instance of Player, p1.constructor  would be Club.prototype and NOT Player.prototype
const p1 = new Player("Kimmich", "Bayern");

console.log(p1);
console.log(p1.__proto__ === Player.prototype);
console.log(p1.constructor === Player);
console.log(p1 instanceof Player);
console.log(Club.constructor === Function);
console.log(Club.prototype.constructor === Club);
console.log(Club.__proto__ === Function.prototype);

console.log(p1.status()); //because we made Club.prototype the prototype of Player.prototype
//p1 also inherits the status method through Player.prototype ===> Club.prototype

const obj = { a: 1, b: 2 };

Object.defineProperty(obj, "c", {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.prototype.toArr = function (obj) {
  const a = [];
  if (obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        a.push(key);
      }
    }
    return a;
  } else {
    const o = this;
    for (let key in o) {
      if (o.hasOwnProperty(key)) {
        a.push([key, o[key]]);
      }
    }
    return a;
  }
};

console.log(Object.toArr(obj));

console.log(Object.toArr([1, 2, 3]));

console.log(Object.toArr("abc"));

console.log([1, 2, 3].toArr());
