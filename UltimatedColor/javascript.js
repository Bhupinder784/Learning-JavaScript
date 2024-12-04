const randomColor = function(){
    const hax = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i <= 5; i++){
        color += hax[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(randomColor());
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 100);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

// console.log(startChangingColor())
document.querySelector('#start').addEventListener('click', function(){
    startChangingColor();
})

document.querySelector('#stop').addEventListener('click', function(){
    stopChangingColor();
})

