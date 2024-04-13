/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Union
// syntax --
// typeA | typeB | typeC
// As you can see symbol '|' is used to do an union.
// a string or a number can be assigned to the variable input
let input: string | number = 44;
input = 55;
input = "this also valid";
// invalid
//input = true;
// the types don't need to be so simple
type A = {
  a: string;
  b: string;
};
type B = {
  c: string;
  d: string;
};
// either a value of type A or B can be assigned to the below declaration
type AOrB = A | B;
const onlyA: A = {
  a: "a",
  b: "b",
};
const onlyB: B = {
  c: "c",
  d: "d",
};
let aOrB: AOrB = onlyB;
aOrB = onlyA;
// Not valid
/*aOrB = {
  notValid: 'Yes this is not valid',
};*/
