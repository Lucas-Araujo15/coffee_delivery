import { CardTitleContainer } from './styles'
import { ReactNode } from 'react'

interface CardTitleProps {
  color: 'purple' | 'yellow-dark'
  children: ReactNode
}

export function CardTitle({ color, children }: CardTitleProps) {
  return <CardTitleContainer iconColor={color}>{children}</CardTitleContainer>
}
