//An interface is usually a behavior described through methods or properties.

//Interfaces can be used to simply describe expectations: they don’t need to implement any logic 
//at all.
const myInterface = Symbol('myInterface');
//import myInterface from 'myInterface';
 
class Foo {
    constructor(value) {
        this.value = value;
    }
 
    _inc () {
      console.log(this.value = this.value + 1);
    }
 
    _getValue () {
        console.log(this.value);
    }
   }

let obj=new Foo(12);
obj._inc();