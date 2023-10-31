import { Container } from "./style";
import { Link } from "react-router-dom"

export function ButtonBack({title, router, ...rest}){
    return(
        <Container id="back" {...rest}>
            <Link className="link" to={router}>
                <span>
                    {title}
                </span>
            </Link>
            
        </Container>
    )
}