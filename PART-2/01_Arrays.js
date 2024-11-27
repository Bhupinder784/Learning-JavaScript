let arr = [1, 2, 3, 4, 5, 6];

arr.push(7);           //Add at last
//console.log(arr); 
arr.pop();             //Remove at last
// console.log(arr);   

arr.unshift(0)         //Add at first
// console.log(arr)    
arr.shift()            //Remove at first
// console.log(arr)    

//console.log(arr.includes(4))    //true
//console.log(arr.indexOf(4));    //3

const newArr = arr.join();      //convert into string
//console.log(newArr);            //1,2,3,4,5


//********slice, splice

const newArr1 = arr.slice(1, 3);        //Orignal string will not change

console.log(arr);
console.log(newArr1)

const newArr2 = arr.splice(1, 3);       //Orignal string will also change

console.log(arr);
console.log(newArr1)

