//A function that accepts and/or returns another function is called a higher-order function.

//It’s higher-order because instead of strings, numbers, or booleans,
// it goes higher to operate on functions. 
//string as a argument
sayHi=(name) => `Hi, ${name}!`;
 let result = sayHi('Mijanur');
console.log(result);
// number as a argument 
double = (x) => x * 2;
result = double(4);
console.log(result); 
//boolean as a argument
getClearance = (allowed) => (allowed ? 'Access granted' : 'Access denied');

result1 = getClearance(true);
result2 = getClearance(false);
console.log(result1); 
console.log(result2); 
//object as a argument
getFirstName = (obj) => obj.firstName;

result = getFirstName({
  firstName: "Mijanur",
  lastName: "Rahaman"
});
console.log(result); 
//array as a argument
len = (array) => array.length;
result = len([1, 2, 3]);
console.log(result); 


