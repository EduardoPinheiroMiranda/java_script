import { Container } from "./style";

import { Ticket } from "../../../../components/Ticket"

const sizeRaffle = 50
const raffle = []

const numbersSold = [
    {
        number: 14,
        status: "reservado",
    },
    {
        number: 13,
        status: "reservado",
    },
    {
        number: 22,
        status: "vendido",
    },
    {
        number: 12,
        status: "reservado",
    },
    {
        number: 30,
        status: "reservado",
    },
    {
        number: 34,
        status: "vendido",
    },
    {
        number: 43,
        status: "reservado",
    },
    {
        number: 2,
        status: "vendido",
    },
    {
        number: 15,
        status: "reservado",
    },
    {
        number: 39,
        status: "reservado",
    }
]

for(let i=0; i<sizeRaffle; i++){
    raffle.push(
        {
            number: i+1,
            status: 'ticket'
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

    function giveUpTicket(numberLuck){
        const selectNumbers = document.querySelectorAll(".selectNumber")

        selectNumbers.forEach((item) => {
            if(item.textContent == numberLuck){
                //item.classList.add("ticket")
                
                console.log(item.textContent)
            }
            // console.log(item)
           
        })
    }

    function ActiveButton(){
        const ticketsSelects = document.querySelectorAll(".selectNumber")
        const buttonActive = document.querySelector(".buttonActive")

        if(ticketsSelects.length == 1 && !buttonActive){
            const button = document.querySelector(".buttonDesabled")

            button.classList.add("buttonActive")
            button.classList.remove("buttonDesabled")

            button.addEventListener("click", () => {
                const popUp = document.querySelector(".hide")
                popUp.classList.remove("hide")           
            })
        }

        if(!ticketsSelects){
            const buttonActive = ducment.querySelector(".buttonActive")
            buttonActive.classList.add("buttonActive")
        }
    }
    

    function selectNumber(numberLuck){
        console.log(numberLuck)
        
        //ActiveButton()
        const ticketAvaliable = document.querySelectorAll(".ticket")
        ticketAvaliable[numberLuck].removeEventListener("click", selectNumber)

    }
    
    


    return(
        <Container>
            
                {
                    raffle.map( (number) => {

                        if(number.status == "ticket"){
                            return(
                                <Ticket 
                                    key={number.number} 
                                    className={number.status}
                                    title={number.number}
                                    onClick={() => selectNumber(number.number)}
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
