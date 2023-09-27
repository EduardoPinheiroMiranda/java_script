import { RiShutDownLine} from 'react-icons/ri'
import {Component, Perfil, Logout} from './stely'

export function Header(){
    return(
        <Component>
            <Perfil>
                <img src="https://github.com/eduardopinheiromiranda.png" alt="usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Eduardo Pinheiro Miranda</strong>
                </div>
            </Perfil>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Component>
    )
} 