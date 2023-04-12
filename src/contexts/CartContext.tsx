import { ReactNode, createContext, useReducer } from 'react'
import { CoffeeState, coffeesReducer } from '../reducers/reducer'
import {
  addCoffeeAction,
  deleteCoffeeAction,
  increaseAmountAction,
} from '../reducers/action'

interface CartContextType {
  coffees: CoffeeState[]
  addCoffee: (coffee: CoffeeState) => void
  deleteCoffee: (idCoffee: number) => void
  increaseAmount: (idCoffee: number) => void
  decreaseAmount: (idCoffee: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, [])

  function addCoffee(coffee: CoffeeState) {
    dispatch(addCoffeeAction(coffee))
  }

  function deleteCoffee(idCoffee: number) {
    dispatch(deleteCoffeeAction(idCoffee))
  }

  function increaseAmount(idCoffee: number) {
    dispatch(increaseAmountAction(idCoffee))
  }

  function decreaseAmount(idCoffee: number) {
    dispatch(increaseAmountAction(idCoffee))
  }

  return (
    <CartContext.Provider
      value={{
        coffees: coffeesState,
        addCoffee,
        deleteCoffee,
        decreaseAmount,
        increaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
