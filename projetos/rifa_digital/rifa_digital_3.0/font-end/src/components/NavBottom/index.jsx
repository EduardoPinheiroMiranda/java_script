import { Container } from "./style"
import { BsPersonFill, BsBagFill,  BsTicketDetailed, BsPlusCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom"

export function NavBottom({bag, profile, management, ...rest}){

    return(
        <Container>
            <Link className={bag} to="/user/participatingRaffle" >
                <BsBagFill/>
            </Link>
            <Link className={profile} to="/user/profile" >
                <BsPersonFill/>
            </Link>
            <Link className={management} to="/user/managementRaffle" >
                <BsTicketDetailed/>
                <BsPlusCircleFill/>
            </Link>
        </Container>
    )
}