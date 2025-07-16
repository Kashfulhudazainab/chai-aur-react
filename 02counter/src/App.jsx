import { useState } from 'react'   //hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter, setcounter]=useState(5)

 //let counter=5;

 const addvalue =() =>{
//counter=counter+1;
//console.log("clicked");
if(counter<20)
setcounter(counter+1)  //state change in ui using hooks

 }

 const removevalue=()=>{
  //counter=counter-1;
  //setcounter(counter)
  if(counter>=1)
  setcounter(counter-1);

 }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
