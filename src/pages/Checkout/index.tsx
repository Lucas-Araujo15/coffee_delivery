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

export function Checkout() {
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
            <CoffeeSelected />
            <CoffeeSelected />
          </div>

          <PriceInformation>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
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
