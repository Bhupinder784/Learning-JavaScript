function sayHello(){
    console.log("Hello");
    console.log("Hi");
    console.log("hy");
}

// sayHello();

function addTwoNumber(num1, num2){
    console.log(num1 + num2);
} 

// addTwoNumber(10, "10");

function multiply(nums1, nums2){
    return nums1 * nums2;
}

const result =  multiply(2, 4);
// console.log(result);

function greeting(name){
    return `Hello ${name}`;
}

//console.log(greeting("Gursheen"));

//--------------------------------------------------------------

function calculateCarPrice(val1, val2, ...nums){
    return nums;
}

//console.log(calculateCarPrice(1000, 2000, 3000, 4000));   //[3000, 4000]const user = {


const product = {
    name : "iPhone",
    price : 3000
}

function handleObject(anyObject){
    console.log(`Product is ${anyObject.name} and price is ${anyObject.price}`);
}

//handleObject(product);
//OR
// handleObject({
//     name : "samsung",
//     price : 290000
// })


const arr = [10, 20, 30, 40];

function message(getArr){
    return getArr[1];
}

console.log(message(arr));
console.log(message([11, 22, 33, 44]));