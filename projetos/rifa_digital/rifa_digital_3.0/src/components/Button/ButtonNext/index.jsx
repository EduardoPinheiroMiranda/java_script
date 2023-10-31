import { Container } from "./style";

export function ButtonNext({title, ...rest}){
    return(
        <Container id="next" {...rest}>
            <span>
                {title}
            </span>
        </Container>
    )
}