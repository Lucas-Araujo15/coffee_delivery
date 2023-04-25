import { SmileySad } from '@phosphor-icons/react'
import { EmptyCartContainer } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <SmileySad size={90} />
      <p>Seu carrinho está vazio!</p>
    </EmptyCartContainer>
  )
}
