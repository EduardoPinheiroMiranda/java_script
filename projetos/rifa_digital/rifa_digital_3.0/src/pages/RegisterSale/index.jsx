import { Container, Content } from './style'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'

export function RegisterSale(){
    return(
        <Container>
            <header>
                <Logo/>
            </header>

            <main>
                <nav>
                    <p>Registrar Bilhete</p>
                    <p>Pagamentos</p>

                    <div className=''>  
                        <p>Registrar bilhete</p>
                    </div>
                </nav>

                <Content>
                    <Input title='Nomne completo' type='text'/>
                </Content>
            </main>

            <footer>

            </footer>
        </Container>
    )
}