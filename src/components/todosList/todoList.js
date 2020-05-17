import React from "react"

const AddTodo = ({ onClickAdd }) => {
  let input

  const fireAddEvent = () => {
    if(input.value === "") {
      return
    }
    onClickAdd({ text: input.value })
    input.value = ""
    input.focus()
  }

  return (
    <div>
      <input
        ref={(node) => (input = node)}
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            fireAddEvent()
          }
        }}
      ></input>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          fireAddEvent()
        }}
      >
        Add
      </button>
    </div>
  )
}

const Todo = ({ todo }) => {
  const { id, text, completed } = todo
  return (
    <li key={id}>
      <span
        style={{
          color: "red",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </span>
    </li>
  )
}

export const TodosList = ({ todos, onClickAdd }) => {
  return (
    <div>
      <AddTodo onClickAdd={onClickAdd} />
      <ol>
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} onClickAdd={onClickAdd}></Todo>
        })}
      </ol>
    </div>
  )
}
