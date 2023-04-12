import { CartButton, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { coffees } = useContext(CartContext)

  const cartHasCoffee = coffees?.length > 0 && coffees !== undefined

  console.log(cartHasCoffee)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          <p>Porto Alegre, RS</p>
        </Location>
        <CartButton>
          <ShoppingCart weight="fill" size={22} />
          {cartHasCoffee && <span>{coffees.length}</span>}
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
