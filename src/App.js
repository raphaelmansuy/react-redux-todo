import React from "react"
import "./App.css"
import { VisibleCounter } from "./components/counter/"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { counterReducer } from "./reducers/counterReducer"

const store = createStore(counterReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <VisibleCounter value="0" />
      </div>
    </Provider>
  )
}

export default App
