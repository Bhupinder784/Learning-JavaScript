//For-of
/*
let numbers = [1, 2, 3, 4, 5, 6, 7];
for (const element of numbers) {
    console.log(element);
}
*/

/*
let name = "BHUPINDER";
for (const ch of name) {
    console.log(`Character is: ${ch}`);
}
*/


///Maps----> Unique Value, 

const map = new Map();

map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Uk", "United Kingdom");
map.set("FR", "France");
map.set("US", "United State");
map.set("IN", "India");
// console.log(map);

for(const [key, value] of map){
    console.log(`Key is: ${key}, and Value is: ${value}`);
}