import Titulo from "../../components/Titulo"
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import { Descricao, BotaoTema,SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <Avatar />
    <Titulo fontSize={18}>Lucas Valadão</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>LuscasV</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
