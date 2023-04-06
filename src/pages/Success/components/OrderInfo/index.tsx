import { OrderInfoContainer } from './styles'
import { ReactNode } from 'react'

interface OrderInfoProps {
  icon: ReactNode
  color: 'purple' | 'yellow' | 'yellow-dark'
  children: ReactNode
}

export function OrderInfo({ icon, color, children }: OrderInfoProps) {
  return (
    <OrderInfoContainer iconColor={color}>
      <span>{icon}</span>
      <div>{children}</div>
    </OrderInfoContainer>
  )
}
