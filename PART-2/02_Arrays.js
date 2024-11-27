let heros = ["Thor", "Ironman", "Spiderman"];
let dcHeros = ["Superman", "Flash", "Batman"];

//heros.push(dcHeros);
//console.log(heros); //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]


let newArr = heros.concat(dcHeros);
console.log(newArr);



//spread() operator
let anoterArr = [...heros, ...dcHeros];
console.log(anoterArr);


//flat()
const anotherArray = [0, 1, 2, 3, [4, 5, 6, [7, 8, 9], 10, 11, 12]];
const realArr = anotherArray.flat(Infinity);
console.log(realArr);

console.log(Array.isArray("gursheen"));
console.log(Array.from("gursheen"));
console.log(Array.from({name : "gursheen"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));