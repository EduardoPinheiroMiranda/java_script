import { Container } from "./style";

import { Ticket } from '../../../../components/Ticket'

const sizeRaffle = 50
const raffle = []

const numbersSold = [
    {
        number: 14,
        status: 'reservado',
    },
    {
        number: 13,
        status: 'reservado',
    },
    {
        number: 22,
        status: 'vendido',
    },
    {
        number: 12,
        status: 'reservado',
    },
    {
        number: 30,
        status: 'reservado',
    },
    {
        number: 34,
        status: 'vendido',
    },
    {
        number: 43,
        status: 'reservado',
    },
    {
        number: 2,
        status: 'vendido',
    },
    {
        number: 15,
        status: 'reservado',
    },
    {
        number: 39,
        status: 'reservado',
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
    
    function selectNumber(numberLuck){
        const tickets = document.querySelectorAll(".ticket")
        
        tickets.forEach((item) => {
            if(item.textContent == numberLuck){
                item.classList.add("selectNumber")
                item.classList.remove("ticket")
            }
        })
    }
    

    return(
        <Container>
            
                {
                    raffle.map( (number) => {

                        if(number.status == 'ticket'){
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
