import { Container, LogIn, SingIn } from './style'

import { Input } from '../../components/input'
import { Button } from '../../components/Button'

export function AccessPage(){

    return(
        <Container>
            <main>
                <LogIn>
                    <h2>Entrar</h2>
                    <Input placeholder='Email'/>
                    <Input placeholder='Senha'/>
                    <Button title='Entrar'/>
                </LogIn>

                <SingIn>
                    <h2>Criar conta</h2>
                    <Input placeholder='Nome'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Senha'/>
                    <Button title='Cadastrar'/>
                </SingIn>

                <Information>
                    
                </Information>
            </main>
        </Container>
    )
}