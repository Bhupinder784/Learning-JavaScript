const user = {
    username : "Gursheen",
    salary : 400000,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website..`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Manish Kumar";
// user.welcomeMessage();



//Arrow function
const newFunction = () => {
    let username = "Guru Ji";
    console.log(this);
}
// newFunction();

const anotherFun01 = (num1, num2) => {
    return num1 + num2;
}

//OR

const anotherFun = (num1, num2) => num1 + num2;
// console.log(anotherFun(10, 20));

//OR

const anotherFun2 = () => ({username : "Harshdeep Singh"});
console.log(anotherFun2());