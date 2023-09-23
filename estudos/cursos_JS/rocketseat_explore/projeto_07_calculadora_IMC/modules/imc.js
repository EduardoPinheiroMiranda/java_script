const listToElements = {
    modal : document.querySelector("dialog"),
    result : document.querySelector(".result span")
}

export const IMC = (weight, height) => {

    const calculeteImc = weight / ((height/100)**2)

    listToElements.result.innerHTML = `O seu IMC é ${calculeteImc}.`
    listToElements.modal.showModal()
}