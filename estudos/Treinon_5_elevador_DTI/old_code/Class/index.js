/*
    A class LoadData faz o papel de banco de dados, acessando o 
    locaStorage para consultar e salvar dados. As classs Elevador e Pessoa recebem 
    as caracteristicas delas em herança para poderem acessar os dados armazenados.
*/

// class LoadData{
//     constructor(){
//         this.load()
//     }
    
//     load(){
//         this.listOfPeople = JSON.parse(localStorage.getItem("@elevador:")) || []
//     }

//     save(){
//         localStorage.setItem("@elevador:", JSON.stringify(this.listOfPeople))
//     }
// }

// export class Elevador extends LoadData{
//     constructor(capacityMax, levelMax){
//         super() 

//         this.capacityMax = capacityMax
//         this.levelMax = levelMax

//         this.levelStop = 0  //andar em que está o elevador.
//     }

//     checkWeight(){//verifica se o elevador pode se mover
//         const weightTotal = this.listOfPeople.reduce((acum, elem) => acum + elem[1], 0) //soma o peso de todos que estão no elevador
        

//         let i = 1
//         console.log(`Peso atual ${weightTotal}`)

//             if(weightTotal == 0){
//                 return 0;
//                 // se weightTotal for igual a 0 o processo é cancelado, por não ter ninguem no elevador
//             }

//             if(weightTotal > this.capacityMax){//verifica se a carga foi excedida e pede para reetirar uma pessoa
//                 console.log(`
//                 O peso já pasdsa da capacidade maxima, 
//                 retire pessoas suficientes :`)

//                 this.listOfPeople.forEach((item) => {
//                     console.log(`${i}-${item[0]}`)
//                     i += 1
//                 })

//                 const peopleDel = Number(prompt("Qual sua escolha ?"))

//                 if(peopleDel > 0){
//                     this.RemovePeople(peopleDel)
//                     return 
//                 }

//                 return 0;
//             }
//     }

//     ToMove(GoToLevel){
//         const finish = () => {
//             const stats = this.checkWeight()

//             if(stats == 0){
//                 return
//             }
        
//             console.log(`Chegamos ao ${GoToLevel} andar. Quem está saindo é:`)

//             this.listOfPeople.forEach((item) => {
//                 console.log(item[0])
//             })

//             this.levelStop = GoToLevel

//             this.listOfPeople = []
//             this.save()
//         }

//         if(GoToLevel > this.levelStop){
//             console.log(`Iniciar verificação de peso para subir para o ${GoToLevel} anadr`)
//             finish()
//         }else{
//             console.log(`Iniciar verificação de peso para descer para o ${GoToLevel} anadr`)
//             finish()
//         }

//     }

//     RemovePeople(i){
//         const newList = this.listOfPeople.filter(people => people != this.listOfPeople[i-1])
//         this.listOfPeople = newList
//         this.save()

//     }

//     AddPeople(){
//         const start = document.querySelectorAll(".start")
//         const addPeople = document.querySelector(".add")
//         const finish = document.querySelector(".finish")
//         let GoToLevel 

//         //faz a captura de qual andar a pessoa quer ir 
//         start.forEach((item) => {
//             const level = this.levelMax

//             item.addEventListener("click", function start(){
              
//                 //restrições, não pode ser maio que o andar maximo(level) e menor que 0
//                 if( Number(item.textContent) > level || Number(item.textContent) < 0){
//                     console.log("faz nada")
//                     return
//                 }

//                 addPeople.classList.remove("hide")
//                 finish.classList.remove("hide")

//                 GoToLevel = Number(item.textContent)//andar que a pessoa quer ir 
//             })
//         })


        
//         addPeople.addEventListener("click", () => {

//             const nome = prompt("Qual seu nome ?")
//             const peso = Number(prompt("qual o seu peso ?"))
            
//             if(nome != null && peso > 0){
//                 new Pessoa(nome, peso)
//             }

//         })


//         finish.addEventListener("click", () => {
//             this.load()
//             this.ToMove(GoToLevel)

//             addPeople.classList.add("hide")
//             finish.classList.add("hide")
            
//         })
        
//     }

// }


// export class Pessoa extends LoadData{
//     constructor(name, weight){
//         super()

//         this.name = name
//         this.weight = weight
//         this.create()
//     }

//     create(){ 
//         const pessoa = [this.name, this.weight]

//         this.listOfPeople = [pessoa, ...this.listOfPeople]
//         this.save()
//     }



// }
