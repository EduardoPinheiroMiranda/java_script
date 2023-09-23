import { RiShutDownLine} from 'react-icons/ri'
import {Component, Profile, Logout} from './stely'

export function Header(){
    return(
        <Component>
            <Profile>
                <img src="https://github.com/eduardopinheiromiranda.png" alt="usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Eduardo Pinheiro Miranda</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Component>
    )
} 