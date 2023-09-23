import { IMC } from './modules/imc.js'
import { validateDate} from './modules/validatedate.js'
import { showAlert } from './modules/showAlert.js'

const listToElements = {
    form : document.querySelector("form"),
    alertClose : document.querySelector(".closeNotify"),
    modal : document.querySelector("dialog"),
    modalClose : document.querySelector(".closeModal"),
    weight : document.querySelector("#weight"),
    height : document.querySelector("#height")
}

//event clicks
listToElements.alertClose.onclick = () => {
   showAlert.close()
}

listToElements.modalClose.onclick = () => {
    listToElements.modal.close()
}

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        listToElements.modal.close()
    }
})

//star code
listToElements.form.onsubmit = (event) => {
    event.preventDefault()
    
    const peso = Number(listToElements.weight.value)
    const altura = Number(listToElements.height.value)
    
    if(peso == 0 || altura == 0){
        showAlert.open()
    }else{
        validateDate(peso,altura) ? 
            showAlert.open() : IMC(peso,altura)
    }
}

listToElements.form.oninput = () => {
    showAlert.close()
}