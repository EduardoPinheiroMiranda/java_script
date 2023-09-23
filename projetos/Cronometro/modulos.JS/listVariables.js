const listToElements = {
    buttonPlay : document.querySelector(".play"),
    buttonPause : document.querySelector(".pause"),
    buttonStop : document.querySelector(".stop"),
    buttonSettings : document.querySelector(".settings"),
    buttonPlayHourglass : document.querySelector(".hourglassPlay"),
    buttonPauseHourglass : document.querySelector(".hourglassPause"),
    buttonStopHourglass : document.querySelector(".hourglassStop"),
    buttonSoundOn : document.querySelector(".soundOn"),
    buttonSoundOff : document.querySelector(".soundOff"),
    cronometro : document.querySelector(".controlsInClock span:nth-child(1)"),
    temporizador : document.querySelector(".controlsInClock span:nth-child(2)"),
}

const hourClock = {
    seconds : document.querySelector(".runTime span:nth-child(3)"),
    minutes : document.querySelector(".runTime span:nth-child(1)"),
}

export{
    listToElements,
    hourClock
}
