
// Log to console
// console.log("Hello World");
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1, 2, 3, 4]); // Array
// console.log({ a: 1, b: 2, c: 3 }); // Object
// console.table({ a: 1, b: 2, c: 3 });
// console.error("This is some error");
// console.warn("This is a warning");
// // To find out time taken, time function can be used.
// console.time('Hello');
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World");
// console.timeEnd('Hello');    
// console.clear();

// Variable declaration
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Helloooo';
// console.log(greeting);



// //Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var Firstname = 'Tom' // Pascal case
// var firstname;


// // LET
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//CONST - meaning constant
// const name = 'John';
// console.log(name);
//Cannot reassign
// name = 'Sara'
//Have to assign a value
//const greetings;

// For arrays and objects, const can be used to change the data but we cannot re-decalre the const.
// Example of Objects
// const person = {
// name: 'Sara',
// age: 30
// };
// console.log(person)
// person.name = 'John'
// person.age = 33
// console.log(person)

// // Not allowed
// const person = {
//     name: 'Joe',
//     age: 21
// }

// Example of Arrays
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// numbers.push(6);
// console.log(numbers);

// // Not allowed
// const numbers = [5, 4, 3, 2, 1];


//PRIMITIVE DATA TYPES IN JS
// STRING
// const name1 = 'John Doe'
// console.log(typeof name1);

// // Number
// const age = 40;
// console.log(typeof age);

// // Boolean
// const hasKids = true;
// console.log(typeof hasKids);

// //Null
// const car = null;
// console.log(typeof car);

// //Undefined
// let test;
// console.log(typeof test);

// // Symbol
// const sym = Symbol();
// console.log(typeof sym);

// // REFERENCE DATA TYPES IN JS
// // ARRAY 
// const hobbies = ['movies', 'music'];
// console.log(typeof hobbies);
// // OBJECT LITERALS
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// console.log(typeof address);
// const today = new Date();
// console.log(typeof today);

// TYPE CONVERSION
// var val;

// // NUMBERS TO STRING
// val = String(555);

// // BOOLEAN TO STRINg
// val = String(true);

// // Date to String
// val = String(new Date());

// // Array to String
// val = String([10, 20, 30, 40]);

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // STRING TO NUMBER
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("hello");
// val = Number([12, 14, 16]);

// val = parseInt('20');
// val = parseFloat('20.11');

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// TYPE COERCION
// const val1 = '5';
// const val2 = 6;
// const sum = Number(val1 + val2);
// console.log(sum);
// console.log(typeof sum);


// MATH

// const num1 = 100;
// const num2 = 50;
// let val;
// // SIMPLE MATH WITH NUMBERS 
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// //MATH Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.pow(8, 3);
// // To get number between 1 to 20 always 
// val = Math.floor(Math.random()*20 + 1);
// console.log(val);

// // STRING
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 88;
// const str = 'This is a sentence used for testing.'
// let val;
// val = firstName + lastName;

// // Concat
// val = firstName + " " + lastName;

// //Append
// val = 'Roger ';
// val += 'That'

// val = "Hello, my name is " + firstName + " and I am " + age;

// // Escaping
// val = 'Thats\'s awesome I can\'t wait';

// //length 
// val = firstName.length;

// //concat
// val = firstName.concat('', lastName);

// //Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// //indexOf
// val = firstName.indexOf("i");
// val = firstName.lastIndexOf("l");

// //CharAt
// val = firstName.charAt('2')

// //Get last char
// val = firstName.charAt(firstName.length - 1);

// // Substring
// val = firstName.substring(0, 4);

// //Slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// //Split
// val = str.split('');

// //Replace
// val = str.replace('testing', 'development');

// //Includes
// val = str.includes('This');

// console.log(val);

// //TEMPLATE LITERALS
// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// //Without template strings(ES5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li> <li>Job: ' + job + '</li> <li>City: ' + city + ' </li> </ul>';

// function hello() { 
//     return 'hello';
// }


// // With templaTe strings / lietrals (ES6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age>30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

// //ARRAY 
// //CREATE SOME ARRAY
// const numbers = [43, 25, 76, 89, 20, 5];
// const numbers2 = new Array(11, 20, 12, 7, 91, 94);
// const fruit = ['Apple', 'Orange', 'Pear', 'Banana'];
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];
// let val;

// // // Get array length
// // val = numbers.length;
// // // Check of is array
// // val = Array.isArray(numbers);
// // // Get single value
// // val = numbers[3];
// // val = numbers[0];
// // // Insert into array
// // numbers[2] = 100;
// // //Find index of value
// // val = numbers.indexOf(100);

// // //MUTATING ARRAY
// // // Add on to end
// // numbers.push(250);

// // //Add on to front
// // numbers.unshift(120);

// // //Take off from end
// // numbers.pop();
// // //Take off from front
// // numbers.shift();

// // // splice values
// // numbers.splice(1, 1);

// // //Reverse 
// // numbers.reverse();

// // // Concatenate arrays
// // val = numbers.concat(numbers2);

// //Sorting arrays
// val = fruit.sort();
// // val = numbers.sort();

// // // Use the compare function
// // val = numbers.sort(function (x, y) {
// //     return x - y;
// // });

// // //Reverse sort
// // val = numbers.sort(function (x, y) {
// //     return y - x;
// // });

// //Find
// function under50(num) { 
//     return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);


