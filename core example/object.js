//objects in JavaScript may be defined as an unordered collection of related data, of primitive 
//or reference types, in the form of “key: value” pairs. These keys can be variables or functions
// and are called properties and methods, 
//respectively, in the context of an object.
let Mijanur=
{
    "fullname":"Mijanur Rahaman Middya",
    "age":"22",
    "gender":"Male",
    "Address":"Westbengal"
}
console.log(Mijanur);
console.log(Mijanur.fullname);
Mijanur.age=21;
console.log(Mijanur);
let keys=Object.keys(Mijanur);
console.log(keys);
delete Mijanur.gender;
console.log(Mijanur);