//IMPORTANT: practical usage of static properties and the constructor method
class Users {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    Users.userCount += 1;
  }
}

console.log(Users.userCount); //0
const p1 = new Users("u1"); //constructor() is called and Users.userCount+=1 is executed, see explanation
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
