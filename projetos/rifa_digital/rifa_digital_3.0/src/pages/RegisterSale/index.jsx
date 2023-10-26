import { Container, Register, PaymentStep , ConfirmSale, FinishBuy} from './style'

import { BsFiles } from 'react-icons/bs'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'
import { ButtonBack } from '../../components/Button/ButtonBack'
import { ButtonNext } from '../../components/Button/ButtonNext'

export function RegisterSale(){
    return(
        <Container>
            <header>
                <Logo/>
            </header>

            <main>
                <nav>
                    <PaymentStep>
                        <p>Registrar Bilhete</p>
                        <p>Pagamentos</p>

                        <div className=''>  
                            <p>Registrar bilhete</p>
                        </div>
                    </PaymentStep>
                </nav>

                <Register className='hide'>
                    <label htmlFor="nome">Nome completo</label>
                    <Input id='nome' title='Nomne completo' type='text'/>
                    
                    <label htmlFor="email">Email</label>
                    <Input id='email' title='Nomne completo' type='text'/>
                    
                    <label htmlFor="end">nome</label>
                    <Input id='end' title='Nomne completo' type='text'/>
                    
                    <label htmlFor="fone">Telefone</label>
                    <Input id='fone' title='Nomne completo' type='text'/>
                    
                    <label htmlFor="nome">WhatsApp</label>
                    <Input id='whatsApp' title='Nomne completo' type='text'/>
                </Register>

                <ConfirmSale className=''>
                    <h2>QRcode</h2>
                    <img src="https://s3-alpha-sig.figma.com/img/86dc/48f2/1c3a1850f136693a08057946a6cd51aa?Expires=1698019200&Signature=Ys02vpzU2QpcBHYrGHuDgdvTo0M40pKDito9M2zkac90xuprcSAKjSE8OhvJ36gGq0p9a4OwS48cn~qIDrVG6Oh1Cyn8d26Vp3fAc82-tnCuUzZQpc6EX-obl-cYswxv5ZkvOJZ1wyjklSla80hAewnyuM--2TgzSW6HXlCPJc3ERK9FN0mBBRRz7g4C~5O9hxv960uERYUElt35gBx~-TGK~CIA7BvTgsKtX32NX~X2PUXAyjeT7QCbSciGiBEBTu~nMbgZp8EBGD8xuE3iKq4sSmpnrpVZUs8aJpgg752FSZMJsqRaNzmNAUMOsxkgjJRXAmkOQq93BlaMDmXMmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="QRcode pix" />
                
                    <div>
                        <p>chave PIX:</p> 
                        <div>hgcucucftfctfcfc</div> 
                        <BsFiles/>
                    </div>
                </ConfirmSale>

                <FinishBuy>
                    <div>
                        <p>Parabéns você acabou de reservar seus números da sorte !</p>
                        <p>
                            A validação da compra é realizada em até 48h! 
                            Por favor aguarde a validação pacientimente e tenha uma boa sorte !
                            :D
                        </p>
                    </div>
                </FinishBuy>
            </main>

            <footer>
                <ButtonBack title='voltar'/>
                <ButtonNext title='proximo'/>
            </footer>
        </Container>
    )
}

