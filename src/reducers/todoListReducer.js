import {
  ACTION_TODO_ADD,
  ACTION_TODO_DELETE,
  ACTION_TODO_TOGGLE,
} from "../actions/todoListActions"

const initialState = []

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TODO_ADD:
      console.log(action)
      return state.concat([
        { id: action.id, text: action.text, completed: false },
      ])
    case ACTION_TODO_DELETE:
      return state.filter((todo) => todo.id !== action.id)
    case ACTION_TODO_TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? todo : { ...todo, completed: !todo.completed }
      )
    default:
      return state
  }
}
