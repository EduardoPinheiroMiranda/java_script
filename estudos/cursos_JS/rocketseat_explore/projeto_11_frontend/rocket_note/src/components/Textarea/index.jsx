import { Container } from './style'

export function Textarea({valor, ...rest}){
    return(
        <Container {...rest}>
            {valor}
        </Container>
    )
}