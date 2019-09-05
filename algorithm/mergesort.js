const input=require('readline-sync');
let size=input.questionInt("enter size of array:");
let list=new Array(size);
for(let i=0;i<size;i++)
{
    list[i]=input.questionInt("value:");
}
console.log(list);
function mergeSort(list)
{
  if(list.length <= 1) 
  return list;
  let middle = parseInt(list.length / 2) ;
  let left = list.slice(0, middle);
  let right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
 {
  var result = [];
  while(left.length || right.length) 
  {
    if(left.length && right.length)
     {
      if(left[0] < right[0])
       {
        result.push(left.shift());
      }
       else
       {
        result.push(right.shift());
      }
    } else if(left.length)
     {
        result.push(left.shift());
      }
      else
       {
        result.push(right.shift());
      }
    }
  return result;
}

console.log(mergeSort(list));



