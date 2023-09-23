import { stopTime, time } from "./controls.js" 
//stopTime é uma função de controle; time ée uma variavel(objeto literal).

let timerTimeout

const countDown = () => {
    
    timerTimeout = setTimeout( () => {
        let secunds = Number(time.secunds.textContent) 
        let minutes = Number(time.minutes.textContent)


        if(minutes <= 0 && secunds <= 0){
            stopTime()
            return;
        }

        if(minutes > 0 && secunds == 0){
            time.minutes.textContent = String(minutes-1).padStart("2", 0)
            secunds = 60
        }

        time.secunds.textContent = String(secunds-1).padStart("2", 0)

        countDown(secunds, minutes)

    }, 1000)
}

export { 
    countDown,
    timerTimeout
}