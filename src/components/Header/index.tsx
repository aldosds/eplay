import { Link } from 'react-router-dom'

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
            <Link to="/categories">Categorias</Link>
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
