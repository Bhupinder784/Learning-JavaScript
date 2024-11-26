let score = "324";
//console.log(typeof score);
console.log(typeof(score));         //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number

score = "324abc";
valueInNumber = Number(score);
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber);         //NaN


score = null;
valueInNumber = Number(score);
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber);         //0

score = true;
valueInNumber = Number(score);
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber);         //1


//to Boolean Conversion

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(valueInNumber)); //boolean
console.log(valueInNumber);         //true

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(valueInNumber)); //boolean
console.log(valueInNumber);         //false