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
import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'

export function CoffeeCard() {
  const [amountCoffee, setAmountCoffee] = useState(0)

  function handleIncreaseAmountCoffee() {
    setAmountCoffee((state) => state + 1)
  }

  function handleDecreaseAmountCoffee() {
    setAmountCoffee((state) => state - 1)
  }

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
          <Counter>
            <button onClick={handleDecreaseAmountCoffee}>
              <Minus size={18} />
            </button>
            <input min={0} type="number" value={amountCoffee} />
            <button onClick={handleIncreaseAmountCoffee}>
              <Plus size={18} />
            </button>
          </Counter>
          <span>
            <ShoppingCart weight="fill" size={22} />
          </span>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}
