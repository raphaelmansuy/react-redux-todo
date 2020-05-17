import { ACTION_COUNTER_INC, ACTION_COUNTER_DEC } from "../actions/actions"

const initialState = 0

export const counterReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case ACTION_COUNTER_INC:
      return state + 1 
    case ACTION_COUNTER_DEC:
      return state - 1 
    default:
      return state
  }
}
