import { Container } from "./style"

import { Logo } from "../../../components/Logo"
import { NavBottom } from "../../../components/NavBottom"

export function BagRaffle(){

    return(
        <Container>
            <Logo/>
            Rifas que estou participando
            <NavBottom bag="select"/>
        </Container>
    )
}