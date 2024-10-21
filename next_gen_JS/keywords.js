// let Keyword 
console.log("Blocked Scope");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log(i);  // Block Scope(through error) 

// var Keyword 
console.log("Global Scope");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);   // Global Scope

// const Keyword 
const object = { name: "Ammar" };
object.age = 22;
object.name = "Abid";
console.log(object);
// object = "Ammar"; // error (can't change const value but update their properties)