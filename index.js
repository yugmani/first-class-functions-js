// Import stylesheets
import './style.css';

//Functions in a programming language are considered First-Class if they can be:
// ************************************************

// 1. Assigned to regular variables
// -----------------------------------------
const string = 'Foo';
const num = 2;
const bool = false;

const greet = (name) => `Hello ${name}!`;

// ... other primitive data types

console.log(greet('John')); //Hello John!

// 2. Passed as arguments to functions
// -----------------------------------------
const nums = [1, 2, 3, 4, 5];

const addOne = (n) => n + 1;

const addedOne = nums.map(addOne);
console.log(addedOne); //[2, 3, 4, 5, 6]

//We have addOne function that is treated as a variable and passed to .map function. That’s being said, addOne function is indeed a first-class function.

// 3. Returned as results of functions
// -----------------------------------------
const makeCounter = () => {
  let count = 0;
  return () => ++count;
};

const counter = makeCounter();

console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
console.log(counter()); //4
//The makeCounter function returned a function and we assigned it to counter variable. Where counter variable now is holding a regular function.

// 4. Included in any data structures
// -----------------------------------------

const wakeUp = (name) => `${name}, wake up early!`;
const takeShower = (name) => `${name}, take shower!`;
const workOut = (name) => `${name}, workout!`;
const shutUp = (name) => `${name}, shut up!`;

const morningRoutines = [wakeUp, takeShower, workOut, shutUp];

morningRoutines.forEach((routine) => console.log(routine('Harry')));
// Harry, wake up early!
// Harry, take shower!
// Harry, workout!
// Harry, shut up!

