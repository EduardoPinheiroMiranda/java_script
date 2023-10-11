import { Container } from './style'

export function Input({ id, type, ...rest}){
    return(
        <Container id={id} type={type} {...rest} />
    )
}