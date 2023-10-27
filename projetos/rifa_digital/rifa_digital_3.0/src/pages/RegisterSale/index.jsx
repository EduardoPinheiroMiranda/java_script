import { Container, Page, PaymentStep, Content, Navegation, FinishBuy} from './style'

import { Logo } from '../../components/Logo'
import { ButtonBack } from '../../components/Button/ButtonBack'
import { ButtonNext } from '../../components/Button/ButtonNext'



import { Register } from "./Elements/Register"

export function RegisterSale(){
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
                            <p>Pagamentos</p>

                            <div className=''>  
                                <p>Registrar bilhete</p>
                            </div>
                        </PaymentStep>
                    </nav>

                    <Content>
                        <RegisterSale/>
                    </Content>
                    
                </main>

                <Navegation>
                    <ButtonBack title='voltar'/>
                    <ButtonNext title='proximo'/>
                </Navegation>

            </Page>

            <FinishBuy>
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

