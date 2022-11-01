import React, { useState } from 'react'
import { useEffect } from 'react';

const UseEffect = () => {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("I've Made it!!!")
    const showDate = () => {
        setTime(new Date().toString())
    }

    useEffect(() =>{
        console.log("I've Made it!!!")
        const interval = setInterval(showDate, 1000);

        return () => {
            console.log("Cleared useEFfect")
            clearInterval(interval)
        }

    },[time])
    return (
      <div>
        <div>{time}</div>
        <button onClick={showDate}>Show Date</button>
        <div>{message}</div>
        <button onClick={() => {
            setMessage('changed Functional component')
        }}>Change Message</button>
      </div>
  )
}

export default UseEffect