import { Container } from './style'

export function Ticket({title, ...rest}){
    return(
        <Container className='ticket' {...rest}>
            <span>
                {title}
            </span>
        </Container>
    )
}