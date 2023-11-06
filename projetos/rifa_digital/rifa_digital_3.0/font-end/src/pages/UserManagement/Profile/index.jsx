import { Container, Avatar, UserInfo, Line, Password} from "./style"
import { BsBoxArrowLeft, BsCameraFill, BsEyeFill, BsEyeSlashFill } from "react-icons/bs"

import { Logo } from "../../../components/Logo"
import { NavBottom } from "../../../components/NavBottom"
import { Button } from "../../../components/Button"

export function Profile(){

    function show(event){// exibe a senha
        const input = document.querySelectorAll(".passwords")
        
        input.forEach((item) => {
            const input = item.querySelector("input")
            const svgOpem = item.querySelector("svg")// olho abert
            const svgClose = item.querySelector(".hide")// olho ricado
            const svgClick = item.querySelector(".showPassword")// elemento com a função click

            if(svgOpem.querySelector("svg path") === event.target || svgOpem === event.target){
                // se o elemento que foi clicado for igual a svgOpen ele deve esconder o olho aberto 
                // e mostrar o olho ricado, depois deve remover a função show e adicionar a close

                input.removeAttribute("type")
                input.setAttribute("type", "text")

                svgClose.classList.remove("hide")
                svgOpem.classList.add("hide")

                svgClick.removeEventListener("click", show)
                svgClick.addEventListener("click", close)
    
            }
            
        })
       
    }

    function close(event){// oculta a senha
        const input = document.querySelectorAll(".passwords")
        
        input.forEach((item) => {
            const input = item.querySelector("input")
            const svgOpem = item.querySelector(".hide")
            const svgClose = item.querySelector("svg:nth-child(2")
            const svgClick = item.querySelector(".showPassword")

            if(svgClose.querySelector("path") === event.target || svgClose === event.target){
                
                input.removeAttribute("type")
                input.setAttribute("type", "password")

                svgClose.classList.add("hide")
                svgOpem.classList.remove("hide")

                svgClick.removeEventListener("click", close)
                svgClick.addEventListener("click", show)

            }
            
        })
        
    }

    return(
        <Container>
            <Logo/>
        
            <main> 
                <BsBoxArrowLeft className="logOof"/>
                <Avatar>
                    <img src="https://github.com/eduardopinheiromiranda.png" alt="picture user" />
                    <label htmlFor="addPicture">
                        <BsCameraFill/>
                    </label>
                    <input id="addPicture" type="file" />
                </Avatar>

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
                    <div className="passwords">
                        <label htmlFor="senhaAtual">Senha atual</label>
                        <input  id="senhaAtual" type="password" />
                        <div className="showPassword" onClick={show}>
                            <BsEyeFill/>
                            <BsEyeSlashFill className="hide"/>
                        </div>
                    </div>

                    <div className="passwords">
                        <label htmlFor="novaSenha">Nova senha</label>
                        <input  id="novaSenha" type="password" />
                        <div className="showPassword" onClick={show}>
                            <BsEyeFill/>
                            <BsEyeSlashFill className="hide" />
                        </div>
                    </div>

                    <div className="passwords">
                        <label htmlFor="confimarSenha">Confirmar senha</label>
                        <input  id="confimarSenha" type="password" />
                        <div className="showPassword" onClick={show}>
                            <BsEyeFill/>
                            <BsEyeSlashFill className="hide" />
                        </div>
                    </div>
                </Password>

                <Button title="Alterar senha" />
            </main>
            

            <NavBottom profile="select"/>
        </Container>
    )
}