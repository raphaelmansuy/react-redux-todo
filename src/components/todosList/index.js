import { TodosList as PresTodoList } from "./todoList"
import { connect } from "react-redux"
import { actionToDoAdd,createTodo } from "../../actions/todoListActions"

let nextId = 0;

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: ({text}) => dispatch(actionToDoAdd( nextId++, text))
  }
}

export const TodosList = connect(mapStateToProps, mapDispatchToProps)(PresTodoList)

