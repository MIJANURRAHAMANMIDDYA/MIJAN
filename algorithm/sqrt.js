const input=require('readline-sync');
let c=input.question("enter the value to compute:")
let t=parseFloat(c);
let epsilon=1e-15;
while(Math.abs(t-c/t)>epsilon*t)
{
    t=(t+c/t)/2.0;
}
console.log(t);