import { IdSetTimeoutCronometro } from "../functionClock.js";
import { hourClock, listToElements } from "../listVariables.js";

const startTime = () => {
    listToElements.buttonPlay.classList.add("hide")
    listToElements.buttonPause.classList.remove("hide")
}

const pauseTime = () => {
    listToElements.buttonPause.classList.add("hide")
    listToElements.buttonPlay.classList.remove("hide")
        clearTimeout(IdSetTimeoutCronometro)
}

const resetTime  = () => {
    clearTimeout(IdSetTimeoutCronometro)
    hourClock.seconds.textContent = "00"
    hourClock.minutes.textContent = "00"

    listToElements.buttonPlay.classList.remove("hide")
    listToElements.buttonPause.classList.add("hide")
}

const modeTimeCronometro = () => {
    listToElements.cronometro.classList.add("modeTime")
    listToElements.temporizador.classList.remove("modeTime")

    listToElements.buttonPlay.classList.remove("hide")
    listToElements.buttonPlayHourglass.classList.add("hide")

    resetTime()

    listToElements.buttonSettings.classList.add("hide")
    listToElements.buttonStop.classList.remove("hide")

    listToElements.buttonSoundOff.classList.add("hide")
}

export{
    startTime,
    pauseTime,
    resetTime,
    modeTimeCronometro,
}