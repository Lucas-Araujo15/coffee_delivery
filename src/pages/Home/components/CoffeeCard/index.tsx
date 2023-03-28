import {
  Actions,
  Buy,
  CardDescription,
  CoffeeCardContainer,
  CoffeeTags,
  Counter,
  Tag,
} from './styles'

import expresso from '../../../../assets/expresso.png'
import { ShoppingCart } from '@phosphor-icons/react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expresso} alt="" />
      <CoffeeTags>
        <Tag>
          <p>tradicional</p>
        </Tag>
        <Tag>
          <p>com leite</p>
        </Tag>
      </CoffeeTags>
      <CardDescription>
        <p>Café com Leite</p>
        <p>Meio a meio de expresso tradicional com leite vaporizado</p>
      </CardDescription>
      <Buy>
        <p>
          <small>r$</small> 9,90
        </p>
        <Actions>
          <Counter type="number" />
          <span>
            <ShoppingCart weight="fill" size={22} />
          </span>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}
