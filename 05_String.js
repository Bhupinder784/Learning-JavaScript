//Tagged Templates
function tag(strings, ...values) {
    return strings[0] + values.map(value => value.toUpperCase()).join("");
}

const name = "Bhupinder";
const message = tag`Hello, ${name}!`;
console.log(message);
// Output: "Hello, BHUPINDER!"
//--------------------------------------------------------------------------------------

const name2 = new String('Dinga');

console.log(name2.length);          //5
console.log(name2.toUpperCase())    //DINGA
console.log(name2.charAt(2));       //n
console.log(name2.indexOf('a'));    //4

const newString = name2.substring(0, 2);
console.log(newString);             //Di

const anotherString = name2.slice(-8, 4);
console.log(anotherString);         //Ding

const name3 = "         hello all, good-afternoon";
console.log(name3.trim());                          //hello all, good-afternoon



//--------------------------------------------------------------------------------------------------
//String.prototype.replaceAll()
const text = "JavaScript is great. JavaScript is versatile.";
console.log(text.replaceAll("JavaScript", "JS"));       //Output: "JS is great. JS is versatile."

console.log(name3.includes("good"));
//--------------------------------------------------------------------------------------------------
//String.prototype.startsWith() and String.prototype.endsWith()
const text2 = "Hello, JavaScript!";
console.log(text2.startsWith("Hello")); // true
console.log(text2.endsWith("JavaScript!")); // true
//--------------------------------------------------------------------------------------------------
//String.prototype.padStart() and String.prototype.padEnd()
const str = "42";
console.log(str.padStart(5, "0")); // "00042"
console.log(str.padEnd(5, "*")); // "42***"
//--------------------------------------------------------------------------------------------------
//Multi-Line Strings with Template Literals
const multiLine = `
This is a multi-line string.
You can write text across multiple lines.
`;
console.log(multiLine);
//--------------------------------------------------------------------------------------------------
//String.prototype.trimStart() and String.prototype.trimEnd() and String.prototype.trim()
const str1 = "   Hello World!   ";
console.log(str1.trimStart()); // "Hello World!   "
console.log(str1.trimEnd());   // "   Hello World!"
console.log(str1.trim());   // "Hello World!"
//--------------------------------------------------------------------------------------------------
//String.prototype.codePointAt() <-- Unicode String Support
const str2 = "😊";
console.log(str2.codePointAt(0)); // 128522
//--------------------------------------------------------------------------------------------------
//String.fromCodePoint()
console.log(String.fromCodePoint(128522)); // 😊
//--------------------------------------------------------------------------------------------------
//String.prototype.matchAll()
const regex = /Java(Script)/g;
const text1 = "JavaScript is JavaScript!";
const matches = text1.matchAll(regex);

for (const match of matches) {
    console.log(match[0]); // Full match
    console.log(match[1]); // Captured group
}
// Output:
// JavaScript
// Script
// JavaScript
// Script
//--------------------------------------------------------------------------------------------------
//Dynamic String Keys
const key = "name";
const obj = {
    [key]: "JavaScript"
};
console.log(obj.name); // "JavaScript"
//--------------------------------------------------------------------------------------------------
// Nullish Coalescing (??) in String Defaults
const text3 = null ?? "Default String";
console.log(text3); // "Default String"
//--------------------------------------------------------------------------------------------------
//Optional Chaining (?.) for String Properties
const str4 = null;
console.log(str4?.toUpperCase()); // undefined


