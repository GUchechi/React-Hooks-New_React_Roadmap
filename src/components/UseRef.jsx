import React, { useState, useRef } from 'react'

const UseRef = () => {
    const [name, setName] = useState("")
    const [counter,setCounter] = useState(0)
    const inputEl = useRef(null)
    
    const resetInput = () => {
        setName('')
        inputEl.current.focus();
    }
  return (
    <div>
        <div>
         <input 
            type="text"
            ref={inputEl}
            value={name} 
            name='name'
            autoComplete='off'
            onChange={(e) => {
                setName(e.target.value)
            }}
             />
             <button onClick={resetInput}>Reset</button>
        </div>
             <div>My name is {name}</div>
             <h1>Random Counter : {counter}</h1>
             <button onClick={(e) => 
                setCounter(Math.ceil(Math.random() * 100))}>Generate Number</button>
    </div>
  )
}

export default UseRef