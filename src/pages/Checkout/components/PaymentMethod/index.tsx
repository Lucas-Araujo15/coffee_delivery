import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { Checkbox, PaymentMethodContainer } from './styles'
import { CardTitle } from '../CardTitle'

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <CardTitle color="purple">
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
    </PaymentMethodContainer>
  )
}
