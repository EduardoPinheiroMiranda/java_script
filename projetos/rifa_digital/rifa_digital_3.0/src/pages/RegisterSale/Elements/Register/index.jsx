import { Container } from "./styled"

export function Register({...rest}){
    return(
        <Container>
            <div>
                <label htmlFor="name">Nome completo</label>
                <input id="name" type="text"/>

                <label htmlFor="email">Email</label>
                <input id="email" type="email"/>

                <div>
                    <div className="fone">
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="number"/>
                    </div>

                    <div className="fone">
                        <label htmlFor="fone">Telefone</label>
                        <input id="fone" type="number"/>
                    </div>
                    
                    <div className="fone">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input id="whatsapp" type="number"/>
                    </div>
                </div>

            </div>

            <hr/>

            <div>
                <label htmlFor="rua">Rua</label>
                <input id="rua" type="text"/>

                <label htmlFor="bairro">Bairro</label>
                <input id="bairro" type="text"/>

                <label htmlFor="Cidade">Cidade</label>
                <input id="city" type="text"/>


                <div>
                    <div className="fone">
                        <label htmlFor="number">N°</label>
                        <input id="number" type="number"/>
                    </div>

                    <div className="fone">
                        <label htmlFor="fone">Complemento</label>
                        <input id="fone" type="number"/>
                    </div>
                    
                    <div className="fone">
                        <label htmlFor="cep">CEP</label>
                        <input id="cep" type="number"/>
                    </div>

                    <div className="fone">
                        <label htmlFor="uf">UF</label>
                        <input id="uf" type="number"/>
                    </div>
                </div>

            </div>
        </Container>
    )
}