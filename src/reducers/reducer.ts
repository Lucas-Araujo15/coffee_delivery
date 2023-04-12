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
        return selectedCoffee.coffee.id === action.payload.coffee.coffee.id
      })

      return produce(state, (draft) => {
        draft[coffeeIndex].amount += 1
      })
    }

    case ActionTypes.DECREASE_AMOUNT: {
      const coffeeIndex = state.findIndex((selectedCoffee) => {
        return selectedCoffee.coffee.id === action.payload.coffee.coffee.id
      })

      return produce(state, (draft) => {
        draft[coffeeIndex].amount -= 1
      })
    }
  }
}
