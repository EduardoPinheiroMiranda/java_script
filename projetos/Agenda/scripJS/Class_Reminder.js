export class Reminder {
    constructor(commitment, dateEvent, description){
        this.commitment = commitment
        this.dateEvent = dateEvent
        this.description = description
        this.loadDate()
    }

    loadDate(){
        this.listOfReminder = JSON.parse(localStorage.getItem('@agenda:')) || []
    }

    saveDate(){
        localStorage.setItem('@agenda:', JSON.stringify(this.listOfReminder))
    }

    deliteDate(reminder){
        const newList = this.listOfReminder.filter(newList => reminder != newList)
        this.listOfReminder = newList
        this.saveDate()
    }

    validateData(){
        const dateNow = new Date().toLocaleDateString().split("/")
        const dateEvent = this.dateEvent.split("-").reverse()

        if(this.commitment == 0 || this.dateEvent == 0){
            return true
        }
        if(dateEvent[1] < dateNow[1] || (dateEvent[0] < dateNow[0] && dateEvent[1] == dateNow[1])){
            return true
        }
        return false

    }

    clearBodyInputs(){
        document.querySelector("#subject").value = ""
        document.querySelector("#date").value = ""
        document.querySelector("#description").value = ""

        document.querySelector("#subject").placeholder = "Ir ao jogo de futebol"
        document.querySelector("#description").placeholder = "descrição do comprimisso"
    }

    addReminder(){

        try{
            const dateIsOk = this.validateData()

            if(dateIsOk){
                this.clearBodyInputs()
                throw new Error("Dados inseridos são invalidos ou estão incompletos.")
            }

            const reminder = {
                commitment: this.commitment,
                dateEvent: this.dateEvent,
                description: this.description
            }
    
            this.listOfReminder = [reminder,...this.listOfReminder]
            this.saveDate()
            this.clearBodyInputs()

        }catch(error){
            alert(error.message)
        }

    }

}
