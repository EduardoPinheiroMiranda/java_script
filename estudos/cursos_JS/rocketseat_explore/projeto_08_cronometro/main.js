import { pauseTime, stopTime, soundOn, soundOff, settingsTime } from "./modules/controls.js" //unction controls
import { controls, time } from "./modules/controls.js" //variaveis
import { freezTime, resetTime, startClock } from "./modules/secundaryControls.js"


//click events
controls.buttomPlay.onclick = () =>     startClock()

controls.buttomPause.onclick = () =>    {
    pauseTime()
    freezTime()
}         
controls.buttomStop.onclick = () =>     {
    stopTime()
    resetTime()
} 


controls.buttomSoundOn.onclick = () =>  soundOn()
controls.buttomSoundOff.onclick = () => soundOff()


controls.buttomSettings.onclick = () => settingsTime()

