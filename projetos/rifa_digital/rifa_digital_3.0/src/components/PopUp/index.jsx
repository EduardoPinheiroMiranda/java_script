import { Container, BodyPopUp, Section} from './stely'

import { BsXLg } from 'react-icons/bs'

import { Button } from '../Button'
import { Ticket } from '../Ticket'

export function PopUp(){
    return(
        <Container>
            <BodyPopUp>
                <BsXLg/>
                <h1>Revisão</h1>
                <Section>
                    <span>Números selecionados</span>
                    <div>
                        <Ticket title={1}/>
                        <Ticket title={1}/>
                        <Ticket title={1}/>
                        <Ticket title={1}/>
                        <Ticket title={1}/>
                    </div>
                    

                </Section>
                
                <Button title='Comprar'/>
                
            </BodyPopUp>
        </Container>
    )
}