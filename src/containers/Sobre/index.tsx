import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GitHubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut, repellendus harum inventore tempora quod facilis veniam excepturi dicta eveniet fugit, ab reprehenderit? Nisi, esse? Modi explicabo sapiente deleniti maiores.
    </Paragrafo>
    <GitHubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=LuscasV&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LuscasV&layout=compact&langs_count=7&theme=dracula"/>
    </GitHubSecao>
  </section>
)

export default Sobre
