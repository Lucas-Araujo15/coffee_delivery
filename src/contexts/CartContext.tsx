import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { CoffeeState, coffeesReducer } from '../reducers/reducer'
import {
  addCoffeeAction,
  decreaseAmountAction,
  deleteAllAction,
  deleteCoffeeAction,
  increaseAmountAction,
  setAmountAction,
} from '../reducers/action'
import { OrderProps } from '../pages/Checkout'

interface CartContextType {
  coffees: CoffeeState[]
  order: OrderProps | undefined
  handleSetOrder: () => void
  deleteAll: () => void
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
  const [order, setOrder] = useState<OrderProps>()

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

  function deleteAll() {
    dispatch(deleteAllAction())
  }

  function handleSetOrder() {
    if (localStorage.getItem('@coffee-delivery:order-1.0.0') !== null) {
      const order = JSON.parse(
        localStorage.getItem('@coffee-delivery:order-1.0.0')!,
      )

      setOrder(order as OrderProps)
    }
  }

  useEffect(handleSetOrder, [])

  return (
    <CartContext.Provider
      value={{
        order,
        deleteAll,
        handleSetOrder,
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
