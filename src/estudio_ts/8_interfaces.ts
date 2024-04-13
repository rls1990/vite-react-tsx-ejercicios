/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

interface DifferentPerson {
  name: string;
  age: number;
}

const p3: DifferentPerson = {
  name: "p3",
  age: 23,
};

// interfaces can be extended
// the new interface will have new properties defined as well as
// properties from the old declarations
interface Teacher extends DifferentPerson {
  teaches: string;
}

// Now Teacher has all of the DifferentPersons fields as well as new fields defined
const t1: Teacher = {
  name: "Some teacher",
  age: 325,
  teaches: "typescript",
};

// interface can also be used to define function types
// The earlier sum function declaration can be done with intefaces
interface Sum {
  (a: number, b: number): number;
}
const addNumbers: Sum = (a, b) => a + b;
