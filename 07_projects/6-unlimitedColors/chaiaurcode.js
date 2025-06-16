// generate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

console.log(randomColor())

const stopBtn = document.querySelector('#stop')
const startBtn = document.querySelector('#start')

let interval;

const StartChangeingColor = function(){

    const ChangeBgColor = function(){
        document.body.style.backgroundColor = randomColor()
    }
    
    if(!interval){
        interval = setInterval(ChangeBgColor, 1000)
    }
    
    console.log("Started setInterval");
}
const StopChangeingColor = function(){
    clearInterval(interval);
    console.log("stpped setInterval");
    interval = null;
}

startBtn.addEventListener('click', StartChangeingColor)
stopBtn.addEventListener('click', StopChangeingColor)