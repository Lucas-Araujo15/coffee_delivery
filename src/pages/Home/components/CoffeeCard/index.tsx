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
import { ChangeEvent, useContext, useState } from 'react'
import { Coffee, CoffeeState } from '../../../../reducers/reducer'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffee } = useContext(CartContext)
  const [amount, setAmount] = useState(0)

  function handleIncreaseAmount() {
    setAmount((state) => state + 1)
  }

  function handleDecreaseAmount() {
    if (amount !== 0) {
      setAmount((state) => state - 1)
    }
  }

  function handleSetAmount(event: ChangeEvent<HTMLInputElement>) {
    setAmount(parseInt(event.target.value))
  }

  function handleAddCoffeeToCart() {
    const selectedCoffee: CoffeeState = {
      amount,
      coffee,
    }

    addCoffee(selectedCoffee)
    setAmount(0)
  }

  const isAmountEqualToZero = amount === 0

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
          <small>r$</small> {coffee.price.toFixed(2)}
        </p>
        <Actions>
          <Counter
            amount={amount}
            setAmount={handleSetAmount}
            increaseAmount={handleIncreaseAmount}
            decreaseAmount={handleDecreaseAmount}
          />
          <button
            disabled={isAmountEqualToZero}
            onClick={handleAddCoffeeToCart}
          >
            <ShoppingCart weight="fill" size={22} />
          </button>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}
