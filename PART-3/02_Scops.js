let a = 100;
const b = 200;
var c = 300;
d = 400;

if(true){
    //Local Scope
    let a = 10;
    const b = 20;
    var c = 30;
    d = 40;
}
/*
console.log(a);     //100
console.log(b);     //200
console.log(c);     //30
console.log(d);     //40
*/



function one(){
    const name = "Dinga";

    function two(){
        const productName = "iPhone";
        let price = 34000;

        console.log(name);
    }
    //console.log(productName);
    two();
}
// one();

if(true){
    const username = "zizi";
    if(username == "zizi"){
        const website = ".com";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//1.
//console.log(addOne(5));
function addOne(nums){
    return nums + 1; 
}

//2.
//addTwo(10);        //Cannot access 'addTwo' before initialization
const addTwo = function(nums){
    return nums + 2;
}

