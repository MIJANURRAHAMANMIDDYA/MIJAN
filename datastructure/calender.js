const input=require('readline-sync');
const access=require('../utility/allfunc');
let m=input.question("enter month:");
let y=input.question("enter year:");
let day=['Su','Mo','Tu','We','Th','Fr','Sa'];
let month=['January','February','March','April','May','June','July','August','September','October','November','December'];
let D=access.dayofweek(1,m,y);
console.log(D);
console.log("......calender.......\n"+"......"+month[m-1]+" "+y+"......");
console.log();
let lastday;
let move=0;
for(let i=0;i<day.length;i++)
{
    process.stdout.write(day[i]+"   ");
}
if(m==2)
{
    if(access.leapyear(y))
      lastday=29;
      else
      lastday=28;
}
else if(m==1||m==3||m==5||m==7||m==8||m==10||m==12)
      lastday=31;
 else
      lastday=30;
   console.log();   
 for(let j=1-D;j<=lastday;j++)
 {
     move++;
     if(j<=0)
        process.stdout.write("     ");
        else
        {
         if(move%7!=0)
         {
             if(j<=9)
             
                 process.stdout.write(" "+j+"   ");
             
             else 
               process.stdout.write(j+"   ");
         }
          else
         {
           process.stdout.write(j+"");
           console.log();
         }
     }
 }
 console.log();