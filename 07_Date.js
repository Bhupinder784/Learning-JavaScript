let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2024-0-13);
// console.log(myCreatedDate.toString());
//-> Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
// console.log(myCreatedDate.toString());
//-> Tue Jan 23 2024 05:03:00 GMT+0530 (India Standard Time)

let myCreatedDate = new Date("07-13-2024");
// console.log(myCreatedDate.toLocaleString());
//-> 13/7/2024, 12:00:00 am

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));        //convering  into secounds


let newDate = new Date();

console.log(newDate.getMonth() + 1);
console.log(newDate.getDate())

