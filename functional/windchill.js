const input=require('readline-sync');
let v=input.questionInt("enter the value of speed:");
let t=input.questionInt("enter the value of temp in fehrenhiet:");
if(t<=50 && v<=120 && v>3)
{
    let w=35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16);
    console.log(" value of w is:"+w);
}
else
{
    console.log("formula is not valid")
}