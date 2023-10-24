import { Container, Page, Buy, BodyPopUp, SectionNumbers} from "./style"

import { BsPersonCircle } from "react-icons/bs";
import { BsXLg} from "react-icons/bs"

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button/Button";
import { Subtitle } from "../../components/Subtitle";
import { PopUp } from "../../components/PopUp";

import { Description } from "./Elements/Description";
import { Sectionticket } from "./Elements/SectionTicket";

export function Sales(){
   
    function closePopUp(){
        const showNumbersBody = document.querySelector(".showNumbers div")
        const close = document.querySelector(".close")

        close.classList.add("hide")
        showNumbersBody.remove()
    }

    function showSelectioNumbers(){
        const selectNumbers = document.querySelectorAll(".selectNumber")
        
        if(selectNumbers.length > 0){

            const showNumbersBody = document.querySelector(".showNumbers")
            const numbers = document.createElement("div")
            let showNumber = `` 
            
            selectNumbers.forEach((item) => {
                showNumber += `
                    <div class="numberLuck">
                        <span>${item.textContent}</span>
                    </div>`
                
            })

            numbers.innerHTML = showNumber
            showNumbersBody.append(numbers)
        }
        
    }

    return(
        <Container>
            <Page>

                <header>
                    <Logo/>

                    <div className="login">
                        <BsPersonCircle/>
                    </div>
                    
                </header>

                <main>
                        
                    <Description/>
                    
                    <Subtitle/>

                    <Sectionticket/>

                </main>
                
                <Buy>
                    <Button onClick={showSelectioNumbers}
                    className="buttonDesabled" 
                    title="Comprar" 
                    />
                </Buy>

            </Page>
            
            <BodyPopUp className="close hide">
                <PopUp>
                    <BsXLg onClick={closePopUp}/>
                        <h1>Revisão</h1>
                        <h2>Números selecionaods</h2>

                        <SectionNumbers className="showNumbers">  
                        </SectionNumbers>

                        <Button title="Confirmar"/>
                        
                    </PopUp>
            </BodyPopUp>

        </Container>
    )
}

