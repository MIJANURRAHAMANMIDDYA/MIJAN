//call a perticuler object
//he call() method is a predefined JavaScript method.

//It can be used to invoke (call) a method with an owner object as an argument (parameter).

//With call(), an object can use a method belonging to another object.

var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  console.log(person.fullName.call(person1)); 
  // call with argument
  var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  console.log(person.fullName.call(person1, "Oslo", "Norway"));