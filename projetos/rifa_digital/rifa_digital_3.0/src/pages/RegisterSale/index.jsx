import { Container, Page, PaymentStep, Content, Navegation, FinishBuy} from "./style"

import { Logo } from "../../components/Logo"
// import { ButtonBack } from "../../components/Button/ButtonBack"
// import { ButtonNext } from "../../components/Button/ButtonNext"
import { Button } from "../../components/Button"


import { Register } from "./Elements/Register"
import { ConfirmSale } from "./Elements/ConfirmSale"



export function RegisterSale({...rest}){

    return(
        <Container>
            <Page>
                <header>
                    <Logo/>
                </header>

                <main>
                    <nav>
                        <PaymentStep>
                            <p>Registrar Bilhete</p>
                            <p>Finalizar pagamento</p>

                            <div className="state">  
                                <p>Registrar bilhete</p>
                            </div>
                        </PaymentStep>
                    </nav>

                    <Content>
                        <Register/>
                        <ConfirmSale/>
                    </Content>
                    
                </main>
                <Navegation className="navegation">
                    <Button id="back" className="back" title="voltar" route="/"/>
                    <Button id="next" title="proximo"/>
                </Navegation>

            </Page>

            <FinishBuy className="hide">
                <div>
                    
                    <p>Parabéns você acabou de reservar seus números da sorte !</p>
                    <p>
                        A validação da compra é realizada em até 48h! 
                        Por favor aguarde a validação pacientimente e tenha uma boa sorte !
                        :D
                    </p>
                </div>
            </FinishBuy>
            
        </Container>
    )
}

