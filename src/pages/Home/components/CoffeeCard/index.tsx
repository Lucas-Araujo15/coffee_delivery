import {
  Actions,
  Buy,
  CardDescription,
  CoffeeCardContainer,
  CoffeeTags,
  Tag,
} from './styles'

import { ShoppingCart } from '@phosphor-icons/react'
import { Counter } from '../../../../components/Counter'
import { useState } from 'react'
import { Coffee } from '../../../../reducers/reducer'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [amount, setAmount] = useState(0)

  function handleIncreaseAmount() {
    setAmount((state) => state + 1)
  }

  function handleDecreaseAmount() {
    if (amount !== 0) {
      setAmount((state) => state - 1)
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="Imagem meramente ilustrativa de um café" />
      <CoffeeTags>
        {coffee.tags.map((tag) => {
          return (
            <Tag key={tag}>
              <p>{tag}</p>
            </Tag>
          )
        })}
      </CoffeeTags>
      <CardDescription>
        <p>{coffee.title}</p>
        <p>{coffee.description}</p>
      </CardDescription>
      <Buy>
        <p>
          <small>r$</small> {coffee.price}
        </p>
        <Actions>
          <Counter
            amount={amount}
            increaseAmount={handleIncreaseAmount}
            decreaseAmount={handleDecreaseAmount}
          />
          <span>
            <ShoppingCart weight="fill" size={22} />
          </span>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}
