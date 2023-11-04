import { Container, DataUser, Information } from './style'

import { Button } from '../../components/Button'

export function AccessPage(){
    
    function accessMode(){
        const mode = document.querySelector(".mode")

        mode.classList.toggle("infoTop")
    }

    return(
        <Container>
            <main>
                <DataUser >
                    <form>
                        <h2>Entrar</h2>
                        <input placeholder='Email'/>
                        <input placeholder='Senha'/>
                        <Button title='Entrar' route="/user/profile"/>
                    </form>

                    <form>
                        <h2>Criar conta</h2>
                        <input placeholder='Nome'/>
                        <input placeholder='Email'/>
                        <input placeholder='Senha'/>
                        <Button title='Cadastrar' />
                    </form>
                </DataUser>

                <Information className="mode">
                    <div className="login">
                        <h2>Que bom que voltou !</h2>
                        <p>
                            Insira suas informações de login e venha 
                            ser um vencedor. 
                        </p>
                        <span>ou</span>
                        <Button onClick={accessMode} title="Criar conta"/>
                    </div>

                    <div className="sigUp">
                        <h2>Seja bem-vindo!</h2>
                        <p>
                            Cadastre-se em nossa plataforma e venha ser vitorioso.
                        </p> 
                        <span>ou</span>
                        <Button onClick={accessMode} title="Fazer Login"/>
                    </div>
                </Information>
            </main>
            
        </Container>
    )
}