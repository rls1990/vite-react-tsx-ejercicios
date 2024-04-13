/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function greet(name: string): void {
  console.log(`hello ${name}`);
  // even this function is returning nothing explicitly,
  // it is returning undefined implicityly.We already know undefined is assignable to void.So, this is valid
}

function discardTheReturnValue(name: string): void {
  console.log(`hello ${name}`);
  return void 333;
}

// Never
// Both functions below never returns
function throwSomeError(): never {
  throw new Error("I am only throwing error");
}

function neverReturn(): never {
  while (true) {
    console.log("ok");
  }
}

// 1. Function type (doesn't care about args and return types)
let someTypedFunction: Function = () => {
  console.log("Any function could have been assigned to this variable");
};

someTypedFunction = (a: number, b: number) => {
  const sum: number = a + b;
  return sum;
};

// valid, because the type doesn't care about the args
// and return types.
someTypedFunction();
// invalid
//someTypedFunction = 3545;

// 2. Explicit (Adhoc) function type declaration

// Here, we declare the arguments inside the function declaration parenthesis
// Name of the arguments in the declaration and in the types does not have to match
// Return type is declared after the fat arrow (=>)
// eg: function below takes two argument, both of type number
// Returns a number
// You can only assign a function which matches this signature
let someAnotherTypeFunction: (arg1: number, arg2: number) => number = (
  a,
  b
) => {
  return a + b;
};

// valid
someAnotherTypeFunction(44, 22);

// invalid
//someAnotherTypeFunction(34, '345');
//const returnedValue: string = someAnotherTypeFunction(345, 346);
//someAnotherTypeFunction = () => {
//console.log('Invalid, this does not match the type declaration');
//}

// valid
// You can always use less parameters then decalared
someAnotherTypeFunction = () => {
  return 3545;
};

// Invalid
// You cannot use more parameters than declared in the type
//someAnotherTypeFunction = (a, b, c) => {
//return a + b + c;
//}

// valid
someAnotherTypeFunction = (nameDoesNotMatter1, nameDoesNotMatter2) => {
  return nameDoesNotMatter1 * nameDoesNotMatter2;
};
