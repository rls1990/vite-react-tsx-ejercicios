/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

//Sintaxis (tipos explícitos):

let num1: number = 44;
// valid
num1 = 8595;
// invalid
//num1 = "333";
// valid
num1 = 3445.88;

let str: string = "hello, I can only be a string";
// valid
str = "Just another string";
// invalid
//str = 22;

//Sintaxis (tipos implícitos):
let implicitNum = 44;

// valid
implicitNum = 66;
// invalid
//implicitNum = 'Not allowed';

/*Boolean Number String Array*/

// Boolean

const alwaysTrue: boolean = true;
let onlyBool: boolean = true;
// valid
onlyBool = false;
// invalid
//onlyBool = 'true';

// Number

const againSomeNum = 55;
let someNumberAgain = 66;
// invalid
//someNumberAgain = "44";
// valid
someNumberAgain = 365;

// String

let someStrAgain = "Yes, this is a string";
// valid
someStrAgain = "ok, valid";
// invalid
//someStrAgain = 4345;
//someStrAgain = true;

// Array

const someArray: number[] = [1, 2, 3, 4, 5];
// valid
someArray.push(34546);
// invalid
//someArray.push('ok');
//someArray.push(true);

// Generic array syntax --
const oneMoreArray: Array<number> = [34, 35, 23, 21];
// valid
oneMoreArray.push(4354);
oneMoreArray.push(34.234);
// invalid
//oneMoreArray.push('not valid!');

// Any
let assignAnything: any = 44;
assignAnything = "Assign string";
assignAnything = true;
assignAnything = false;
assignAnything = [35, 45, 44];
let arrayOfAnyType: any[] = [454, 435, "string also", false];

let strictlyNumber: number = 12;
const anAnyTypeOfVariable: any = "Not a number, but can be assigned to number";
// valid
strictlyNumber = anAnyTypeOfVariable;

// Unknown
let unknownVariable: unknown = 44;
assignAnything = "Assign string";
assignAnything = true;
assignAnything = false;
assignAnything = [35, 45, 44];
let unknownArray: unknown[] = [454, 435, "string also", false];
// You cannot access properties on an unknown type of vlaue
// invalid
//unknownVariable.sayHello();
// Cannot assign to other types
let someStrictNumber: number = 66;
const unknownValueAgain: unknown =
  "Not a number, but can be assigned to number";
// invalid
//someStrictNumber = unknownValueAgain;
// but can assign to any type
let someAnyTypeVariable: any = [34, 5];
let someUnknownVariable: unknown = "unknown value";
// valid
someAnyTypeVariable = someUnknownVariable;

// Null
let nullValue: null = null;
// invalid
//nullValue = 33;
let someNumberA: number = 333;
//someNumberA = nullValue;
// valid
let anyValueA: any = 354;
anyValueA = nullValue;
let unknowValueA: unknown = 3543;
unknowValueA = nullValue;
// Undefined
let undefinedValueA: undefined = undefined;
// invalid
//undefinedValueA = 33;
let someNumberB: number = 333;
//someNumberB = undefinedValueA;
// valid
let anyValueB: any = 354;
anyValueA = undefinedValueA;
let unknowValueB: unknown = 3543;
unknowValueA = undefinedValueA;
