import { HeaderBar, LInkItem, LinkCart, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LInkItem>
            <a href="#">Categorias</a>
          </LInkItem>
          <LInkItem>
            <a href="#">Novidades</a>
          </LInkItem>
          <LInkItem>
            <a href="#">Promoções</a>
          </LInkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produtos(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
