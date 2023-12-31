import {Conteiner, Brand, Menu, Search, Content, NewNote } from './style'

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header} from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'

export function Home(){
    return(
        <Conteiner>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header to='/profile'/>

            <Menu>
                <li><ButtonText isActive title='Todos'/></li>
                <li><ButtonText title='React'/></li>
                <li><ButtonText title='Sobre'/></li> 
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

            <NewNote to='/new'>
                <FiPlus/>
                Criar Nota

            </NewNote>
        </Conteiner>
    )
}

/*
                <li><ButtonText isactive='true' title='Todos'></ButtonText></li>
                <li><ButtonText title='React'/></ButtonText></li>
                <li><ButtonText title='Sobre'/></ButtonText></li>  
*/