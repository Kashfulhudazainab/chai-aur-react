import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setlength] = useState(8);
const[number,setNumber]=useState(false);
const[character,setCharacter]=useState(false);
const[inputpass,setpass]=useState("");

//useref
const passwordref=useRef(null)

const passwordGenerator = useCallback(()=>{
  let pass="";
  let string="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";   //contain data used for password

  if(number) string+="0123456789"
  if(character) string+="!@#$%^&*(){}[]:'|\?/><,.|~`"

for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random()*string.length+1);
  pass+=string.charAt(char);
}

setpass(pass)


},[length,number,character,setpass])   //method optimization

const copyPasswordToClipboard=useCallback(()=>{
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0,9)  //total 10 values
  window.navigator.clipboard.writeText(inputpass)
},[inputpass])

//useeffect hook(synchoronizing)

useEffect(()=>{
  passwordGenerator();
},[length,number,character,passwordGenerator])   //again ruuning after changes in passwordGenerator

  return (
   <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-800'>
  <h1 className='text-white text-center my-3'>Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input 
    type='text'
    value={inputpass}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordref}
    />
    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
      Copy
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-centre gap-x-1'>
<input 
type="range" 
min={0}
max={100}
className='cursor-pointer'
onChange={(e) => {setlength(e.target.value)}}
/>
<label>Length:{length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input 
      type="checkbox" 
      defaultChecked={number}
      id='numberInput'
      onChange={()=>{
        setNumber((prev) => !prev);
      }}
      />
      <label>Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input 
      type="checkbox" 
      defaultChecked={character}
      id='chARACTERInput'
      onChange={()=>{
        setCharacter((prev) => !prev);
      }}
      />
      <label>Character</label>
    </div>
  </div>
</div>
   </>
  )

}
export default App;
