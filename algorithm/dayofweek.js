const input=require('readline-sync');
let m=input.questionInt("enter value of month:");
let d=input.questionInt("enter value of day:");
let y=input.questionInt("enter value of year:");
let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let month=["January","February","March","April","May","June","July","August",
     "September","October","November","December"];
let y1=y-parseInt((14-m)/12);
let x=y1+parseInt(y1/4)-parseInt(y1/100)+parseInt(y1/400);
let m1=m+12*((14-m)-2);
let d1=(d+x+parseInt(31*m1/12))%7;
console.log("day of the week:"+day[d1]);
console.log("month is:"+month[m]);