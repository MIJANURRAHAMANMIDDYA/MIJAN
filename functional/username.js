const input=require('readline-sync');
let username=input.question("what is your name:");
if(username.length>=3)
{
    console.log("Hello"+username+",how are you?");
}
