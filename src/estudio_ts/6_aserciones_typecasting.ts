/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Type assertions (also referd as typecasting sometimes) ---------
const someUnknownType: unknown = "I am of type unknown";
// inside some block you know that the type of the variable is string
// Now even if you know the type complier is still unaware of this
// so accessing string methods on the variable is still invalid
//someUnknownType.toLowerCase();
// Don't worry, You can still assert the type or tell the compiler that I know what I am doing
// type of the varialbe is actually a string
// and then you are allowed to access string methods
(someUnknownType as string).toLowerCase();
// Here is the syntax for typecasting
// 1. as keyword -->  someTypeA as someTypeB
// example
const unknownTypeA: unknown = 354;
const someNumberC: number = unknownTypeA as number;
// 2. angular brackets -->  <someTypeB>someTypeA
// the syntax above changes the type of someTypeA to someTypeB
const unknowTypeB: unknown = [35, 345];
const someArrayType: number[] = <number[]>unknowTypeB;

//casting solo ocurre en el tipo y no en el valor real
let someNumberType: number = 34546;
const someUnknownValue: unknown = "This is unknown";
// vlaue of someUnknownValue is not converted to number, only the type has changed here.
someNumberType = someUnknownValue as number;
console.log("typeof stil returns string -", typeof someNumberType);
