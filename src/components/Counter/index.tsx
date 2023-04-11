import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

interface CounterProps {
  amount: number
  decreaseAmount: () => void
  increaseAmount: () => void
}

export function Counter({
  amount,
  decreaseAmount,
  increaseAmount,
}: CounterProps) {
  return (
    <CounterContainer>
      <button onClick={decreaseAmount}>
        <Minus size={18} />
      </button>
      <input min={0} type="number" defaultValue={0} value={amount} />
      <button onClick={increaseAmount}>
        <Plus size={18} />
      </button>
    </CounterContainer>
  )
}
