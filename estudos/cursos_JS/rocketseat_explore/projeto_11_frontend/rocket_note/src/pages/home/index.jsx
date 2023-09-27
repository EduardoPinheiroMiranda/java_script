import { FiPlus, FiSearch } from 'react-icons/fi'

import {Conteiner, Brand, Menu, Search, Content, NewNote } from './style'

import { Header} from '../../components/Header'
import { ButtonText} from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home(){
    return(
        <Conteiner>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText isActived title='Todos'></ButtonText></li>
                <li><ButtonText title='React'></ButtonText></li>
                <li><ButtonText title='Sobre'></ButtonText></li>   
            </Menu>

            <Search>
                <Input placeholder="pesquiser por texto" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title='Minhas Notas'>
                    <Note data={{
                        title:'React',
                        tags: [
                            {id:'1', name:'React'},
                            {id:'2', name:'Node'}
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote>
                <FiPlus/>
                Criar Nota

            </NewNote>
        </Conteiner>
    )
}