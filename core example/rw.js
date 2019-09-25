// reading asynchronously
//it will read whenever call it,not sequentially
let value=require('fs');
console.log("starting");
value.readFile('../readfile',"UTF-8", function(error,data) {
    console.log(data);
    });
    console.log("Finished");
//reading synchronously
//read sequentially
var fs = require("fs");
console.log("starting");
var data = fs.readFileSync("../readfile","UTF-8");
console.log(data);
console.log("Finished");
//writing asynchronously
var fs = require("fs");
console.log("Starting to write");
fs.writeFile("../readfile"," he is bad boy", function(error,data) {
console.log("Writing in file completed");
});
//writing synchronously
var fs = require("fs");
console.log("starting");
var data = fs.writeFileSync("../readfile","he wants to be a good man");
console.log("Finished");

