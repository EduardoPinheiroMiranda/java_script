import { Container, Form, Avatar} from './styled'

import { BsArrowLeft, BsPerson, BsLock, BsMailbox, BsCamera} from 'react-icons/bs'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <BsArrowLeft/>
                </a>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/eduardopinheiromiranda.png" alt="" />
                    <label>
                        <BsCamera/>
                    
                        <input
                            id='avatar'
                            type='file'
                        />
                    </label>
                    

                </Avatar>

                <Input
                    placeholder ='Nome'
                    type = 'text'
                    icon={BsPerson}
                />

                <Input
                    placeholder ='Email'
                    type = 'email'
                    icon={BsMailbox}
                />

                <Input
                    placeholder ='senha atual'
                    type = 'password'
                    icon={BsLock}
                />

                <Input
                    placeholder ='nova senha'
                    type = 'password'
                    icon={BsLock}
                />

                <Button title='Salvar'/>

            </Form>
        </Container>
    )
}