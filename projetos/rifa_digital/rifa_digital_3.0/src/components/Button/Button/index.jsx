import { Container } from "./style";

export function Button({title}){
    return(
        <Container>
            <span>
                {title}
            </span>
        </Container>
    )
}