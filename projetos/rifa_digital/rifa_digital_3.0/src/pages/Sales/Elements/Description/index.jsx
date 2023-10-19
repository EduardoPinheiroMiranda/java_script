import { Container, Section, NextInfo,} from './styled'

import { BsArrowRight, BsCircleFill } from "react-icons/bs";

export function Description(){

    return(
        
        <Container>
            
            <div>
                <span>PS4 slim + 4 jogos</span>
            </div>

            <Section>
                <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.18169-9/18527629_1202385809895002_1921898692436017206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=Lkf5ltY_nxgAX-x0vGY&_nc_oc=AQkTkVdpFiS3paAksxd2iNGmbr46WaqgjABf2d1dBOY-ELXMPDPPVJD582z1dV0ALxM756bu-IV8_05EOUZuD5nX&_nc_ht=scontent-gru2-1.xx&oh=00_AfAQNk61QeY6VmVeqseX9lbPkQG1QX6P4c9ZgZUBktMSVA&oe=6538D49E" alt="Consoiler PS$ slim" />
        
                <div>
                    <p>Descrição da rifa</p>

                    <BsArrowRight/>

                    <ul>
                        <li>Id do concurso: 0000001</li>
                        <li>Valor: R$ 10,00</li>
                        <li>Encerramento: 07/12/2023</li>
                        <li>Categoria do premio: eletronico</li>
                        <li> total de bilhetes: 50</li>
                    </ul>

                    <NextInfo>
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircleFill/>
                    </NextInfo>
                </div>

            </Section>

        </Container>
    )
}