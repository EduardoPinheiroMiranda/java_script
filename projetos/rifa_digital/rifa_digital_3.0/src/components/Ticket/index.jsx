import { Container } from './style'

export function Ticket({title}){
    return(
        <Container>
            <span>
                {title}
            </span>
        </Container>
    )
}