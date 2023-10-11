import { Container } from "./style";
import { BsArrowRight } from 'react-icons/bs'

export function ButtonNext({title}){
    return(
        <Container>
            <span>
                {title}
                <BsArrowRight/>
            </span>
        </Container>
    )
}