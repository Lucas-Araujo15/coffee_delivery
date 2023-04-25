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

import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { EmptyCart } from './components/EmptyCart'
import { CoffeeState } from '../../reducers/reducer'
import { useNavigate } from 'react-router-dom'

const addressFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'Insira o cep correto!'),
  logradouro: zod.string().min(1, 'Insira o nome da rua'),
  numero: zod.string().min(1, 'Insira o número da residência'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe seu bairro'),
  cidade: zod.string().min(1, 'Insira o nome da sua cidade'),
  uf: zod.string().length(2, 'Insira a sigla do seu Estado'),
})

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export type PaymentMethodOptions =
  | 'Cartão de crédito'
  | 'Cartão de débito'
  | 'Dinheiro'

export interface OrderProps {
  address: AddressFormData
  paymentMethod: PaymentMethodOptions
  boughtCoffees: CoffeeState[]
  price: number
}

export function Checkout() {
  const { coffees, handleSetOrder, deleteAll } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  const [paymentMethodSelected, setPaymentMethodSelected] =
    useState<PaymentMethodOptions>()

  function handleSelectPaymentMethod(paymentMethod: PaymentMethodOptions) {
    setPaymentMethodSelected(paymentMethod)
  }

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      bairro: '',
      cidade: '',
      complemento: '',
      logradouro: '',
      numero: undefined,
      uf: '',
    },
  })

  const { handleSubmit } = addressForm

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

  function handleFinalizeOrder(data: AddressFormData) {
    const order: OrderProps = {
      address: data,
      boughtCoffees: coffees,
      paymentMethod: paymentMethodSelected!,
      price: parseFloat((total + 3.5).toFixed(2)),
    }

    localStorage.setItem('@coffee-delivery:order-1.0.0', JSON.stringify(order))

    handleSetOrder()

    deleteAll()

    navigate('/success')
  }

  const isCartEmpty = coffees.length === 0
  const noPaymentMethod = paymentMethodSelected === undefined

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleFinalizeOrder)}>
      <OrderInformationBox>
        <h2>Complete seu pedido</h2>
        <div>
          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>
          <PaymentMethod
            paymentMethodSelected={paymentMethodSelected}
            selectPaymentMethod={handleSelectPaymentMethod}
          />
        </div>
      </OrderInformationBox>
      <SelectedCoffeesBox>
        <h2>Cafés selecionados</h2>
        <div>
          {isCartEmpty ? (
            <EmptyCart />
          ) : (
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
          )}
          <PriceInformation>
            <div>
              <p>Total de itens</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ {isCartEmpty ? '0.00' : '3.50'}</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ {isCartEmpty ? '0.00' : (total + 3.5).toFixed(2)}</p>
            </div>
          </PriceInformation>
          <ConfirmButton
            type="submit"
            disabled={isCartEmpty || noPaymentMethod}
          >
            confirmar pedido
          </ConfirmButton>
        </div>
      </SelectedCoffeesBox>
    </CheckoutContainer>
  )
}
