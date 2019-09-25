// Local scope
//Variables declared within a JavaScript function, become LOCAL to the function.
function add(num1,num2){
    return num1+num2;
}
console.log(add(2,3));
//global scope
//A variable declared outside a function, becomes GLOBAL.
let carname="BMW";
function msg()
{
    console.log("I have "+carname);
}
msg();