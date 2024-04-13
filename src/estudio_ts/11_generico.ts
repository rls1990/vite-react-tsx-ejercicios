/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Generics
// As we know arrays are just object with numbered index and a lenght properties defined (simplified for this example)
// We can pass a type T which will be the type of the value on a variable of type CustomArray,
// except lenght, lenght is always number
interface CustomArray<T> {
  [key: number]: T;
  length: number;
}
// We can pass any type to the CustomArray and the passed type will act as the type of the elements on
// the declared array
const b: CustomArray<number> = [5, 3, 246, 76];
const c: CustomArray<string> = ["allowed", "allowed"];
