import { Container } from "./style";
import { BsArrowLeft} from 'react-icons/bs'
export function ButtonBack({title}){
    return(
        <Container>
            <span>
                <BsArrowLeft/>
                {title}
            </span>
        </Container>
    )
}