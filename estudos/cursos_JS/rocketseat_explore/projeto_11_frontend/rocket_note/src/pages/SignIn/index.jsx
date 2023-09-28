import { Container, Form, Background} from './style.js'
import { BsMailbox, BsLock} from 'react-icons/bs'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rockt Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>
                    Crie sua conta
                </h2>

                <Input 
                placeholder = 'Email' 
                type = 'text'
                icon={BsMailbox}
                />

                <Input
                placeholder = 'senha'
                type = 'password'
                icon = {BsLock}
                />

                <Button title='Entra'/>

                <a>Criar conta</a>


            </Form>
            <Background/>
        </Container>
    )
}