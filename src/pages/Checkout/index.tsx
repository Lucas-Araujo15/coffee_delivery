import { MapPinLine } from '@phosphor-icons/react'
import {
  OrderInformationBox,
  CheckoutContainer,
  SelectedCoffeesBox,
  AddressForm,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderInformationBox>
        <h2>Complete seu pedido</h2>
        <AddressForm>
          <header>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
        </AddressForm>
      </OrderInformationBox>
      <SelectedCoffeesBox>
        <h2>Cafés selecionados</h2>
      </SelectedCoffeesBox>
    </CheckoutContainer>
  )
}
