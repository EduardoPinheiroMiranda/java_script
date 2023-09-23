import { IdSetTimeoutCronometro, IdSetTimeoutTemporizador } from "../functionClock.js";
import { hourClock, listToElements } from "../listVariables.js";

const starHourglass = () => {
    listToElements.buttonPlayHourglass.classList.add("hide")
    listToElements.buttonPauseHourglass.classList.remove("hide")

    listToElements.buttonSettings.classList.add("hide")
    listToElements.buttonStopHourglass.classList.remove("hide")
}

const pauseHourglass = () => {
    listToElements.buttonPauseHourglass.classList.add("hide")
    listToElements.buttonPlayHourglass.classList.remove("hide")
        clearTimeout(IdSetTimeoutTemporizador)
}

const resetTimeHourglass = () => {
    clearTimeout(IdSetTimeoutCronometro)
    hourClock.seconds.textContent = "00"
    hourClock.minutes.textContent = "00"

    listToElements.buttonPlayHourglass.classList.remove("hide")
    listToElements.buttonPauseHourglass.classList.add("hide")
    listToElements.buttonStopHourglass.classList.add("hide")
}

const soundOn = () => {
    listToElements.buttonSoundOff.classList.add("hide")
    listToElements.buttonSoundOn.classList.remove("hide")
}

const soundOff = () => {
    listToElements.buttonSoundOff.classList.remove("hide")
    listToElements.buttonSoundOn.classList.add("hide")
}

const modeTimeTemporizador = () => {
    listToElements.cronometro.classList.remove("modeTime")
    listToElements.temporizador.classList.add("modeTime")
    
    resetTimeHourglass()

    listToElements.buttonPlay.classList.add("hide")
    listToElements.buttonPlayHourglass.classList.remove("hide")

    listToElements.buttonStop.classList.add("hide")
    listToElements.buttonSettings.classList.remove("hide")

    listToElements.buttonSoundOff.classList.remove("hide")
}

export{
    starHourglass,
    pauseHourglass,
    modeTimeTemporizador,
    soundOn,
    soundOff
}