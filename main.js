const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const resetBtn = document.querySelector("[data-reset]");

const resultSeconds = document.querySelector("[data-seconds]");
const resultMiliseconds = document.querySelector("[data-miliseconds]");

let timeSeconds = 0;
let timeMiliseconds = 0;

let interval;

resetBtn.addEventListener("click", () =>{
    clearInterval(interval);
    timeSeconds = 0;
    timeMiliseconds = 0;
    resultMiliseconds.textContent = "00";
    resultSeconds.textContent = "00";

})

stopBtn.addEventListener("click", () =>{
    clearInterval(interval)
})

const startTime = function () {

    clearInterval(interval);

    interval = setInterval(() => {
    timeMiliseconds++;

    if(timeMiliseconds <= 9){
        resultMiliseconds.textContent = `0${timeMiliseconds}`;
    }
    
    if(timeMiliseconds > 9){
        resultMiliseconds.textContent = timeMiliseconds;
    }

    if(timeMiliseconds > 99){
        timeSeconds++;
        resultSeconds.textContent = `0${timeSeconds}`;
        timeMiliseconds = 0;
        resultMiliseconds.textContent = `0${0}`;
    }

    if(timeSeconds > 9){
        resultSeconds.textContent = timeSeconds;
    }

}, 10);
}

startBtn.addEventListener("click", startTime)