import { controls, starTime, time } from "./controls.js";
import { countDown, timerTimeout } from "./contDown.js";

const resetTime = () =>     {
    time.secunds.textContent = '00'
    time.minutes.textContent = '00'
}

const freezTime = () =>     clearTimeout(timerTimeout)

const startClock = () =>    {
    const secunds = Number(time.secunds.textContent) 
    const minutes = Number(time.minutes.textContent)
    const totalSecundos = secunds + (minutes * 60)

    if(totalSecundos <= 0){
        alert('vc ainda não deu o tempo de start')
        return;
    }
       
    starTime() 
    countDown()
}

export{
    resetTime,
    freezTime, 
    startClock
}