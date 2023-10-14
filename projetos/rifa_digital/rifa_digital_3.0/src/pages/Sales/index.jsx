import { 
    Container, Buy, Content, 
    Description, Section, NextInfo,
    SectionTickets
} from './style'

import { BsPersonCircle, BsArrowRight, BsCircleFill } from "react-icons/bs";

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button/Button';
import { Subtitle } from '../../components/Subtitle';
import { Ticket } from '../../components/Ticket';
import { PopUp } from '../../components/PopUp';

export function Sales(){

    function teste(){
        alert("oi mundo")
    }

    return(
        <Container>
            <Logo/>

            <header>
                <BsPersonCircle/>
            </header>

            <main>
                <Content>
                    <Description>
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

                    </Description>
                    
                    <Subtitle/>

                    <SectionTickets>
                        <div>
                            <Ticket onClick = {teste} title={1}/>
                            <Ticket title={2}/>
                            <Ticket title={3}/>
                            <Ticket title={4}/>
                            <Ticket title={5}/>
                        </div>

                        <div>
                            <Ticket title={6}/>
                            <Ticket title={7}/>
                            <Ticket title={8}/>
                            <Ticket title={9}/>
                            <Ticket title={10}/>
                        </div>

                        <div>
                            <Ticket title={11}/>
                            <Ticket title={12}/>
                            <Ticket title={13}/>
                            <Ticket title={14}/>
                            <Ticket title={15}/>
                        </div>

                        <div>
                            <Ticket title={16}/>
                            <Ticket title={17}/>
                            <Ticket title={18}/>
                            <Ticket title={19}/>
                            <Ticket title={20}/>
                        </div>

                        <div>
                            <Ticket title={21}/>
                            <Ticket title={22}/>
                            <Ticket title={23}/>
                            <Ticket title={24}/>
                            <Ticket title={25}/>
                        </div>

                        <div>
                            <Ticket title={26}/>
                            <Ticket title={27}/>
                            <Ticket title={28}/>
                            <Ticket title={29}/>
                            <Ticket title={30}/>
                        </div>

                        <div>
                            <Ticket title={31}/>
                            <Ticket title={32}/>
                            <Ticket title={33}/>
                            <Ticket title={34}/>
                            <Ticket title={35}/>
                        </div>

                        <div>
                            <Ticket title={36}/>
                            <Ticket title={37}/>
                            <Ticket title={38}/>
                            <Ticket title={39}/>
                            <Ticket title={40}/>
                        </div>

                        <div>
                            <Ticket title={41}/>
                            <Ticket title={42}/>
                            <Ticket title={43}/>
                            <Ticket title={44}/>
                            <Ticket title={45}/>
                        </div>

                        <div>
                            <Ticket title={46}/>
                            <Ticket title={47}/>
                            <Ticket title={48}/>
                            <Ticket title={49}/>
                            <Ticket title={50}/>
                        </div>

                        <div>
                            <Ticket title={51}/>
                            <Ticket title={52}/>
                            <Ticket title={53}/>
                            <Ticket title={54}/>
                            <Ticket title={55}/>
                        </div>

                        <div>
                            <Ticket title={56}/>
                            <Ticket title={57}/>
                            <Ticket title={58}/>
                            <Ticket title={59}/>
                            <Ticket title={60}/>
                        </div>
                    </SectionTickets>

                </Content>

            </main>
            
            <Buy>
                <div onClick={teste}>
                    <Button title='Comprar'/>
                </div>
            </Buy>

            <PopUp/>

        </Container>
    )
}