import React, { useState } from 'react'

const UseRef = () => {
    const [name, setName] = useState("")
    const resetInput = () => {
        setName('')
    }
  return (
    <div>
        <div>
         <input 
            type="text" 
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
    </div>
  )
}

export default UseRef