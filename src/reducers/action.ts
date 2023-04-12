import { CoffeeState } from './reducer'

export enum ActionTypes {
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
  ADD_COFFEE = 'ADD_COFFEE',
  DELETE_COFFEE = 'DELETE_COFFEE',
}

export function increaseAmountAction(idCoffee: number) {
  return {
    type: ActionTypes.INCREASE_AMOUNT,
    payload: {
      idCoffee,
    },
  }
}

export function decreaseAmountAction(idCoffee: number) {
  return {
    type: ActionTypes.DECREASE_AMOUNT,
    payload: {
      idCoffee,
    },
  }
}

export function addCoffeeAction(coffee: CoffeeState) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function deleteCoffeeAction(idCoffee: number) {
  return {
    type: ActionTypes.DELETE_COFFEE,
    payload: {
      idCoffee,
    },
  }
}
