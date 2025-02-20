import { Link } from 'react-router-dom'

import { HeaderBar, LInkItem, CartButton, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
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
      <CartButton onClick={openCart}>
        {items.length} - produtos(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
