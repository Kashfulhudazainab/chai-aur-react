import { useState } from 'react'

import './App.css'
import AddTodo from './components/Addtodo'
import Todo from './components/Todos'

function App() {
 
  return (
    <>
    <h1>Hello world!</h1>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App
