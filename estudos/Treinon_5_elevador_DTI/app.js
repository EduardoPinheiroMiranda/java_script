import { Elevador } from "./Class/index.js"

const install = document.querySelector(".install")
const painel = document.querySelector(".painel")


install.addEventListener("click", () => {

    const capacityMax = Number(prompt("Qual o peso maximo suportado pelo elevador ?"))
    const levelMax = Number(prompt("Quantos andares ele ira percorer ?"))

    const elevador = new Elevador(capacityMax,levelMax)
    
    install.classList.add("hide")
    painel.classList.remove("hide")

    elevador.AddPeople()
    
})

/*
    Essa é a primeira parte, ao clicar no botão instalar progagrama
    vc deve fornecer qual o peso máximo suportado pelo elevador e 
    quantos andartes ele deve percorer, em segida será instaciado a classi elevador.

    Após isso ele remove o botão e mostra o painel com os andares q pode escolher.

    No ultimo passo ele entra na class Elevador para começar o processo.
*/