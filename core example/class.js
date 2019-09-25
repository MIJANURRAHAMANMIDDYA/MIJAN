//class
//A class is a type of function, but instead of using the keyword function to initiate it, 
//we use the keyword class, and the properties is assigned inside a constructor() method.

class Car {
    constructor(brand) {
      this.carname = brand;
    }
  }
 let mycar = new Car("Ford");
  console.log(mycar);
 // getter and setter method
 //The get syntax binds an object property to a function that will be called when that property is looked up.
//The set syntax binds an object property to a function to be called when there is an attempt to set that property.
  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
   let mycar = new Car("Ford");
   console.log(mycar);
  