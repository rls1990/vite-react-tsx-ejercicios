/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Enum
enum Fruit {
  Apple,
  Orange,
  Melon,
}

let f: Fruit = Fruit.Apple;

console.log(f === 0); // true
console.log(f === Fruit.Apple); // true
//console.log(f === Fruit.Orange); // false
