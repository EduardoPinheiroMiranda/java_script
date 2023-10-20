import { Container, SectionNumbers} from "./style"

import { BsXLg} from "react-icons/bs"

import { PopUp } from "../../../../components/PopUp"
import { Button } from "../../../../components/Button/Button"

export function PopUpBody({...rest}){
    function closePopUp(){
        const close = document.querySelector(".close")
        close.classList.add("hide")
    }

    return(
        <Container className="close" {...rest}>
            <div>
                <PopUp>
                    <BsXLg onClick={closePopUp}/>
                    <h1>Revisão</h1>
                    <h2>Números selecionaods</h2>
                    <SectionNumbers>

                    </SectionNumbers>

                    <Button title="Confirmar"/>
                    
                </PopUp>
            </div>
        </Container>
    )
}