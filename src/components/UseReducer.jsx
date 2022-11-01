import React, { useReducer } from 'react'



const initialState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement": 
            return state - 1;
        default:
             throw new Error();   
    }
}


const UseReducer = () => {
    // const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    // const decrement = () => {
    //     setCounter(counter - 1);
    // }
  return (
    <div>
        <h1>useReducer Hook</h1>
        <h2>{state}</h2>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
    </div>
  )
}

export default UseReducer