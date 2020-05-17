import React from "react"
import "./App.css"
import { VisibleCounter } from "./components/counter/"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import { counterReducer as counter } from "./reducers/counterReducer"
import { todosReducer as todos } from "./reducers/todoListReducer"
import { TodosList } from "./components/todosList"

const rootReducer = combineReducers({ counter, todos })


const l = [
  {
    id: 1,
    text: "Task1",
    completed: false,
  },
  {
    id: 2,
    text: "Task2",
    completed: false,
  },
  {
    id: 3,
    text: "Task3",
    completed: true,
  },
]

const store = createStore(rootReducer,{todos:l})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <VisibleCounter value="0" />
        <TodosList></TodosList>
      </div>
    </Provider>
  )
}

export default App
