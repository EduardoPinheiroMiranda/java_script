import { Container, ReviewNumber} from './style'

import { BsXLg } from 'react-icons/bs'

import { PopUp } from '../../../../components/PopUp'
import { Button } from '../../../../components/Button/Button'

export function PopUpBody({...rest}){
    function close(){
        const popUp = document.querySelector('.popUp')
        popUp.classList.add('hide')
    }

    function reviewSales(){
        alert("oi")
    }
    return(
        <Container className='popUp hide' {...rest}>
            <div>
                <PopUp>
                    <BsXLg onClick={close}/>
                    <h1>Revisão</h1>
                    <h2>Números selecionados</h2>

                    <ReviewNumber>

                    </ReviewNumber>
                    
                    <Button title='Comfirmar' onClick={reviewSales}/>

                </PopUp>
            </div>
            
        </Container>
    )
}