import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
 const[amount,setamount] = useState(0)
 const[from,setfrom] = useState("usd")
 const[To,setTo] = useState("inr")
 const[convertedAmount,setConvertedAmount] = useState(0)
   
 const currencyInfo = useCurrencyInfo(from)

 const options = Object.keys(currencyInfo)

 //swaping
 const swap = () => {
  setfrom(To)
  setTo(from)
  setamount(convertedAmount)
  setConvertedAmount(amount)
 }

const convert = () =>{
  setConvertedAmount(amount*currencyInfo[To])//we multiply the amount to currencyInfo and in which  currency we want to covert we will take that value from To
}
 
  return (
   <>
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
   style={{
    backgroundImage:`url('https://images.pexels.com/photos/27244375/pexels-photo-27244375/free-photo-of-car-by-maelifell-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
   }}>
    <div className='w-full '>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg
      p-5 backdrop-blur-sm bg-white/30'>
        <form
        onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}
        >
        <div className='w-full mb-1'>
          <InputBox 
          label="from"
          amount ={amount}
          currencyOptions = {options }
          onCurrencyChange = {(currency) => setfrom(currency)}
          onAmountChange={(amount) => setamount(amount)}
          selectCurrency={from}
          ></InputBox>
        </div>
        <div className='relative w-full h-0.5'> 
        <button 
        type="button"
        className='absolute left-1/2
        -translate-x-1/2
        -translate-y-1/2
        border-white rounded-md
        bg-blue-600 text-white px-2 py-0.5'
        onClick={swap}>Swap</button>
        </div>
        <div className='w-full mt-1 mb-4'>
          <InputBox
        label="To"
        amount ={convertedAmount}
        currencyOptions = {options }
        onCurrencyChange = {(currency) => setTo(currency)}
        selectCurrency={To}
        amountDisable
          ></InputBox>
        </div>
        <button type="submit"
        className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert{from.toUpperCase()} to {To.toUpperCase()}
        </button>
 
      </form>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
