import { Container, SectionNumbers} from "./style"

import { BsXLg} from "react-icons/bs"

import { PopUp } from "../../../../components/PopUp"
import { Ticket } from "../../../../components/Ticket"
import { Button } from "../../../../components/Button/Button"



export function PopUpBody({...rest}){
    
    function closePopUp(){
        const close = document.querySelector(".close")
        close.classList.add("hide")
    }
   

    return(
        <Container className="close hide" {...rest}>
            <div>
                <PopUp>
                    <BsXLg onClick={closePopUp}/>
                    <h1>Revisão</h1>
                    <h2>Números selecionaods</h2>
                    <SectionNumbers >
                        <div>
                            <div>
                                
                            </div>
                        </div>
                    </SectionNumbers>

                    <Button title="Confirmar"/>
                    
                </PopUp>
            </div>
        </Container>
    )
}