import { ReactNode, createContext, useReducer } from 'react'
import { CoffeeState, coffeesReducer } from '../reducers/reducer'
import {
  addCoffeeAction,
  decreaseAmountAction,
  deleteCoffeeAction,
  increaseAmountAction,
  setAmountAction,
} from '../reducers/action'

interface CartContextType {
  coffees: CoffeeState[]
  addCoffee: (coffee: CoffeeState) => void
  deleteCoffee: (idCoffee: number) => void
  increaseAmount: (idCoffee: number) => void
  decreaseAmount: (idCoffee: number) => void
  setAmount: (idCoffee: number, amount: number) => void
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
    dispatch(decreaseAmountAction(idCoffee))
  }

  function setAmount(idCoffee: number, amount: number) {
    dispatch(setAmountAction(idCoffee, amount))
  }

  return (
    <CartContext.Provider
      value={{
        coffees: coffeesState,
        addCoffee,
        deleteCoffee,
        decreaseAmount,
        increaseAmount,
        setAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
