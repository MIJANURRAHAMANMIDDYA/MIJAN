const input=require('readline-sync');
 let n=input.question("enter value:");
function ispalindromenum(n)
         {
             let sum=0,digit,temp=n;
             while(n!=0)
             {
                 digit=n%10;
                 sum= ((sum*10)+digit);
                 n=parseInt(n/10);
             
             }
             
         
    if(sum==temp)
    
         console.log("palindrome")
    
        else
    
        console.log("not");
    
}
ispalindromenum(n);