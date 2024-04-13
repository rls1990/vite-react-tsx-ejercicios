/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
const sum = (a: number, b: number) => a + b;

// Now if you try to pass a non-number value to a or b typescript will complainconst
const s1: number = sum(3, 5);

//const s2 = sum(2, "33");
// Error
// Argument of type '"33"' is not assignable to parameter of type 'number'

let num: number = 44;
// valid
num = 8595;
// invalid
//num = "333";
// valid
num = 3445.88;
