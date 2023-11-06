import { Container, UserInfo, Line, Password} from "./style"
import { BsBoxArrowLeft } from "react-icons/bs"
import { Logo } from "../../../components/Logo"
import { NavBottom } from "../../../components/NavBottom"

export function Profile(){

    return(
        <Container>
            <Logo/>
            <main>
                <BsBoxArrowLeft/>
                <div className="foto"></div>
                <h1>Eduardo Pinheiro Miranda</h1>

                <UserInfo>
                    <span>Endereço</span>
                    <div>
                        <span>rua dos rico, 1000000, rumo a riquesa</span>
                    </div>

                    <span>Telefone</span>
                    <div>
                        <span>+55 (33) 999999999</span>
                    </div>

                    <span>Email</span>
                    <div>
                        <span>testandoainterface@gmail.com</span>
                    </div>
                </UserInfo>

                <Line>
                    <hr /> 
                    <span>Alterar senha</span> 
                    <hr />
                </Line>

                <Password>
                    <label htmlFor="senhaAtual">Senha atual</label>
                    <input id="senhaAtual" type="password" />

                    <label htmlFor="novaSenha">Nova senha</label>
                    <input id="novaSenha" type="password" />

                    
                    <label htmlFor="confimarSenha">Confirmar senha</label>
                    <input id="confimarSenha" type="password" />
                </Password>
            </main>
                

            <NavBottom profile="select"/>
        </Container>
    )
}