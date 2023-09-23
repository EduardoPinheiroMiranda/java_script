import { hourClock, listToElements } from "./listVariables.js"
import { addTimeInClock, finishtime, hourglassRun, startStopWatch } from "./functionClock.js"
import { starHourglass, pauseHourglass, modeTimeTemporizador, soundOff} from "./temporizador/controls.js"
import { startTime, pauseTime, resetTime, modeTimeCronometro} from "./cronometro/controlsTimer.js"

//cormometro
listToElements.cronometro.onclick = () =>   modeTimeCronometro()
listToElements.buttonPlay.onclick = () =>   {
    startStopWatch()
    startTime()
}
listToElements.buttonPause.onclick = () =>  pauseTime()
listToElements.buttonStop.onclick = () =>   resetTime()


//temporizador

listToElements.temporizador.onclick = () =>         modeTimeTemporizador()
listToElements.buttonPlayHourglass.onclick = () =>  {
        
    let seconds = hourClock.seconds.textContent
    let minutes = hourClock.minutes.textContent
    const totalSeconds = seconds + (minutes*60)

        if(totalSeconds == 0){
            alert("valor invalido!")
            modeTimeTemporizador()
            return;
        }
        starHourglass()
        hourglassRun()

}
listToElements.buttonPauseHourglass.onclick = () => pauseHourglass()
listToElements.buttonSettings.onclick = () =>       addTimeInClock()
listToElements.buttonStopHourglass.onclick = () =>  modeTimeTemporizador()

//sounds
listToElements.buttonSoundOn.onclick = () => {
    finishtime.pause()
    soundOff()

}
