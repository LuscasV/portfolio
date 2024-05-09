import { P } from './styles'

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario'; //limita quais os tipos que o atributo tipo podera receber
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) =>
<P tipo={tipo} >{children}</P>

export default Paragrafo
