//For loop
/*
for (let index = 1; index <= 10; index++) {
    console.log(index);
}
*/

/*
for(let i = 2; i <= 4; i++){
    for (let j = 0; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
    console.log("-------------")
}
*/

/*
const myArr = ["IronMen", "SpiderMen", "WooMen", "Flash"];
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}
*/

//BREAK statement
/*
for(let i = 0; i <= 10; i++){
    console.log("Number is: " + i);
    if(i == 7){
        console.log("7 is the best number");
        break;
    }
}
*/

for(let i = 0; i <= 10; i++){
    if(i == 5){
        console.log("5 Deduct");
        continue;
    }
    console.log("Number is: " + i);
}