function display(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            process.stdout.write(` ${arr[i][j]}`);
        }
        console.log("");
    }
}
function isfullarray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i][j]=='0')
            return false;
        }
    }
    return true;
}
function iswin(arr)
{
    if((arr[0][0]=='x'&&arr[0][1]=='x'&&arr[0][2]=='x')
    ||(arr[1][0]=='x'&&arr[1][1]=='x'&&arr[1][2]=='x')
    ||(arr[2][0]=='x'&&arr[2][1]=='x'&&arr[2][2]=='x')
    ||(arr[0][0]=='x'&&arr[1][0]=='x'&&arr[2][0]=='x')
    ||(arr[0][1]=='x'&&arr[1][1]=='x'&&arr[2][1]=='x')
    ||(arr[0][2]=='x'&&arr[1][2]=='x'&&arr[2][2]=='x')
    ||(arr[0][0]=='x'&&arr[1][1]=='x'&&arr[2][2]=='x')
    ||(arr[0][2]=='x'&&arr[1][1]=='x'&&arr[2][0]=='x'))
    {
        console.log("player1 win!!!!");
     return true;
    }
    else if((arr[0][0]=='*'&&arr[0][1]=='*'&&arr[0][2]=='*')
    ||(arr[1][0]=='*'&&arr[1][1]=='*'&&arr[1][2]=='*')
    ||(arr[2][0]=='*'&&arr[2][1]=='*'&&arr[2][2]=='*')
    ||(arr[0][0]=='*'&&arr[1][0]=='*'&&arr[2][0]=='*')
    ||(arr[0][1]=='*'&&arr[1][1]=='*'&&arr[2][1]=='*')
    ||(arr[0][2]=='*'&&arr[1][2]=='*'&&arr[2][2]=='*')
    ||(arr[0][0]=='*'&&arr[1][1]=='*'&&arr[2][2]=='*')
    ||(arr[0][2]=='*'&&arr[1][1]=='*'&&arr[2][0]=='*'))
    {
        console.log("player2 win!!!");
        return true;
    }
    return false;

    }
let arr=[['0','0','0'],['0','0','0'],['0','0','0']];
console.log('array elements are:');
display(arr);
const input=require('readline-sync');
while(true)
{
    console.log("player1 turn:");
    let row=input.question("enter row:");
    let col=input.question("enter col:");
    if(row>2||col>2)
    {
    console.log("invalid row and col");
    }
    else
    {
     arr[row][col]='x';
    display(arr);
    }
    if(iswin(arr)==true)
    break;
    if(isfullarray(arr)==true)
    break;

    console.log("player2 turn:");
    let r=input.question("enter row:");
    let c=input.question('enter col:');
    if(r>2||c>2)
    {
    console.log("invalid row and col");
    }
    else
    {
    arr[r][c]='*';
    display(arr);
    } 
    if(iswin(arr)==true)
    break;

}
if(isfullarray(arr)==true)
{
    if(iswin(arr)==false)
    {
        console.log("match draw!!!");
        
    }
}