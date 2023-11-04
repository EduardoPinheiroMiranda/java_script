import { Container } from "./style"

import { Logo } from "../../../components/Logo"
import { NavBottom } from "../../../components/NavBottom"

export function ManagementRaffle(){

    return(
        <Container>
            <Logo/>
            gerenciar rifas
            <NavBottom management="select"/>
        </Container>
    )
}