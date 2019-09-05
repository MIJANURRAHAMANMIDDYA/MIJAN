const input=require('readline-sync');
let n=input.questionInt("enter value of n:");
let N=Math.pow(2,n);
findnum(1,N);
function findnum(first,last)
{
    
     while(first<=last)
    {
    let mid=parseInt((first+last)/2);
      console.log(mid+" is your number:yes or no");
      let v=input.question("enter value:");
      if(v=='yes')
        {
          console.log("hey i find the nuber!!! "+mid);
          process.exit(0);
       }
       else 
       {
        console.log("type yes/no for number is between "+first+" to "+(mid-1)+" and from "+(mid+1)+" to "+last) ;
        let k=input.question("value:");
        if(k=='yes')
        {
            last=mid-1;
        }
        else
        {
            first=mid+1;
        }
      }
    }
    if(first>last)
    {
        console.log("you are wrong!!!");
    }
}