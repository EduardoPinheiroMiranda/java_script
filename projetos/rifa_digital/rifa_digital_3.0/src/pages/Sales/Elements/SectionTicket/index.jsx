import { Container } from "./style";

import { Ticket } from "../../../../components/Ticket"

const sizeRaffle = 50
const raffle = []

const numbersSold = [
    {
        number: 14,
        status: "reserved",
    },
    {
        number: 13,
        status: "reserved",
    },
    {
        number: 22,
        status: "sold",
    },
    {
        number: 12,
        status: "reserved",
    },
    {
        number: 30,
        status: "reserved",
    },
    {
        number: 34,
        status: "sold",
    },
    {
        number: 43,
        status: "reserved",
    },
    {
        number: 2,
        status: "sold",
    },
    {
        number: 15,
        status: "reserved",
    },
    {
        number: 39,
        status: "reserved",
    }
]

for(let i=0; i<sizeRaffle; i++){
    raffle.push(
        {
            number: i+1,
            status: "available"
        }
    )
}

numbersSold.forEach((number) => {

    raffle.forEach((item) => {
        if(number.number == item.number){
            item.status = number.status
        }
    })
})

export function Sectionticket(){
    
    function showPopUp(){
        const popUp = document.querySelector(".hide")
        popUp.classList.remove("hide") 
    }

    function giveUpTicket(event){
        const numberLuck = Number(event.target.textContent)
        const selectNumbers = document.querySelectorAll(".selectNumber")

        selectNumbers.forEach((item) => {
            if(item.textContent == numberLuck){

                item.classList.add("available")
                item.classList.remove("selectNumber")

                item.removeEventListener("click", giveUpTicket, false)
                item.addEventListener("click", selectNumber, false)
                
                ActiveButton()
            }
        })
    }

    function ActiveButton(){
        const ticketsSelects = document.querySelectorAll(".selectNumber")
        const buttonActive = document.querySelector(".buttonActive")

        if(!buttonActive){
            const button = document.querySelector(".buttonDesabled")

            button.classList.add("buttonActive")
            button.classList.remove("buttonDesabled")

            button.addEventListener("click", showPopUp, false)
        }

        if(ticketsSelects.length == 0){

            buttonActive.classList.add("buttonDesabled")
            buttonActive.classList.remove("buttonActive")

            buttonActive.removeEventListener('click', showPopUp, false)

        }
    }
    

    function selectNumber(event){
        const numberLuck = Number(event.target.textContent)
        const ticketAvaliable = document.querySelectorAll(".available")
        
        ticketAvaliable.forEach((item) => {
            if(item.textContent == numberLuck){
                item.classList.remove("available")
                item.classList.add("selectNumber")
                
                item.addEventListener("click", (event) => event.stopPropagation())
                item.addEventListener("click", giveUpTicket, false)
            }
        })
        
        ActiveButton()
    }
    
    
    return(
        <Container>
            
                {
                    raffle.map( (number) => {

                        if(number.status == "available"){

                            return(
                                <Ticket 
                                    key={number.number} 
                                    className={number.status}
                                    title={number.number}
                                    onClick={selectNumber}
                                />
                            )
                        }

                        return(
                            <Ticket 
                                key={number.number} 
                                className={number.status}
                                title={number.number} 
                            />
                        )
                    })
                }
    
        </Container>
    )
}
