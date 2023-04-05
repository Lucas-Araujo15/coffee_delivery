import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  OrderInformationBox,
  CheckoutContainer,
  SelectedCoffeesBox,
  AddressForm,
  FormInput,
  PaymentMethod,
  CardTitle,
  Checkbox,
  PriceInformation,
  ConfirmButton,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderInformationBox>
        <h2>Complete seu pedido</h2>
        <div>
          <AddressForm>
            <CardTitle iconColor="yellow-dark">
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CardTitle>
            <form action="">
              <FormInput placeholder="CEP" />
              <FormInput placeholder="Rua" />
              <FormInput placeholder="Número" />
              <FormInput placeholder="Complemento" />
              <FormInput placeholder="Bairro" />
              <FormInput placeholder="Cidade" />
              <FormInput placeholder="UF" />
            </form>
          </AddressForm>
          <PaymentMethod>
            <CardTitle iconColor="purple">
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CardTitle>
            <div>
              <input type="checkbox" id="credit" />
              <input type="checkbox" id="debit" />
              <input type="checkbox" id="cash" />

              <label htmlFor="credit">
                <Checkbox id="check-credit">
                  <CreditCard size={16} />
                  <p>cartão de crédito</p>
                </Checkbox>
              </label>

              <label htmlFor="debit">
                <Checkbox id="check-debit">
                  <Bank size={16} />
                  <p>cartão de débito</p>
                </Checkbox>
              </label>

              <label htmlFor="cash">
                <Checkbox id="check-cash">
                  <Money size={16} />
                  <p>dinheiro</p>
                </Checkbox>
              </label>
            </div>
          </PaymentMethod>
        </div>
      </OrderInformationBox>
      <SelectedCoffeesBox>
        <h2>Cafés selecionados</h2>
        <div>
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
