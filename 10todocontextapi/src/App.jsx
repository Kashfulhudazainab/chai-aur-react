import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './Context'
import TodoItem from './Components/todoitems'
import TodoForm from './Components/todoform'

function App() {
  const [todos, settodos] = useState([])

const addtodo =(todo) =>{
settodos((prev)=>[{id:Date.now(),...todo},...prev])
}

const updateTodo =(id,todo) =>{
  settodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
}

const deletetodo=(id)=>{
  settodos((prev) =>prev.filter((todo)=>todo.id!==id))  //give all todo excluding that having the same id 
}

const togglecomplete=(id)=>{
  settodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))   //overwrte one value
}

useEffect(()=>{
const todos=JSON.parse(localStorage.getItem("todos"));

if(todos&&todos.length>0){
settodos(todos)
}
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])



  return (
    <Todoprovider value={{todos,addtodo,updateTodo,deletetodo,togglecomplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                 <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
