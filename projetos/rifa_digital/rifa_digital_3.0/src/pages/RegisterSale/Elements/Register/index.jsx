import { Container, Content} from "./styled"

export function Register({...rest}){
    function openPopUpFinish(){
        const finishBuy = document.querySelector(".finishBuy")
        finishBuy.classList.remove("hide")
    }

    function backToForm(){
        const bodyRegister = document.querySelector(".bodyRegister")
        const bodyConfirmSale = document.querySelector(".bodyConfirmSale")
        const statePayment = document.querySelector(".state")
        
        
        bodyConfirmSale.classList.remove("moveright")
        setTimeout(() => {
            bodyRegister.classList.remove("moveLeft")
        },200)

        statePayment.classList.remove("nextStage")
        statePayment.querySelector("p").textContent = "Registrar bilhete"

        const buttonBack = document.querySelector("#back")
        const link = document.createElement("a")
        link.setAttribute("href", "/")
        link.innerHTML = `
            <span>voltar</span>
        `
        buttonBack.querySelector("a").remove()
        buttonBack.append(link)

        const buttonNext = document.querySelector("#next")
        buttonNext.removeEventListener("click", openPopUpFinish)
        buttonNext.addEventListener("click", nextStage)

    }

    function updateButtons(){
        const buttonBack = document.querySelector("#back")

        const newLink = document.createElement("a")
        const structButton = `
            <span>voltar</span>
        `
        newLink.innerHTML = structButton

        buttonBack.querySelector("a").remove()
        buttonBack.append(newLink)

        buttonBack.addEventListener("click", backToForm)


        const buttonNext = document.querySelector(".next")
        buttonNext.removeEventListener("click", nextStage)
        buttonNext.addEventListener("click", openPopUpFinish)


    }

    function nextStage(){

        const bodyRegister = document.querySelector(".bodyRegister")
        const bodyConfirmSale = document.querySelector(".bodyConfirmSale")
        const statePayment = document.querySelector(".state")
        
        bodyRegister.classList.add("moveLeft")
        setTimeout(() => {
            bodyConfirmSale.classList.add("moveright")
        },200)
    
        statePayment.classList.add("nextStage")
        statePayment.querySelector("p").textContent = "Finalizar pagamento"

        updateButtons()
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
            buttonNext.removeEventListener("click", nextStage)
        }

        if(!dataIncomplete){
            buttonNext.classList.add("next")
            buttonNext.addEventListener("click", nextStage)
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