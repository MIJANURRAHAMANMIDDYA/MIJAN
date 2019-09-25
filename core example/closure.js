//Closure means that an inner function always has access to the vars and parameters of its outer function, 
//even after the outer function has returned.
function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        console.log(outerVariable);
    }

    return InnerFunction();
}
 OuterFunction();


