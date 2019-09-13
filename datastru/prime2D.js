const access=require('../utility/allfunc');
let arr1=new Array(11);
  for(let p=0;p<11;p++)
    arr1[p]=new Array(26);
arr1[0][0]="....Range..";
arr1[0][1]="...........................Prime number.............................";
arr1[1][0]="....0-100....";
arr1[2][0]="....101-200....";
arr1[3][0]="....201-300...";
arr1[4][0]="....301-400...";
arr1[5][0]="....401-500....";
arr1[6][0]="....501-600....";
arr1[7][0]="....601-700....";
arr1[8][0]="....701-800....";
arr1[9][0]="....801-900....";
arr1[10][0]="....901-1000...";

let range=100;
let cindex=1;
let rindex=1;
for(let i=2;i<=1000;i++)
{
    if(access.isprime(i)&&(i<=range))

    {
       arr1[rindex][cindex]=i;
       cindex++;
    }
    if(i>range)
    {
        range+=100;
        cindex=1;
        rindex++;
    }
}
for(let p1=0;p1<11;p1++)
 {
     for(let k1=0;k1<26;k1++)
     {
         if(arr1[p1][k1]!=undefined)
         
         process.stdout.write(arr1[p1][k1]+"  ");
         
         else
         
            process.stdout.write("  ");
     } 
        console.log();
}
