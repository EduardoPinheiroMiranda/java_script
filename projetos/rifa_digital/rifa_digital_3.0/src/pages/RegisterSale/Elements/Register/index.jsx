import { Container, Content} from "./styled"

export function Register({...rest}){
    function next(){
        const bodyRegister = document.querySelector(".bodyRegister")
        const BodyConfirmSale = document.querySelector(".bodyConfirmSale")
        
        bodyRegister.classList.add("hide")
        BodyConfirmSale.classList.remove("hide")
    }

    function completeForm(){
        const dataUser = document.querySelectorAll("input")
        const buttonNext = document.querySelector("#next")
        let dataIncomplete = false

        dataUser.forEach((item) => {
            if(item.value.length == 0){
                dataIncomplete = true
            }
        })

        if(dataIncomplete){
            buttonNext.classList.remove("next")
        }

        if(!dataIncomplete){
            buttonNext.classList.add("next")

            buttonNext.addEventListener("click", next)
        }
    }

    return(
        <Container className="bodyRegister">
            <Content>
                <div>
                    <label htmlFor="name">Nome completo</label> 
                    <input onChange={completeForm} id="name" type="text"/>

                    <label htmlFor="email">Email</label> 
                    <input onChange={completeForm} id="email" type="email"/>

                    <div>
                        <div className="info">
                            <label htmlFor="cpf">CPF</label> 
        
                            <input onChange={completeForm} id="cpf" type="number"/>
                        </div>

                        <div className="info">
                            <label htmlFor="fone">Telefone</label> 
        
                            <input onChange={completeForm} id="fone" type="number"/>
                        </div>
                        
                        <div className="info">
                            <label htmlFor="whatsapp">Whatsapp</label> 
        
                            <input onChange={completeForm} id="whatsapp" type="number"/>
                        </div>
                    </div>

                </div>

                <hr/>

                <div>
                    <label htmlFor="street">Rua</label> 
                    <input onChange={completeForm} id="street" type="text"/>

                    <label htmlFor="bairro">Bairro</label> 
                    <input onChange={completeForm} id="bairro" type="text"/>

                    <label htmlFor="city">Cidade</label> 
                    <input onChange={completeForm} id="city" type="text"/>


                    <div>
                        <div className="info">
                            <label htmlFor="number">N°</label> 
        
                            <input onChange={completeForm} id="number" type="number"/>
                        </div>

                        <div className="info">
                            <label htmlFor="complement">Complemento</label> 
        
                            <input onChange={completeForm} id="complement" type="text"/>
                        </div>
                        
                        <div className="info">
                            <label htmlFor="cep">CEP</label> 
        
                            <input onChange={completeForm} id="cep" type="number"/>
                        </div>

                        <div className="info">
                            <label htmlFor="uf">UF</label> 
        
                            <input onChange={completeForm} id="uf" type="text"/>
                        </div>
                    </div>

                </div>
            </Content>
            
        </Container>
    )
}