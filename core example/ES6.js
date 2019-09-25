//let,var,const keywords
function f() {
    var x = 1;
    let y = 2;
    const z = 3;
    {
      var x = 100;
      let y = 200;
      const z = 300;
      console.log('x in block scope is', x);
      console.log('y in block scope is', y);
      console.log('z in block scope is', z);
    }
    console.log('x outside of block scope is', x);
    console.log('y outside of block scope is', y);
    console.log('z outside of block scope is', z);
  }
  
  f();
  //for Each
  var colors = ['red', 'green', 'blue'];

function print(val) {
  console.log(val);
}

colors.forEach(print);
// //map
var color = ['red', 'green', 'blue'];

function capitalize(val) {
    return val.toUpperCase();
}

var capitalizedColors = color.map(capitalize);

console.log(capitalizedColors);
//filter
var values = [1, 60, 34, 30, 20, 5];

function lessThan20(val) {
    return val < 20;
}

var valuesLessThan20 = values.filter(lessThan20);

console.log(valuesLessThan20);
//find
var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]
  
  function teenager(person) {
      return person.age > 10 && person.age < 20;
  }
  
  var firstTeenager = people.find(teenager);
  
  console.log('First found teenager:', firstTeenager.name);
  //every
  var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]
  
  function teenager(person) {
      return person.age > 10 && person.age < 20;
  }
  
  var everyoneIsTeenager = people.every(teenager);
  
  console.log('Everyone is teenager: ', everyoneIsTeenager);
  //some
  var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]
  
  function teenager(person) {
      return person.age > 10 && person.age < 20;
  }
  
  var thereAreTeenagers = people.some(teenager);
  
  console.log('There are teenagers:', thereAreTeenagers);
  //reduce
  var array = [1, 2, 3, 4];

function sum(acc, value) {
  return acc + value;
}

function product(acc, value) {
  return acc * value;
}

var sumOfArrayElements = array.reduce(sum, 0);
var productOfArrayElements = array.reduce(product, 1);

console.log('Sum of', array, 'is', sumOfArrayElements);
console.log('Product of', array, 'is', productOfArrayElements);
//arrow
var array = [1, 2, 3, 4];
const sum1 = (acc, value) => acc + value;
const product1 = (acc, value) => acc * value;

var sumOfArrayElements = array.reduce(sum1, 0);
var productOfArrayElements = array.reduce(product1, 1);
console.log(sumOfArrayElements+"\n"+productOfArrayElements);
//ofObject
function printBasicInfo({firstName, secondName, profession}) {
	console.log(firstName + ' ' + secondName + ' - ' + profession);
}

var person = {
  firstName: 'John',
  secondName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher'
}

printBasicInfo(person);
//destructing of array
function printFirstAndSecondElement([first, second]) {
    console.log('First element is ' + first + ', second is ' + second);
}

function printSecondAndFourthElement([, second, , fourth]) {
    console.log('Second element is ' + second + ', fourth is ' + fourth);
}

var array = [1, 2, 3, 4, 5];
printFirstAndSecondElement(array);
printSecondAndFourthElement(array);
//rest
function printColors(first, second, third, ...others) {
    console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others);
  }
  printColors('yellow', 'blue', 'orange', 'white', 'black');
  //shallow copy
  var array = ['red', 'blue', 'green'];
var copyOfArray = [...array];

console.log('Copy of', array, 'is', copyOfArray);
console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray);
//merge array
var defaultColors = ['red', 'blue', 'green'];
var userDefinedColors = ['yellow', 'orange'];

var mergedColors = [...defaultColors, ...userDefinedColors];

console.log('Merged colors', mergedColors);
//default value
function sort(arr = [], direction = 'ascending') {
    console.log('I\'m going to sort the array', arr, direction);
  }
  
 let v=(sort([1, 2, 3]));
 console.log(v);
  console.log(sort([1, 2, 3], 'descending'));
  //template string
  function hello(firstName, lastName) {
    return `Good morning ${firstName} ${lastName}! 
  How are you?`
  }
  console.log(hello('Jan', 'Kowalski'));
  //class
  class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '[X=' + this.x + ', Y=' + this.y + ']';
    }
}

class ColorPoint extends Point {
    static default() {
        return new ColorPoint(0, 0, 'black');
    }

    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return '[X=' + this.x + ', Y=' + this.y + ', color=' + this.color + ']';
    }
}

console.log('The first point is ' + new Point(2, 10));
console.log('The second point is ' + new ColorPoint(2, 10, 'green'));
console.log('The default color point is ' + ColorPoint.default());