import { DisplayReminder } from "./Class_DisplayReminder.js"
import { Reminder } from "./Class_Reminder.js"
import { listOfElements, listOfdata } from "./listOfVariable.js"

listOfElements.form.onsubmit = (event) => {
    event.preventDefault()
    
    new Reminder(
        listOfdata.commitment.value,
        listOfdata.dateEvent.value,
        listOfdata.description.value
    ).addReminder()

    new DisplayReminder(
        listOfdata.commitment.value,
        listOfdata.dateEvent.value,
        listOfdata.description.value,
        ".page"
    )
}

new DisplayReminder(
        listOfdata.commitment.value,
        listOfdata.dateEvent.value,
        listOfdata.description.value,
        ".page"
)