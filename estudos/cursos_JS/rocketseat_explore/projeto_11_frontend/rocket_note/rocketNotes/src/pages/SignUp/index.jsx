import { Container, Form, Background} from './style.js'
import { BsMailbox, BsLock, BsPerson} from 'react-icons/bs'

import { Input } from '../../components/Input/index.jsx'
import { Button } from '../../components/Button/index.jsx'

export function SignUp(){
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
                icon={BsPerson}
                />

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

                <Button title='Cadastrar'/>

                <a>Voltar para login</a>


            </Form>
            <Background/>
        </Container>
    )
}