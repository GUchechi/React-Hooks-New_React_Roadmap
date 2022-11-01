import React from 'react'
import useCounter from './CustomHook'

const UseCounter = () => {
  const [value, decrement, increment, reset] = useCounter(0)
  return (
    <div>
       <h1>Custom Hook</h1>
        <h2>{value}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseCounter