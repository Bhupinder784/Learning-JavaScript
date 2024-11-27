//Default Values
// const { name = "Default", age = 30 } = { name: "Alice" };
// console.log(name); // "Alice"
// console.log(age);  // 30
//B.
// const user = { info: { name: "Alice", age: 30 } };
// const { info: { name, age } } = user;
// console.log(name, age); // "Alice", 30

//---------------------------------------------------------
//Object.fromEntries()
const entries = [["name", "Alice"], ["age", 30]];
const obj1 = Object.fromEntries(entries);
console.log(obj1); // { name: "Alice", age: 30 }

//---------------------------------------------------------
//Object.entries()
const obj2 = { name: "Alice", age: 30 };
console.log(Object.entries(obj2)); 
// [["name", "Alice"], ["age", 30]]

//---------------------------------------------------------
const key1 = Symbol("key1");

const user = {
    name : "zizi",
    age : 18,
    [key1] : "keyValue",
    email : "zizi@gmail.com",
    isLoggedIn : false,
    lastLogin : ["monday", "saturday"]
}

user["email"] = "dinga@gmail.com";
//But 
//Object.freeze(user);
user["name"] = "Gursheen";
user["email"] = "gursheen@gmail.com"

console.log(user);

user.greeting = function(){
    console.log("Good Morning...");
}

user.greeting2 = function(){
    console.log(`Good afternoon ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());

const obj = {};
Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false,
});
obj.name = "Bob"; // Error in strict mode
console.log(obj.name); // "Alice"
