const input=require('readline-sync');
let c=input.questionInt("enter the value of celcius:") 
let f=(c*9/5)+32;
console.log("value of fahrenheit is:"+f);
f=input.questionInt("enter value of f:");
c=(f-32)*5/9;
console.log("value of celcius is :"+c);