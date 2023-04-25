import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { Checkbox, PaymentMethodContainer } from './styles'
import { CardTitle } from '../CardTitle'
import { PaymentMethodOptions } from '../..'

interface PaymentMethodProps {
  paymentMethodSelected: PaymentMethodOptions | undefined
  selectPaymentMethod: (paymentMethod: PaymentMethodOptions) => void
}

export function PaymentMethod({
  paymentMethodSelected,
  selectPaymentMethod,
}: PaymentMethodProps) {
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
        <input
          onClick={() => selectPaymentMethod('Cartão de crédito')}
          checked={paymentMethodSelected === 'Cartão de crédito'}
          type="checkbox"
          id="credit"
          readOnly
        />
        <input
          onClick={() => selectPaymentMethod('Cartão de débito')}
          checked={paymentMethodSelected === 'Cartão de débito'}
          type="checkbox"
          id="debit"
          readOnly
        />
        <input
          onClick={() => selectPaymentMethod('Dinheiro')}
          checked={paymentMethodSelected === 'Dinheiro'}
          type="checkbox"
          id="cash"
          readOnly
        />
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
