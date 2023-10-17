import { Elevador } from "./Class/index.js"

const install = document.querySelector(".install")
const painel = document.querySelector(".painel")
const start = document.querySelectorAll(".start")


const addPeople = document.querySelector(".add")
const finish = document.querySelector(".finish")




install.addEventListener("click", () => {
    // const capacityMax = Number(prompt("Qual o peso maximo suportado pelo elevador ?"))
    // const levelMax = Number(prompt("Quantos andares ele ira percorer ?"))

    const elevador = new Elevador(250,10)
    const levelMax = 10
    
    
    install.classList.add("hide")
    painel.classList.remove("hide")

    elevador.AddPeople()
    
    // start.forEach((item) => {

    //     item.addEventListener("click", function start(){

    //         if(Number(item.textContent) < 0 || Number(item.textContent) > levelMax){
    //             console.log("faz nada seu sem serviço")
    //             return
    //         }
            
    //     })
        

    // })
    
})







/**
 * start.forEach((item) => {

        item.addEventListener("click", function start(){

            if(Number(item.textContent) == 0 || Number(item.textContent) < 0 || Number(item.textContent) > levelMax){
                console.log("faz nada seu sem serviço")
                return
            }

            AddPeople.classList.remove("hide")
            finish.classList.remove("hide")

            elevador.AddPeople(Number(item.textContent))
        })

        item.r
        

    })
 */