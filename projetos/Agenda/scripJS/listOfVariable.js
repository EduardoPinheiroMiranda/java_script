const  listOfdata = {
    commitment : document.querySelector("#subject"),
    dateEvent : document.querySelector("#date"),
    description : document.querySelector("#description")
}

const listOfElements = {
    buttonSave : document.querySelector("form button"),
    form : document.querySelector(".inputCommitment form")
}

export{
    listOfElements,
    listOfdata
}