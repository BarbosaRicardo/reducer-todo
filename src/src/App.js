/**********************************************************
 * ❶ import { useReducer } from 'react'
 * ❷ import { initialState, reducer } from reducer folder
 *********************************************************/



import React, { useReducer } from 'react';

import {initialState, reducer} from './reducers/reducer'
import TodoForm from './components/TodoForm.js'
import Todo from './components/Todo.js'


import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
    <TodoForm dispatch ={dispatch}/>
    <button onClick={() => dispatch({type: "removeCompleted"})}>Remove Complete</button>
      {state.map(item => {
        return <Todo key={item.id} item={item} dispatch = {dispatch}/>
      })}
    </div>
  );
}

export default App;

