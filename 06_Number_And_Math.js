// const score = 400;
// console.log("score :" + score);

// const balance = new Number(100);
// console.log("balance : " + balance);

// console.log("length : " + balance.toString().length);
// console.log(balance.toFixed(5));


// const anotherNumber = 123.8967;
// console.log("Precision : " + anotherNumber.toPrecision(4))  //Precision : 123.9

// const money = 10000000;
// console.log("Indian rupies: " + money.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++++MATH++++++++++++++++++++++++++++++
// console.log(Math);  //{}
// console.log(Math.abs(-4));      //4
// console.log(Math.round(4.6));   //5
// console.log(Math.ceil(4.2));    //5
// console.log(Math.min(1, 2, 3, 4, 0));   //0

//-----------------------------------------
// console.log(Math.random());         //0.8428785886497296
// console.log(Math.random()*10 + 1);  //adding 1 to not getting 0(1 - 9)
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
