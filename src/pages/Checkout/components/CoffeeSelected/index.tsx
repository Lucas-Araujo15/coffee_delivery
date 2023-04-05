import { CoffeeSelectedContainer, RemoveButton } from './styles'
import expresso from '../../../../assets/expresso.png'
import { Counter } from '../../../../components/Counter'
import { Trash } from '@phosphor-icons/react'

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      <div>
        <div>
          <img src={expresso} alt="Foto de um café expresso" />
          <div>
            <p>Expresso tradicional</p>
            <div>
              <Counter />
              <RemoveButton>
                <Trash />
                <p>remover</p>
              </RemoveButton>
            </div>
          </div>
        </div>
        <p>R$ 9,90</p>
      </div>
      <hr />
    </CoffeeSelectedContainer>
  )
}
