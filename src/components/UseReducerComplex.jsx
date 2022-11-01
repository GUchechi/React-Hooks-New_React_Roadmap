import React, { useReducer } from 'react'
import { useState } from 'react';


const initialState = [{
    id:Date.now(), name: 'Godswill', email: 'godswill@gmail.com'
}];
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
          return [...state, action.payload] 
        case 'delete':
          return state.filter(contact => {
            return contact.id !== action.payload.id;
          })
    
        default:
            throw new Error();
    }
}

const UseReducerComplex = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const addContact = (e) => {
        e.preventDefault();
        const contact = {
            id: Date.now(),
            name,
            email,
        };
        setName('')
        setEmail('')
        dispatch({
            type: 'add',
            payload: contact
        })
    }
  return (
    <div>
        <h1>Complex useReducer Hook</h1>
        <form onSubmit={addContact}> 
            <input 
                type="text"
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                 /> <br /> <br></br>
            <input 
                type="email"
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />
                 <button>Add Contact</button>
        </form>
        <div>
            <ul>
                { state.map(contact => (
                    <li key={contact.id}>
                        <h2>{contact.name}</h2>
                        <p>{contact.email}</p>
                        <div>
                            <button 
                                onClick={() => {
                                    dispatch({
                                        type: 'delete',
                                        payload: {id: contact.id}
                                    })
                                }}
                            >Delete Contact</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default UseReducerComplex