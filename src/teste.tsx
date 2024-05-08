import styled from 'styled-components'

type BotaoProps = { //aqui definimos os valores dos atributos com tipagem do typescript
  principal?: boolean;
  fontSize?: string //interrogação faz o fontSize ser opcional
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
  `
// o uso do ? e do :, se tiver o atributo principal(?) o botao é verde
  // se nao tiver(:) o botao é blue

  const BotaoPerigo = styled(Botao)`
    background-color: red;
    color: #fff;

    span {
      text-decoration: line-through;
    }
  `

function Teste() {
  return (
    <>
    <Botao principal>Enviar</Botao>
    <Botao fontSize="14px" principal={false}>Cancelar</Botao>
    <BotaoPerigo as="a" ><span>Não clique aqui</span></BotaoPerigo>
    </>
  )
}

export default Teste
