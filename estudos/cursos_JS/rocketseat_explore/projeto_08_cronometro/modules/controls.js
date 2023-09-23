const controls = {
    buttomPlay : document.querySelector(".play"),
    buttomPause : document.querySelector(".pause"),
    buttomStop : document.querySelector(".stop"),
    buttomSettings : document.querySelector(".settings"),
    buttomSoundOn : document.querySelector(".sound-on"),
    buttomSoundOff : document.querySelector(".sound-off")
}

const time = {
    minutes : document.querySelector("span:nth-child(1)"),
    secunds : document.querySelector("span:nth-child(3)")
}

const starTime = () =>      {
    controls.buttomPlay.classList.add('hide')
    controls.buttomPause.classList.remove('hide')

    controls.buttomSettings.classList.add('hide')
    controls.buttomStop.classList.remove('hide')
}

const pauseTime = () =>     {
    controls.buttomPause.classList.add('hide')
    controls.buttomPlay.classList.remove('hide')
}

const settingsTime = () =>  {
    let secunds = Number(prompt('Quantos segundos você quer ?'))
        while(secunds >= 60){
            alert('esse valor é invalido, digite outro')//alertas
            secunds = Number(prompt('Quantos segundos você quer ?'))
        }

    let minutes = Number(prompt('Quantos minutos você quer ?'))
        while(minutes >= 60){
            alert('esse valor é invalido, digite outro')//alertas
            minutes = Number(prompt('Quantos minutos você quer ?'))
        }

    time.secunds.textContent = String(secunds).padStart("2", 0)
    time.minutes.textContent = String(minutes).padStart("2", 0)
}

const stopTime = () =>      {
    controls.buttomPause.classList.add('hide')
    controls.buttomPlay.classList.remove('hide')

    controls.buttomStop.classList.add('hide')
    controls.buttomSettings.classList.remove('hide')  
}

const soundOn = () =>       {
    controls.buttomSoundOff.classList.remove('hide')
    controls.buttomSoundOn.classList.add('hide')
}

const soundOff = () =>      {
    controls.buttomSoundOff.classList.add('hide')
    controls.buttomSoundOn.classList.remove('hide')
}

export{
    controls,
    time,
    starTime,
    pauseTime,
    settingsTime,
    stopTime,
    soundOn,
    soundOff
}