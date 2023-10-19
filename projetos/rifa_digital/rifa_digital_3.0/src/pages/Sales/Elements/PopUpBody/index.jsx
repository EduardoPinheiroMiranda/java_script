import { Container, ReviewNumber } from './style'

import { BsXLg } from 'react-icons/bs'

import { PopUp } from '../../../../components/PopUp'
import { Button } from '../../../../components/Button/Button'

export function PopUpBody({...rest}){
    return(
        <Container {...rest}>
            <div>
                <PopUp>
                    <BsXLg/>
                    <h1>Revisão</h1>
                    <h2>Números selecionados</h2>

                    <ReviewNumber>

                    </ReviewNumber>
                    
                    <Button title='Comprar'/>

                </PopUp>
            </div>
            
        </Container>
    )
}