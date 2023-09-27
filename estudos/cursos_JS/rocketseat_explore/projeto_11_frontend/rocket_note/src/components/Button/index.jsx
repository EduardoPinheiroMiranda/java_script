import { Container } from "./style";

function Button({title}){
    return(
        <Container type="button">
            
            {title}
        </Container>
    )
}

export{
    Button
}