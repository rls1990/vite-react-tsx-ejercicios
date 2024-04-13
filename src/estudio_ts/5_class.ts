/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Class

class Person {
  // property type declaration
  name: string;
  age: number = 0;
  // just like a simple function declaration right?
  // But it implicitly returns the instance of the class -- type of class
  // the Person in this case
  constructor(name: string, age: number) {
    // valid
    this.name = name;
    this.age = age;
    // invalid, the property type is not declared
    //this.wow = "wow!";
  }
  // just like a normal function again
  setAge: (age: number) => void = (age) => {
    this.age = age;
  };
  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}
// user2 is a type of Person
let user2: Person = new Person("User 2", 34);
// user1 is also of type Person, implicitly set by the compiler
let user1 = new Person("User 1", 35);
// invalid
//user1 = "invalid, users type is Person";
