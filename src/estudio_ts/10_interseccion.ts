/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Intersection
// Combina varios types
// syntax
// typeA & typeB & typeC
// '&' symbol is used to combine two types which creates a new type
// with all the types of typeA, typeB and typeC combined.
type SomeA = {
  a: string;
};
type SomeB = {
  b: string;
};
// Now only a value having all the fields declared in SomeA
// and SomeB combined can be assigned to following declaration
type SomeTypeAAndB = SomeA & SomeB;
const SomeAAndBValue: SomeTypeAAndB = {
  a: "This comes from the first declaration",
  b: "This comes from the second declaration",
};
// invalid
/*const oneMore: SomeTypeAAndB = {
// invalid
  d: "d is not defined in any of two types combined"
};*/
