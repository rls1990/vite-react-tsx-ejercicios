/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Object

// 1. object type (Not recommended)
// can be used to type anything except
// number, string, boolean, symbol, null, or undefined.

let someObj: object;

someObj = {
  someNo: 123,
  someString: "hi there!",
  sayHi: () => {
    console.log("Hi");
  },
};

// valid (these can lead to bugs, that is exactly why
// this approach is not recommended)

someObj = [];
someObj = () => {
  console.log("another function");
};

// invalid
//someObj = 2354;

// 2. Adhoc object declaration: An actual object like
// structure describing properties and methods

let anotherObject: { someNo: number; someString: string; sayHi: () => void } = {
  someNo: 345,
  someString: "hi",
  sayHi: () => {
    console.log("hi");
  },
};

// invalid
/*
anotherObject = [];
anotherObject = () => {
  console.log("this is also invalid");
};
anotherObject.somethingNotInType =
  "Invalid, because the property is not in type";
anotherObject.someNo = "Invalid, someNo is of type number";
*/
