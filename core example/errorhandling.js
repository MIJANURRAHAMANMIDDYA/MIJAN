//When a JavaScript statement generates an error, it is said to throw an exception. 
// Instead of proceeding to the next statement, the JavaScript interpreter checks for exception handling code.
//  If there is no exception handler, 
//then the program returns from whatever function threw the exception
function factorial(num)
{
    try
    {
       if(typeof num!=='number')
       {
           throw " enter valid value"
       }
       let result=1;
       for(let k=1;k<=num;k++)
       {
           result=result*k;
       }
       console.log(result);
    }
    catch(err)
    {
        console.log("not validity");
    }
}
factorial("mijan");