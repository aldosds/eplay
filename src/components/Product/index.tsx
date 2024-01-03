import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      aspernatur deserunt error molestiae perspiciatis quas officia, cupiditate
      sint impedit adipisci cumque animi, vel labore ab sapiente expedita nam ad
      tempore?
    </Descricao>
  </Card>
)

export default Product
