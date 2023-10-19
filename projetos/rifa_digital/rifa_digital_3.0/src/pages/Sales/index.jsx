import { Container, Page, Buy} from './style'

import { BsPersonCircle } from "react-icons/bs";

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button/Button';
import { Subtitle } from '../../components/Subtitle';


import { Description } from './Elements/Description';
import { Sectionticket } from './Elements/SectionTicket';
import { PopUpBody } from './Elements/PopUpBody'

export function Sales(){
<<<<<<< HEAD
   
=======
    const tickets = document.querySelectorAll('.selectNumber')
    const buttonBuy = document.querySelector('.buttonBuy')

    if(tickets){
        buttonBuy.classList.add("buttonActive")
    }
    function buy(){
        
    }
>>>>>>> bc3bee9f412796dc127c5d65ebd2de240e86a4c7

    return(
        <Container>
            <Page>

                <header>
                    <Logo/>

                    <div className='login'>
                        <BsPersonCircle/>
                    </div>
                    
                </header>

                <main>
                        
                    <Description/>
                    
                    <Subtitle/>

                    <Sectionticket/>

                </main>
                
                <Buy>
<<<<<<< HEAD
                    <Button className='buttonDesabled' title='Comprar'/>
=======
                    <Button className='buttonBuy' title='Comprar'/>
>>>>>>> bc3bee9f412796dc127c5d65ebd2de240e86a4c7
                </Buy>

            </Page>
            
<<<<<<< HEAD
            <PopUpBody />
=======
            <PopUpBody className='hide'/>
>>>>>>> bc3bee9f412796dc127c5d65ebd2de240e86a4c7

        </Container>
    )
}

