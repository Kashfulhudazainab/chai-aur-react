import { useState } from 'react'
import InputBox  from './Components/InputBox'
import usecurrencyinfo from './hooks/usecurrencyinfo'

function App() {
  
const [amount, setamount]= useState(0)
const [from, setfrom] = useState("usd"); // Make sure this is "usd" or another valid currency code
const [to, setto]= useState("inr")
const [convertedamount, setconvertedamount]= useState(0)


const currencyinfo=usecurrencyinfo(from)

const options=Object.keys(currencyinfo)

const swap =() => {
  setfrom(to),
  setto(from)
  setconvertedamount(amount)
  setamount(convertedamount)
}

const convert =() => {
setconvertedamount(amount * currencyinfo[to])
}

  return (
   <div
   className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
   style={{
    backgroundImage:`url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?_gl=1*122vnsp*_ga*MTg2NzIxMTM0NS4xNzUyNTgzMjk0*_ga_8JE65Q40S6*czE3NTI1ODMyOTMkbzEkZzAkdDE3NTI1ODMyOTMkajYwJGwwJGgw')`
   }}
   >
<div className='w-full'>
<div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop=-blur-sm bg-white/30'>
<form 
onSubmit={(e)=>{
  e.preventDefault();
  convert()
}}
>
<div className='w-full mb-1'>
  <InputBox label="form"
  amount={amount}
currencyoptions={options}
onCurrencyChange={(currency)=>
  setamount(currency)
}
selectCurrency={from}
onAmountChange={(amount)=> setamount(amount)}
  />
</div>
<div className='relative w-full h-0.5'>
  <button
  type='button'
  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
  onClick={swap}
  >
Swap
  </button>
</div>
<div className='w-full mt-1 mb-4'>
<InputBox label="to"
  amount={convertedamount}
currencyoptions={options}
onCurrencyChange={(currency)=> setto(currency)}
selectCurrency={from}
amountdisabled
  />

</div>

<button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
Convert{from.toUpperCase()} to {to.toUpperCase()}
</button>
</form>
</div>
</div>

   </div>
  )
}

export default App
