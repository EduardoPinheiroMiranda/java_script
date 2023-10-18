import { Container, Page, Buy} from './style'

import { BsPersonCircle } from "react-icons/bs";

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button/Button';
import { Subtitle } from '../../components/Subtitle';


import { Description } from './Elements/Description';
import { Sectionticket } from './Elements/SectionTicket';
import { PopUpBody } from './Elements/PopUpBody'

export function Sales(){
   
    function buy(){
        const popUp = document.querySelector(".popUp")
        popUp.classList.remove("hide")
    }

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
                    <Button onClick={buy} title='Comprar'/>
                </Buy>

            </Page>
            
            <PopUpBody/>

        </Container>
    )
}