//OBJECT LITERALS
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'Florida'
//     },
//     getBirthYear: function () { 
//         return 2022 - this.age;
//     }
// }

// let val;
// val = person;

// //get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val)


// const people = [
//     { name: 'John', age: 30 },
//     { name: 'Mike', age: 23 },
//     { name: 'Nancy', age: 31 },
// ];

// for (let i = 0; i < people.length;i++) { 
//     console.log(people[i].name);
// }

// // DATE & TIME
// let val;
// const today = new Date();
// let birthday = new Date('9-10-1981');


// val = today.getDate();
// val = today.getMonth();
// val = today.getTime();
// birthday.setDate(12);
// birthday.setMonth(11);

// console.log(birthday);

//CONDITIONAL isDoStatement

//const id = 100;
// // EQUAL TO
// if (id == 100) {
//     console.log('Correct');
// } else { 
//     console.log('Not correct');
// }

// //NOT EQUAL
// if (id != 100) {
//     console.log('Correct');
// } else { 
//     console.log('Not correct');
// }

// // EQUAL TO VALUE & DATA TYPE
// if (id === 100) {
//     console.log('Correct');
// } else { 
//     console.log('Not correct');
// }

//Test if undefined
// if (typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`);
// } else { 
//     console.log('NO ID');
// }

// LOGICAL OPERATORS
// const name = 'Steve';
// const age = 20;

// // AND &&
// if (age > 0 && age < 12) {
//     console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//     console.log(`${name} is a teenager`);
// } else { 
//     console.log(`${name} is an adult`);
// }

// // OR ||
// if (age < 16 || age > 65) {
//     console.log(`${name} cannot run in race`);
// } else { 
//     console.log(`${name} is registered for the race`);
// }


//Shorthand ways ----- TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// //SWITCHES
// const color = 'red';
// switch (color) { 
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
// }

// //FUNCTION DECLARATION
// function greet(firstName='John',lastName='Doe') { 
//     return 'Hello ' + firstName + ' ' + lastName;
// }

// // console.log(greet());

// //FUNCTION EXPRESSIONS
// const square = function (x = 3) { 
//     return x * x;
// };
// // console.log(square());

// //IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// // (function (name='Steve') {
// //     console.log(`Hello ${name}`);
// // })('John');

// const todo = {
//     add: function () { 
//         console.log('Add ToDo');
//     },
//     edit: function (id) { 
//         console.log(`Edit ToDo ${id}`);
//     }
// }

// todo.delete = function(id){ 
//     console.log(`Delete Todo ${id}`);
// }

// todo.add();
// todo.edit(20);
// todo.delete(20);

// // FOR LOOP
// for (let i = 0; i < 10; i++) {
//     if (i === 2) { 
//         console.log(`The value of i is ${i}`);
//         continue;
//     } else if(i===5){
//         console.log(`The value of i is ${i}`);
//         break;
//     }
//     console.log(i)
// }

// //WHILE LOOP
// let i = 0;
// while (i < 20) { 
//     console.log(`The value of i is ${i}`);
//     i++;
// }

// const cars = ['Ford', 'Honda', 'Chevy'];
// for (let i = 0; i < cars.length; i++) { 
//     console.log(cars[i]);
// }


// // FOR EACH
// // Array.forEach(Function(current){condition})
// cars.forEach(function (car) {
//     console.log(car);
// });

// // MAP
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Sara' },
//     { id: 3, name:'Janie' }
// ]
// const ids = users.map(function (user) {
//     return user.id;
// });

// console.log(ids);

// //FOR IN LOOP
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age:30
// }
// for (let i in user) { 
//     console.log(`${i} : ${user[i]}`);
// }

//WINDOWS METHODS / OBJECTS / PROPERTIES

//Alert
// alert('Hello');

// //Prompt
// const input = prompt();
// alert(input);

// //Confirm
// if (confirm('Are you sure?')) {
//     console.log('YES');
// } else { 
//     console.log('NO');
// }


// //GLOBAL SCOPE
// var a = 1;
// let b = 2;
// const c = 3;

// // function test() { 
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;
// //     console.log('FUNCTION SCOPE' , a ,b,c);
// // }
// //test();

// if (true) { 
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log('IF SCOPE', a, b, c);
// }

// //VAR Changes the global scope.

// for (var a = 0; a < 10; a++) { 
//     console.log(`Loops ${a}`);
// }
// console.log('GLOBAL SCOPE', a, b, c);


//Objects
// const brad = {
//     name: "Brad",
//     age: 30
// }
// console.log(brad);
// console.log(brad.age);

// //Person Constructor
// function Person(name, dob) {
//     this.name = name;
//     //this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function () {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const personOne = new Person('Steve', '07-20-1991');
// console.log(personOne.calculateAge());

// Each object in js has a prototype and prototype is an object itself.
// All objects inherit their property and methods from their prototype.

//Object literals - Object.prototype
//Object created through constructor - Constructor.prototype

// //Person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');
// // console.log(person1.firstName.greeting());

// //Inherit the person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// //Make customer prototype return customer()
// Customer.prototype.constructor = Customer;

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
// console.log(customer1);

// ES6 

class Person {
    constructor(firsName, lastName) {
        this.firsName = firsName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there ${this.firsName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('Mary', 'Williams', '555-555-5555', 'Standard');
console.log(john);