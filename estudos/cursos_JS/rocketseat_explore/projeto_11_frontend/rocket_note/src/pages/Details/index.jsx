import { Conteiner, Links, Content} from "./styles.js"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"

export function Details(){

  return(
      <Conteiner>
        <Header/>
          <main>
            <Content>
              <ButtonText title="Excluir"/>

              <h1>Introdução ao React</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil qui dolorum illo repudiandae minus deleniti. Voluptates amet, obcaecati consequatur temporibus sint corporis modi voluptas! Nostrum pariatur minima iure unde ad!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, odit inventore! Corporis, atque explicabo voluptatem velit expedita animi quo recusandae, quibusdam a fuga odio repudiandae pariatur modi quasi! Repellat, nihil.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolore iure dolor maxime. Mollitia ea amet modi minus sunt eius sint tempora tenetur numquam! Corporis unde a pariatur! Optio, repellat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum dolores, nisi nam ipsam sit et adipisci tenetur alias inventore voluptatem numquam ullam facere reiciendis quasi. Mollitia in quisquam quae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates rerum aut, facere, aliquid porro beatae provident reprehenderit incidunt veritatis sed sint neque asperiores laboriosam saepe dicta et, natus hic.
                Ipsa hic nulla commodi incidunt cupiditate ex quisquam. Nostrum voluptas, beatae odio eum magnam fugiat culpa atque tempora aspernatur architecto quibusdam temporibus quasi officia provident omnis explicabo aut doloremque facilis.
                Rerum, quasi quia, asperiores ratione excepturi, reiciendis nobis consequuntur sit eum nam explicabo saepe eaque dolorem beatae eligendi nihil quibusdam accusamus distinctio veritatis. Ipsum totam consectetur ut voluptate. Iusto, quas.
              </p>
              
              <Section title='Links úteis'>
                <Links>
                  <ul><a href="#">https://eduardopinheiromiranda.com.br/e_o_pix?nada_ainda?</a></ul>
                  <ul><a href="#">https://eduardopinheiromiranda.com.br/e_o_pix?nada_ainda?</a></ul>
                  <ul><a href="#">https://eduardopinheiromiranda.com.br/e_o_pix?nada_ainda?</a></ul>
                </Links>
              </Section>

              <Section title="Marcadores">
                <Tag title="Express"/>
                <Tag title="Node"/>
              </Section>

              <Button title="voltar"/>

            </Content>
          </main>

      </Conteiner>
  )
}
