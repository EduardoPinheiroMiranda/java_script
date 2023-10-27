import { Container, Section, NextInfo,} from './styled'

import { BsArrowRight, BsCircleFill } from "react-icons/bs";

export function Description(){

    return(
        
        <Container>
            
            <div>
                <span>PS4 slim + 4 jogos</span>
            </div>

            <Section>
                <img src="https://scontent.ftfl2-1.fna.fbcdn.net/v/t1.18169-9/18527629_1202385809895002_1921898692436017206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=c2f564&_nc_ohc=GBOIo6dCeRcAX9LPKV-&_nc_oc=AQm6z6Wpal9E46KksdbFDaVcliFvbXgJXkxeAVJacOMz8Kcorit3Eh7mtpauf0EWues&_nc_ht=scontent.ftfl2-1.fna&oh=00_AfBgjXPvJhxjvLAE88rFmZw4a4xWe0E3Xwjtxvzghdrstw&oe=6561B31E" alt="Consoiler PS4 slim" />
        
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