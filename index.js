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

//We can store functions in arrays and as you guessed we can also store them in objects and loop through them as often.

// Closures
// ********************

const add = (x) => (y) => x + y;

const add5 = add(5); // add5 = (y) => 5 + y;

const add10 = add(10); // add10 = (y)=> 10 + y;

console.log(add5(1)); //6
console.log(add10(1)); //11;

// add is a higher order function since it returns a function.
// But add5 and add10 are closures. Because they have values 5 and 10 respectively enclosed(bound) in their parent's lexical scope and still accessible by them.

// Note 1: The relationship between a closure and a higher-order function, is like parent and child, we will not be able to have a closure without a higher-order function

// Definition 1:
// A closure is a function that's returned by another function and has access to its lexical scope bindings

// Explanation:
// `counter` (or the lambda function) is the closure in this example and has access to `count` variable that is inside `makeCounter` function

// Definition 2:
// A closure is what a function has in "conclusion" up till the point of execution

// (Degrading) Explanation:
// `count` variable is the closure for `makeCounter`
// And `counter` is just a function :D