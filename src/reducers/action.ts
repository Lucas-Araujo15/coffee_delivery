import { CoffeeState } from './reducer'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  // eslint-disable-next-line no-unused-vars
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
}

export function increaseAmountAction(coffee: CoffeeState) {
  return {
    type: ActionTypes.INCREASE_AMOUNT,
    payload: {
      coffee,
    },
  }
}

export function decreaseAmountAction(coffee: CoffeeState) {
  return {
    type: ActionTypes.DECREASE_AMOUNT,
    payload: {
      coffee,
    },
  }
}
