import { CartButton, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
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
          <span>3</span>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
