/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Type
// simplest types
type JustNumber = number;
// Now JustNumber can be used as a type
// anywhere we refer to JustNumber it will refer to a type assigned to it
// number in this example
let someNumberConst: JustNumber = 98798;
someNumberConst = 3498;
// invalid
//someNumberConst = 'Invalid, string cannot be assigned to type of JustNumber';
// type doesn't has to be this simple. Remember the object declarations
// Now the type declaration can be re-used
type SomePerson = {
  name: string;
  age: number;
  favColors: string[];
  sayHi: () => void;
};
const person1: SomePerson = {
  name: "Person 1",
  age: 45,
  favColors: ["blue", "pink", "purple", "red", "black", "white"],
  sayHi: () => console.log("hi"),
};
const person2: SomePerson = {
  name: "Person 1",
  age: 78,
  favColors: ["blue", "pink", "purple", "red", "black", "white"],
  sayHi: () => console.log("hi"),
};
// It is not restricted to only objects. Look at the function declaration below
type BinaryOperatorOnNumber = (a: number, b: number) => number;
const add: BinaryOperatorOnNumber = (a, b) => a * b;
// argument name does not needs to be exact only the type and sequence matters
const multiply: BinaryOperatorOnNumber = (num1, num2) => num1 * num2;
