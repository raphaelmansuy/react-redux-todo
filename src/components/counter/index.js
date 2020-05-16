import { Counter } from "./counter"
import { connect } from "react-redux"

import { actionCounterDec, actionCounterInc } from "../../actions/actions"

export const VisibleCounter = connect(
  (state) => {
    return { value: state.counter }
  },
  (dispatch) => {
    return {
      onClickInc: () => {dispatch(actionCounterInc())},
      onClickDec: () => {dispatch(actionCounterDec())},
    }
  }
)(Counter)
