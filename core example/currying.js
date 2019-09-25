//normal function
function volume(l, w, h) {
    return l * w * h;
  }
console.log(volume(2,3,5));  
// currying
//Currying is the process of taking a function with multiple arguments and returning 
//a series of functions that take one argument and eventually resolve to a value.
function volume(l)
{
    return function(w)
    {
        return function(h)
        {
            return l*w*h;
        }
    }
}
console.log(volume(2)(3)(5));