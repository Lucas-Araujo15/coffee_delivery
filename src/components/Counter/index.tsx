import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'
import { ChangeEvent } from 'react'

interface CounterProps {
  amount: number
  decreaseAmount: () => void
  increaseAmount: () => void
  setAmount: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Counter({
  amount,
  decreaseAmount,
  increaseAmount,
  setAmount,
}: CounterProps) {
  return (
    <CounterContainer>
      <button type="button" onClick={decreaseAmount}>
        <Minus size={18} />
      </button>
      <input min={0} type="number" onChange={setAmount} value={amount} />
      <button type="button" onClick={increaseAmount}>
        <Plus size={18} />
      </button>
    </CounterContainer>
  )
}
