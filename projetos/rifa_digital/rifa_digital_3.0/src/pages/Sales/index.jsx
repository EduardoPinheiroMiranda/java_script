import { Container, Buy, Content} from './style'
import { BsPersonCircle } from "react-icons/bs";

import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button';

export function Sales(){
    return(
        <Container>
            <Logo/>

            <header>
                <BsPersonCircle/>
            </header>

            <main>
                <Content>
                    
                    <Buy>
                        <Button title='Comprar'/>
                    </Buy>
                </Content>
            </main>
            
        </Container>
    )
}