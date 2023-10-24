import { Container, Information, SignUp, LogIn } from './style'

import { Input } from '../../components/input'
import { Button } from '../../components/Button/Button'

export function AccessPage(){

    return(
        <Container>
            <main>
                <form>
                    <h2>Entrar</h2>
                    <Input placeholder='Email'/>
                    <Input placeholder='Senha'/>
                    <Button title='Entrar'/>
                </form>

                <form>
                    <h2>Criar conta</h2>
                    <Input placeholder='Nome'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Senha'/>
                    <Button title='Cadastrar'/>
                </form>

                <Information className='botton'>
                    <LogIn>
                        <h2>Que bom que voltou !</h2>
                        <p>
                            Insira suas informações de login e venha 
                            ser um vencedor. 
                        </p>
                        <span>ou</span>
                        <Button title='cria conta'/>
                    </LogIn>

                    <SignUp className='hide'>
                        <h2>Seja bem-vindo!</h2>
                        <p>
                            Cadastre-se em nossa plataforma e venha ser vitorioso.
                        </p> 
                        <span>ou</span>
                        <Button title='Já tenho conta'/>
                    </SignUp>
                </Information>
            </main>
        </Container>
    )
}