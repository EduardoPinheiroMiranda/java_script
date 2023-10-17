import { Container } from "./style";

export function Button({title, ...rest}){
    return(
        <Container {...rest}>
            <span>
                {title}
            </span>
        </Container>
    )
}