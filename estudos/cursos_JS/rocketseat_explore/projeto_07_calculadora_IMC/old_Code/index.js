/*
Preste bastante atenção quando for fazer importações de códigos por modularisação,
 ao importar lemre de utilizar a mesma variavel que esta sendo exportada caso não esteja
usado o IMPORT AS, e lembre de sempre colocar a estenção do arquivo no fim da importação.
*/

const listToElements = {
    form : document.querySelector("form"),
    attention : document.querySelector(".alertClose"),
    alertClose : document.querySelector(".closeNotify"),
    modal : document.querySelector("dialog"),
    result : document.querySelector(".result span"),
    modalClose : document.querySelector(".closeModal")
}

const valueUser = {
    weight : document.querySelector("#weight"),
    height : document.querySelector("#height")
}


//event clicks
listToElements.alertClose.onclick = () => {
    showAlert()
}

listToElements.modalClose.onclick = () => {
    listToElements.modal.close()
}



//star code
listToElements.form.onsubmit = (evento) => {
    evento.preventDefault()

    validateDate(valueUser.weight, valueUser.height)
}

const validateDate = (weight, height) => {

    const peso = Number(weight.value)
    const altura = Number(height.value)

    peso == 0 || altura == 0 ? showAlert() : 
        Number.isNaN(peso) || Number.isNaN(altura) ? showAlert() : 
            IMC(peso, altura)
            
} 

const showAlert = () => {
    listToElements.attention.classList.toggle("alertClose")
    listToElements.attention.classList.toggle("notification")
}

const IMC = (weight, height) => {

    const imc = weight / ((height/100)**2)

    listToElements.result.innerHTML = `O seu IMC é ${imc}.`
    listToElements.modal.showModal()
}