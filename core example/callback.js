//Callbacks are a great way to handle something after something else has been completed. 
//By something here we mean a function execution. If we want to execute a function right after 
//the return of some other function, then callbacks can be used.
var users=["Mijanur","Chandan"];
function adduser(username,callback){
    setTimeout(function(){
    users.push(username);
    callback();
    },100);
    }
    
function getuser(){
    setTimeout(function(){
        console.log(users);
    },200);
    }
  adduser("saddam",getuser);
