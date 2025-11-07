import React,{useId} from 'react'

function InputBox({
    label,
    Amount,
    onAmountChange,
    onCurrencyChange,//for change the currency
    currencyOptions =[],// i want every data came in an array format atleast  if data doesn't come then empty array will be there
    selectCurrency = "usd",
    amountDisable = false,//if user does not want to give any amount
    currencyDisable = false,

    className = "",//we write the input which we take 
}) {
   const amountInputId = useId()//useID is a hook

  return (//in line 11 we write the css in the js bcuz if a user want to give any css then this code will work
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
      <label   htmlFor={amountInputId}  className='text-black/40 mb-2 inline-block' >{label}</label>
      <input id={amountInputId} className='outline-none w-full bg-transparent py-1.5'
      type="number"
      placeholder='Amount'
      disabled={amountDisable}//by default its value is false but if user want to  give the value then he can
      value={Amount}//we take amountdisable value from the amount
      //we convert it into number becuz java script give the event in string format
      onChange={(e) => onAmountChange && onAmountChange (Number(e.target.value))}//if onamountchange exist then assign the value to target and number is used to change the value into number becuz somnetimes java script take value as string 
      />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
      <p className='text-black/40 mb-2 w-full'> Currency type</p>
      <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
       value={selectCurrency} //take the default value usd
       onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
       disabled={currencyDisable}>
       
       {currencyOptions.map((currency) =>(
        <option  key={currency} value={currency}>{currency}</option>//never forget the key in loop in react and jsx
       ))}
    
       
       </select> 
      </div>
    </div>
  )
}

export default InputBox//we export this file into index.js
