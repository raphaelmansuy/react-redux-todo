import { ACTION_COUNTER_INC,ACTION_COUNTER_DEC,
 actionCounterInc,actionCounterDec

} from '../actions/actions'

const initialState = {
  counter: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_COUNTER_INC:
      return {...state,counter : state.counter+1}
    case ACTION_COUNTER_DEC:
      return {...state,counter: state.counter-1}
    default:
      return state
  }
}