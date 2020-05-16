import React from 'react'

export const Counter = ({value,onClickInc,onClickDec}) => {
  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={onClickInc}>Inc</button>
        <button onClick={onClickDec}>Dec</button>
      </div>
    </div>
  )
}