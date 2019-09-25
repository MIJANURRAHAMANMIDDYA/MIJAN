  let str="Mofi";
  let array=[]
 array =str.split('');
 console.log(array);
 let array1=[];
 while(array.length>0)
 {
 array1.push(array.splice(0,2));
 }
 console.log(array1);