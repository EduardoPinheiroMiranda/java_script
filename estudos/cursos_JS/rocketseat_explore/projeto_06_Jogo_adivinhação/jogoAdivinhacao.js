const guess = document.querySelector("#guess")//adivinhar -> número
const attempt = document.querySelector("#attempt")//tentar

const attemptMade = document.querySelector("#attemptMade")
const numberLuck = document.querySelector("#numberLuck")

const title = document.querySelector("#title")
const notici = document.querySelector("#notici")

const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo") 
const reset = document.querySelector("#reset")

const luck = (Math.round(Math.random()*10))//sort -> número para adivinhar

let controller = 0



attempt.onclick = () => {
    
    if( guess.value == luck){
        controller++
        screenOne.classList.add('hide')
        screenTwo.classList.remove('hide')
        attemptMade.innerHTML = `${controller}`
        numberLuck.innerHTML = `${luck}`

    }else{
        notici.innerHTML = "Você errou, esté não é o número certo. Tente novamente!"
        title.setAttribute('style', 'display: none')
        controller++
    } 
}

reset.onclick = () => {
    window.location.reload()
}