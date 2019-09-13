const stack=require('../utility/stake');
let express="(5+6)+(7+8)/(4+3)(5+6)"
for(let k=0;k<express.length;k++)
{
   if(express.charAt(k)=='(')
    stack.push(express.charAt(k));
    else if(express.charAt(k)==')')
      stack.pop();
}

if(stack.isempty()==true)
{
    console.log("it is ok");
}
else
{
    console.log("wrong");
}
