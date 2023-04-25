import { CoffeeState } from './reducer'

export enum ActionTypes {
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
  SET_AMOUNT = 'SET_AMOUNT',
  ADD_COFFEE = 'ADD_COFFEE',
  DELETE_COFFEE = 'DELETE_COFFEE',
  DELETE_ALL = 'DELETE_ALL',
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

export function setAmountAction(idCoffee: number, amount: number) {
  return {
    type: ActionTypes.SET_AMOUNT,
    payload: {
      idCoffee,
      amount,
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

export function deleteAllAction() {
  return {
    type: ActionTypes.DELETE_ALL,
  }
}
