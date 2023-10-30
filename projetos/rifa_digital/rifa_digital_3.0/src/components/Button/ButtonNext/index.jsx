import { Container } from "./style";

import { BsArrowRight } from 'react-icons/bs'

export function ButtonNext({title, ...rest}){
    return(
        <Container id="next" {...rest}>
            <span>
                {title}
                <BsArrowRight/>
            </span>
        </Container>
    )
}