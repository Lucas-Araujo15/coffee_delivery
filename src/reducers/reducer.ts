import { ActionTypes } from './action'
import { produce } from 'immer'

export interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

export interface CoffeeState {
  coffee: Coffee
  amount: number
}

export function coffeesReducer(state: CoffeeState[], action: any) {
  switch (action.type) {
    case ActionTypes.INCREASE_AMOUNT: {
      const coffeeIndex = state.findIndex((selectedCoffee) => {
        return selectedCoffee.coffee.id === action.payload.idCoffee
      })

      return produce(state, (draft) => {
        draft[coffeeIndex].amount += 1
      })
    }

    case ActionTypes.DECREASE_AMOUNT: {
      const coffeeIndex = state.findIndex((selectedCoffee) => {
        return selectedCoffee.coffee.id === action.payload.idCoffee
      })

      return produce(state, (draft) => {
        draft[coffeeIndex].amount -= 1
      })
    }

    case ActionTypes.ADD_COFFEE: {
      return produce(state, (draft) => {
        draft.push(action.payload.coffee)
      })
    }

    case ActionTypes.DELETE_COFFEE: {
      const coffeeIndex = state.findIndex((selectedCoffee) => {
        return selectedCoffee.coffee.id === action.payload.idCoffee
      })

      return produce(state, (draft) => {
        draft.splice(coffeeIndex, 1)
      })
    }

    case ActionTypes.SET_AMOUNT: {
      const coffeeIndex = state.findIndex((selectedCoffee) => {
        return selectedCoffee.coffee.id === action.payload.idCoffee
      })

      return produce(state, (draft) => {
        draft[coffeeIndex].amount = action.payload.amount
      })
    }

    default:
      return state
  }
}
