import { CoffeeSelectedContainer, RemoveButton } from './styles'
import expresso from '../../../../assets/expresso.png'
import { Counter } from '../../../../components/Counter'
import { Trash } from '@phosphor-icons/react'
import { CoffeeState } from '../../../../reducers/reducer'
import { ChangeEvent, useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeSelectedProps {
  coffeeSelected: CoffeeState
}

export function CoffeeSelected({ coffeeSelected }: CoffeeSelectedProps) {
  const { decreaseAmount, deleteCoffee, increaseAmount, setAmount } =
    useContext(CartContext)

  function handleIncreaseAmount() {
    increaseAmount(coffeeSelected.coffee.id)
  }

  function handleDecreaseAmount() {
    decreaseAmount(coffeeSelected.coffee.id)
  }

  function handleDeleteCoffee() {
    deleteCoffee(coffeeSelected.coffee.id)
  }

  function handleSetAmount(event: ChangeEvent<HTMLInputElement>) {
    setAmount(coffeeSelected.coffee.id, parseInt(event.target.value))
  }

  return (
    <CoffeeSelectedContainer>
      <div>
        <div>
          <img src={coffeeSelected.coffee.image} alt="Foto de um café" />
          <div>
            <p>{coffeeSelected.coffee.title}</p>
            <div>
              <Counter
                amount={coffeeSelected.amount}
                decreaseAmount={handleDecreaseAmount}
                increaseAmount={handleIncreaseAmount}
                setAmount={handleSetAmount}
              />
              <RemoveButton onClick={handleDeleteCoffee}>
                <Trash />
                <p>remover</p>
              </RemoveButton>
            </div>
          </div>
        </div>
        <p>R$ {coffeeSelected.coffee.price}</p>
      </div>
      <hr />
    </CoffeeSelectedContainer>
  )
}
