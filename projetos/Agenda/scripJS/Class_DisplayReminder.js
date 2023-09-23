import { Reminder } from "./Class_Reminder.js"
import { listOfElements, listOfdata } from "./listOfVariable.js"

export class DisplayReminder extends Reminder{
    constructor(commitment, dateEvent, description,root){
        super(commitment, dateEvent, description)

        this.root = document.querySelector(root)
        this.sectionBody = this.root.querySelector("section")
        this.updateToPage() 
    }

    organizedReminderList(){
        let newReminderList = []
        let dateChecked = []
        
        this.listOfReminder.forEach((item) => {

            if(!dateChecked.find(arg => arg == item.dateEvent)){
                newReminderList.push(
                    this.listOfReminder.filter(arg => arg.dateEvent == item.dateEvent)
                )
                dateChecked.push(item.dateEvent)
            }
            
        })

        newReminderList.sort(comparison)

        function comparison(a,b){
            if(a[0].dateEvent > b[0].dateEvent){
                return 1
            }
            if(a[0].dateEvent < b[0].dateEvent){
                return -1
            }

            return 0
        }

        return newReminderList

    }

    removeReminder(){
        const displayBody = document.querySelectorAll(".panel")
       
        displayBody.forEach((item) => {
            item.remove()
        })
    }

    openDescription(arg){
        this.updateToPage()

        function comparison(a,b){
            if(a.dateEvent > b.dateEvent){
                return 1
            }
            if(a.dateEvent < b.dateEvent){
                return -1
            }

            return 0
        }

        const reminders = this.listOfReminder.sort(comparison)
        const position = reminders.indexOf(arg)
        const DescriptionH = document.querySelectorAll(".hide") 
            
        
            if(DescriptionH[position]){
                
                DescriptionH[position].classList.toggle("hide")
                DescriptionH[position].classList.toggle("showDescription")
            }

    }

    createReminderDisplay(){
        const reminder = document.createElement("div")
        reminder.classList.add("commitment")

        const reminderContend = `
            <p> 
                <span></span>
                <span class="openDescription">&plus;</span>
                <span class="deliteCommit">&times;</span>
            </p>

            <p class="hide"> 
                <span class="content">&times;</span>
                <span class="close">&times;</span>
            </p>
        `
        reminder.innerHTML = reminderContend

        return reminder
    }

    createDisplayBody(){
        const displayBody = document.createElement("div")
        displayBody.classList.add("panel")

        const bodyReminder = `
            <div class="dateEvent">
                <h2></h2>
            </div>
            <div class="commitmentPanel">                   
            </div> 
        `
        displayBody.innerHTML = bodyReminder

        return displayBody
    }

    addDataToDisplayBody(){
        const newReminderList = this.organizedReminderList()

        newReminderList.forEach((item) => {
            const displayBody = this.createDisplayBody()

            displayBody.querySelector(".dateEvent h2").textContent = `${item[0].dateEvent.split("-").reverse().join(" - ")}`
                
                item.forEach((arg) => {
                    const reminderDisplay = this.createReminderDisplay()
                    const deliteDate = reminderDisplay.querySelector(".deliteCommit")
                    const openDescription = reminderDisplay.querySelector(".openDescription")
                    const close = reminderDisplay.querySelector(".close")

                        reminderDisplay.querySelector(".commitment span:nth-child(1)").textContent = `${arg.commitment}`
                        reminderDisplay.querySelector(".content").textContent = `${arg.description}`
                        displayBody.append(reminderDisplay)

                        deliteDate.addEventListener("click", () => { 
                            this.deliteDate(arg)
                            this.updateToPage()
                        })

                        openDescription.addEventListener("click", () => {
                            this.openDescription(arg)
                        })

                        close.addEventListener("click", () => {
                            this.updateToPage()
                        })
                })

            this.sectionBody.append(displayBody)
        })

    }

    updateToPage(){
        this.removeReminder()
        this.addDataToDisplayBody()
    }
}
