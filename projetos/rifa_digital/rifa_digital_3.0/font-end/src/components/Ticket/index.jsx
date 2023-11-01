import { Container } from './style'

export function Ticket({title, ...rest}){

    return(
        <Container {...rest}>
            <span >
                {title}
            </span>
        </Container>
    )
}