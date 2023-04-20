import {
  OrderInformationBox,
  CheckoutContainer,
  SelectedCoffeesBox,
  PriceInformation,
  ConfirmButton,
} from './styles'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'
import { CoffeeSelected } from './components/CoffeeSelected'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const { coffees } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalPrice = coffees
      .map((coffee) => {
        return coffee.amount * coffee.coffee.price
      })
      .reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
      }, 0)

    setTotal(totalPrice)
  }, [coffees])

  return (
    <CheckoutContainer>
      <OrderInformationBox>
        <h2>Complete seu pedido</h2>
        <div>
          <AddressForm />
          <PaymentMethod />
        </div>
      </OrderInformationBox>
      <SelectedCoffeesBox>
        <h2>Cafés selecionados</h2>
        <div>
          <div>
            {coffees.map((coffeeAdded) => {
              return (
                <CoffeeSelected
                  key={coffeeAdded.coffee.id}
                  coffeeSelected={coffeeAdded}
                />
              )
            })}
          </div>
          <PriceInformation>
            <div>
              <p>Total de itens</p>
              <p>R$ {total}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </PriceInformation>
          <ConfirmButton>
            <p>confirmar pedido</p>
          </ConfirmButton>
        </div>
      </SelectedCoffeesBox>
    </CheckoutContainer>
  )
}
