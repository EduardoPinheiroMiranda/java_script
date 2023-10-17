class LoadData{
    constructor(){
        this.load()
    }
    
    load(){
        this.listOfPeople = JSON.parse(localStorage.getItem("@elevador:")) || []
    }

    save(){
        localStorage.setItem("@elevador:", JSON.stringify(this.listOfPeople))
    }
}

export class Elevador extends LoadData{
    constructor(capacityMax, levelMax){
        super() 

        this.capacityMax = capacityMax
        this.levelMax = levelMax

        this.levelStop = 0
    }

    checkWeight(){
        let weightTotal = 0

        this.listOfPeople.forEach((item) => {
            weightTotal += item[1]
        })

        let i = 1

        console.log(`Peso atual ${weightTotal}`)

            if(weightTotal == 0){
                return 0;
            }

            if(weightTotal > this.capacityMax){
                console.log(`
                O peso já pasdsa da capacidade maxima, 
                retire pessoas suficientes :`)

                this.listOfPeople.forEach((item) => {
                    console.log(`${i}-${item[0]}`)
                    i += 1
                })

                const peopleDel = Number(prompt("Qual sua escolha ?"))

                if(peopleDel > 0){
                    this.RemovePeople(peopleDel)
                    return 
                }

                return 0;
                
            }
            
            
           
        
    }

    ToMove(GoToLevel){
        const finish = () => {
            const stats = this.checkWeight()

            if(stats == 0){
                return
            }
        
            console.log(`Chegamos ao ${GoToLevel} andar. Quem está saindo é:`)

            this.listOfPeople.forEach((item) => {
                console.log(item[0])
            })

            this.levelStop = GoToLevel

            this.listOfPeople = []
            this.save()
        }

        if(GoToLevel > this.levelStop){
            console.log("Iniciar verificação de peso para subir")
            finish()
            console.log(this.levelStop)
        }else{
            console.log("Iniciar verificação de peso para descer")
            finish()
            console.log(this.levelStop)
        }

    }

    AddPeople(){
        const start = document.querySelectorAll(".start")
        const addPeople = document.querySelector(".add")
        const finish = document.querySelector(".finish")
        let GoToLevel 

        start.forEach((item) => {
            const level = this.levelMax

            item.addEventListener("click", function start(){
              
                if( Number(item.textContent) > level || Number(item.textContent) < 0){
                    console.log("faz nada seu sem serviço")
                    return
                }

                addPeople.classList.remove("hide")
                finish.classList.remove("hide")

                GoToLevel = Number(item.textContent) 
            })
            
        })


        
        addPeople.addEventListener("click", () => {
            const nome = prompt("Qual seu nome ?")
            const peso = Number(prompt("qual o seu peso ?"))
            
            if(nome != null && peso > 0){
                new Pessoa(nome, peso)
            }
            
        })
        

        finish.addEventListener("click", () => {
            this.load()
            this.ToMove(GoToLevel)

            addPeople.classList.add("hide")
            finish.classList.add("hide")
            
        })
        
    }

    RemovePeople(i){
        const newList = this.listOfPeople.filter(people => people != this.listOfPeople[i-1])
        this.listOfPeople = newList
        this.save()

    }

}


export class Pessoa extends LoadData{
    constructor(name, weight){
        super()

        this.name = name
        this.weight = weight
        this.create()
    }

    create(){ 
        const pessoa = [this.name, this.weight]

        this.listOfPeople = [pessoa, ...this.listOfPeople]
        this.save()
    }



}
