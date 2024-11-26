console.log("9" > 7);
console.log("009" > 7);

console.log("******")

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

console.log("******")
//Explicit Conversion:
const bigIntValue = 1234567890123456789012345678901234567890n;
console.log(Number(bigIntValue)); // May lose precision
console.log(String(bigIntValue)); // "1234567890123456789012345678901234567890"


console.log("******")
//Implicit Conversion:
const num = 5;
const bigIntValue2 = 10n;
//console.log(num + bigIntValue); // TypeError: Cannot mix BigInt and other types

console.log("*****")
console.log([1, 2, 3].toString()); // "1,2,3"

console.log("*****")
//JSON.stringify()
console.log(JSON.stringify({ key: undefined, func: () => {} })); // "{}"
console.log(JSON.stringify([undefined, 1]));                     // "[null,1]"


//Logical Assignment Operators and Type Coercion(ES2021)
let value = null;
value ||= "default"; // Assign if falsy
console.log(value); // "default"

value = 0;
value ??= 42; // Assign if null or undefined
console.log(value); // 0 (because it isn't null or undefined)


//Number Methods for Safe Type Conversion
console.log(Number.isNaN("abc"));     // false
console.log(Number.isFinite("123"));  // false
console.log(Number.parseInt("42px")); // 42

