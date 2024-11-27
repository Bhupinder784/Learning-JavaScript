// let tinder = new Object();

let tinder = {};

tinder.id = "1234Abc";
tinder.name = "Zizi";
tinder.logedIn = false;
// console.log(tinder)


const user = {
    email : "user@gmail.com",
    fullname : {
        userFullName : {
            fname : "user",
            lname : "ji"
        }
    }
}
// console.log(user.fullname.userFullName.fname);

const target1 = {a : 1, b : 2};
const target2 = {b : 3, c : 4};
const target3 = {d : 5, e : 6};

const main = Object.assign({}, target1, target2);
console.log(main);

//OR
const main2 = {...target1, ...target2, ...target3};
console.log(main2);                 //{ a: 1, b: 3, c: 4, d: 5, e: 6 }

const users = [
    {
        id : 1234,
        name : "ABC"
    },
    {
        id : 2345,
        name : "BCD"
    },
    {
        id : 345,
        name : "CDE"
    },
    {
        id : 456,
        name : "DEF"
    }
]

// console.log(users[0])

console.log(Object.keys(tinder));
console.log(Object.values(tinder));



//*****************DE-STRUCTURING**************** */
const language = {
    name : "javaScript",
    framework : "node.js"
}

//const {framework} = language;
const {framework : frame} = language;

//console.log(framework);
console.log(frame);
