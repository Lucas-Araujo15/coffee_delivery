import { MapPinLine } from '@phosphor-icons/react'
import { AddressFormContainer, FormInput } from './styles'
import { CardTitle } from '../CardTitle'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <CardTitle color="yellow-dark">
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
    </AddressFormContainer>
  )
}
