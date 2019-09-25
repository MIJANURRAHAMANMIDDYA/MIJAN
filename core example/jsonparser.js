//json  parser tranforming string to javascript object format
var text = '{ "name":"Mijanur", "age":"22", "city":"kolkata"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "city") {
    return value.toUpperCase();
  } else {
    return value;
  }
});
console.log(obj.name+","+obj.age+","+obj.city);