//To create a class inheritance, use the extends keyword.

//A class created with a class inheritance inherits all the methods from another class:
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed += speed;
      console.log(this.name+"runs with speed "+ this.speed)
    }
    stop() {
      this.speed = 0;
      console.log(this.name+"stands still");
    }
  }
  
  // Inherit from Animal by specifying "extends Animal"
  class Rabbit extends Animal {
    hide() {
      console.log(this.name+"  is hides!");
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!