import { Container } from "./style";
import { Link } from "react-router-dom";

export function Button({title, route, ...rest}){

    return(
        <Container {...rest}>
            <Link to={route}>
                <span>
                    {title}
                </span>
            </Link>
            
        </Container>
    )
}