import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={18} />
      </button>
      <input min={0} type="number" defaultValue={0} />
      <button>
        <Plus size={18} />
      </button>
    </CounterContainer>
  )
}
