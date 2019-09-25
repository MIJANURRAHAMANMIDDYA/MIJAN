//here apply() method is similar to the call() method
//The apply() method is used to write methods, which can be used on different objects.
// It is different from the function call() because it takes arguments as an array.

//In this example the fullName method of person is applied on person1:

var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));