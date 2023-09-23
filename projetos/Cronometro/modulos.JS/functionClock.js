import { modeTimeTemporizador, soundOn } from "./temporizador/controls.js"
import { hourClock } from "./listVariables.js"

let IdSetTimeoutCronometro = 0
let IdSetTimeoutTemporizador = 0

const finishtime = new Audio("./Sounds/40783146_timer-alarm-clock-beeping-close-up-perspective-01.mp3")
    
const addTimeInClock = () => {
    let seconds = Number(prompt("Quantos segundos ?")) 
    let minutes = Number(prompt("Quantos minutos ?"))
        
    hourClock.seconds.textContent = String(seconds).padStart("2", 0)
    hourClock.minutes.textContent = String(minutes).padStart("2", 0)
 
}


const hourglassRun = () => {
    IdSetTimeoutTemporizador = setTimeout(() => {

        let seconds = Number(hourClock.seconds.textContent)
        let minutes = Number(hourClock.minutes.textContent)

            if(seconds >= 60){
                hourClock.minutes.textContent = String(minutes-1).padStart("2", 0)
            }
            if(minutes == 0 && seconds == 0){
                modeTimeTemporizador()
                finishtime.play()
                soundOn()
                return;
            }

            hourClock.seconds.textContent = String(seconds-1).padStart("2", 0)

            hourglassRun()

    },1000)
}

const startStopWatch = () => {
    IdSetTimeoutCronometro = setTimeout(() => {

        let seconds = Number(hourClock.seconds.textContent) 
        let minutes = Number(hourClock.minutes.textContent)
        
            if(seconds == 59){
                hourClock.minutes.textContent = String(++minutes).padStart("2", 0)
                hourClock.seconds.textContent = "00"
            }else{
                hourClock.seconds.textContent = String(++seconds).padStart("2", 0)
            }

            startStopWatch()

    },1000)
}

export{
    addTimeInClock,
    hourglassRun,
    startStopWatch,
    IdSetTimeoutCronometro,
    IdSetTimeoutTemporizador,
    finishtime,
}