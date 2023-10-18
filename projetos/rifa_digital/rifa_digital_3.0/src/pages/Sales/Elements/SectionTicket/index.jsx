import { Container, TicketLine} from "./style";

import { Ticket } from '../../../../components/Ticket'

export function Sectionticket(){

    function teste(){
        const ticket = document.querySelectorAll(".ticket")
        
        ticket.forEach((item) => {
            // item.addEventListener('click', () => {
            //     console.log(item.textContent)
            // })
            console.log(item.textContent)
        })
    }
    

    return(
        <Container>
            <TicketLine>
                <Ticket onClick={teste} title="1"/>
                <Ticket onClick={teste} title="2"/>
                <Ticket onClick={teste} title="3"/>
                <Ticket onClick={teste} title="4"/>
                <Ticket onClick={teste} title="5"/>
            </TicketLine>

    
        </Container>
    )
}