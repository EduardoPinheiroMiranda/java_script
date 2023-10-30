import { Container } from "./style";
import { Link } from "react-router-dom"

import { BsArrowLeft} from 'react-icons/bs'

export function ButtonBack({title, router, ...rest}){
    return(
        <Container id="back" {...rest}>
            <Link to={router}>
                <span>
                    <BsArrowLeft/>
                    {title}
                </span>
            </Link>
            
        </Container>
    )
}