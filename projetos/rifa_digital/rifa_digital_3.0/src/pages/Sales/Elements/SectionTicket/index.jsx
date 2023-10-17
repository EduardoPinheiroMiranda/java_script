import { Container, TicketLine} from "./style";

import { Ticket } from '../../../../components/Ticket'

export function Sectionticket(){

    function teste(){
        console.log("oi")
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