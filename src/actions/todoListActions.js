export const ACTION_TODO_ADD = "ACTION_TODO_ADD"
export const ACTION_TODO_DELETE = "ACTION_TODO_DELETE"
export const ACTION_TODO_TOGGLE = "ACTION_TODO_TOGGLE"

export const actionToDoAdd = (id,text) => {
  return { type: ACTION_TODO_ADD, id, text }
}

export const actionToDoDelete = (id) => {
  return { type: ACTION_TODO_DELETE, id }
}

export const actionToDoToggle = (id) => {
  return { type: ACTION_TODO_TOGGLE, id }
}

export const createTodo = ({ id, text }) => {
  return {
    id,
    text,
    completed: false
  }
}
