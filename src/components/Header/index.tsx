import { CartButton, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink, useNavigate } from 'react-router-dom'

export function Header() {
  const { coffees, order } = useContext(CartContext)
  const navigate = useNavigate()
  const cartHasCoffee = coffees?.length > 0 && coffees !== undefined

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logo} alt="" />
      </NavLink>
      <div>
        {order && (
          <Location>
            <MapPin weight="fill" size={22} />
            {order?.address.cidade}, {order?.address.uf}
          </Location>
        )}
        <CartButton onClick={() => navigate('/checkout')}>
          <ShoppingCart weight="fill" size={22} />
          {cartHasCoffee && <span>{coffees.length}</span>}
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
