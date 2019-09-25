//Promises are used to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations
// where callbacks can create callback hell leading to unmanageable code. 
  
function allfun()
{
  let promise1=function()
  {
    return new Promise(function(resolve,reject){
  
    setTimeout(function(){
      sentsms();
      resolve();
  },100);
    })
}
promise1().then(function(){
  sentmail();
})
}


function sentsms()
{
  console.log("sent sms");
}
function  sentmail()
{
  console.log("mail sent");
}
allfun();