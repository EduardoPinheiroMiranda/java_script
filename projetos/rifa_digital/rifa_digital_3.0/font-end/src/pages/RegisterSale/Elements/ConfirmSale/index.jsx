import { Container, InfoRaffle, InfoUser, Payment} from "./style"

import { BsFiles } from "react-icons/bs"

export function ConfirmSale({...rest}){

    function copyKey(){
        const pixKey = document.querySelector("#pixKey")
        const notify = document.querySelector(".copyPixKey")
        


        navigator.clipboard.writeText(pixKey.textContent).then(
            notify.classList.add("shownotify"),

            setTimeout(() => {
                notify.classList.remove("shownotify")
            },2000)
            
        )
        
        
    }

    return(
        <Container className="bodyConfirmSale">
            
                <InfoRaffle>
                    <h1>
                        Informações da compra
                    </h1>
                    <div>
                        <img src="https://scontent.ftfl2-1.fna.fbcdn.net/v/t1.18169-9/18527629_1202385809895002_1921898692436017206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=c2f564&_nc_ohc=GBOIo6dCeRcAX9LPKV-&_nc_oc=AQm6z6Wpal9E46KksdbFDaVcliFvbXgJXkxeAVJacOMz8Kcorit3Eh7mtpauf0EWues&_nc_ht=scontent.ftfl2-1.fna&oh=00_AfBgjXPvJhxjvLAE88rFmZw4a4xWe0E3Xwjtxvzghdrstw&oe=6561B31E" alt="PS4" />
                        <div>
                            <p>Concurso: <span>00000001</span></p> 
                            <p>Titulo: <span>Sortei de um PS4 </span></p> 
                            <p>Fim do concurso: <span>12/12/2023</span></p> 
                        </div>
                    </div>
                </InfoRaffle>

                <hr/>

                <InfoUser>
                    <p>Comprador: <span>Eduardo</span></p> 
                    <p>Email: <span>eduardo@gmail.com</span></p>
                    <p>CPF: <span>123456789-10</span></p> 
                    <p>Telefone: <span>(33) 984123456</span></p> 
                    <p>Whatsapp: <span>(33) 984123456</span></p> 

                    <hr/>

                    <p>Rua: <span>Jk</span></p> 
                    <p>Bairro: <span>João de Lino</span></p>
                    <p>Cidade: <span>Padre Paraiso</span></p> 
                    <p>N°: <span>98</span></p> 
                    <p>CEP: <span>39818-000</span></p> 
                    <p>Complemento: <span>Casa</span></p> 
                    <p>UF: <span>MG</span></p> 

                </InfoUser>

                <hr/>

                <Payment>
                    
                    <h2>Total : R$ <span>45,00</span></h2>

                    <div >
                        <p>QRcode</p>
                        <img src="data:image/png;base64,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" alt="QRcode de pagamento" />
                    </div>
                    
                    <div >
                        <p>chave PIX:</p>
                        <div>
                            <span id="pixKey">lkjefgholifhjugsdoliuyfljdyhcdgkchgksdhgosdhuj</span>
                        </div>
                        <BsFiles onClick={copyKey}/>
                    </div>

                    <div className="copyPixKey">
                        <span>chave copiada</span>
                    </div>

                </Payment>
                
        </Container>
    )
}