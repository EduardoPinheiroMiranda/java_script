import { Container } from "./style"

import { Logo } from "../../../components/Logo"
import { NavBottom } from "../../../components/NavBottom"

export function Profile(){

    return(
        <Container>
            <Logo/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit odit quam tempore error. Odit provident aut, eveniet officia itaque numquam quasi, natus suscipit nihil alias aperiam sit autem, dignissimos reiciendis.
            <NavBottom profile="select"/>
        </Container>
    )
}