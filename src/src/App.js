/**********************************************************
 * ❶ import { useReducer } from 'react'
 * ❷ import { initialState, reducer } from reducer folder
 *********************************************************/



import React, { useReducer } from 'react';

import { initialState, reducer } from './reducers/reducer'
import TodoForm from './components/TodoForm.js';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
        <TodoForm dispatch={dispatch} />
        <button onClick{() => dispatch({type: "removeCompleted" })}>Remove Complete</button>

    </div>
  );
}

export default App;
