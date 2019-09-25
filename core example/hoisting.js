//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of
// their scope before code execution. Inevitably, this means that no matter where functions and 
//variables are declared,
// they are moved to the top of their scope regardless of whether their scope is global or local.
//javascript variable declarations are not hoisted 
x=5;
console.log(x);
var x;
//initialization is hoisted
var a=5;
var b;
console.log(a+b);
b=2;
