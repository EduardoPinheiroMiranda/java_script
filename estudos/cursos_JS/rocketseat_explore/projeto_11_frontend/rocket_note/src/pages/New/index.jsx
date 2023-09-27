import { Container, Form} from './style'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Noteitem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'


export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href='/'>volatr</a>
                    </header>

                    <Input placeholder='Titlo'/>

                    <Textarea 
                        placeholder = 'observações'
                    />

                    <Section title='Links úteis'>
                        <Noteitem value='https://github.com/eduardopinheiromiranda'/>
                        <Noteitem placeholder='Novo link' isNew/>

                    </Section>

                    <Section title='Marcadores'>
                        <div className="tags">
                            <Noteitem value='React'/>
                            <Noteitem isNew placeholder='Nova tag'/>
                        </div>
                    </Section>

                    <Button title='Salvar'/>
                </Form>
            </main>

        </Container>
    )
}