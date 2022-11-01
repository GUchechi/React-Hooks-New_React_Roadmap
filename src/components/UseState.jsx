import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [name, setName] = useState("Dipesh")
    const [flag, setFlag] = useState(false)

    const changeName = () => {
        setFlag(!flag)
    }

  return (
    <div className='App'>
      <div>Hello, {flag ? name : ''} </div>
      <button onClick={changeName}>Click me!!!</button>
    </div>
  )
}

export default UseState
