import { useState , useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const[password, setpassword] = useState("")

  //useref hook
   const passwordRef = useRef(null ) //give the reference of any element and used to connect the two entity and when you want to use useref you need to change into a variable

  const passwordGenerator = useCallback(() => {//usecallback memorize the function 
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"//if number is allowed it will add the number into string
    if(charAllowed) str += "!@#$%^&8~`"//if charAllowed it will the char in the string

    for( let i = 1 ; i <= length ; i++ ){
       let char = Math.floor(Math.random() * str.length + 1)//it generate the random value and add the string character and 1 is used to remove the decimal
       pass += str.charAt(char)//we add the value into the pass and str.charat is used for the value 
    }

    setpassword(pass)
  } ,[length,numberAllowed,charAllowed,setpassword])

  const copypasswordtoclipboard = useCallback(() =>{
    passwordRef.current?.select()//this give the copypart a shadow ? is used for the optional select
    passwordRef.current?.setSelectionRange(0,length)//this is used for select the range
    window.navigator.clipboard.writeText(password)//this take the value from clipboard
  },[password])// we pass the password because clipboard is depend on the password

  useEffect(() =>{//when you reload yourpage this hook always run first or if you make changes with its depenedencies then it will also run
      passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 my-10 text-orange-500 bg-gray-700 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text" 
          value={password}
          className=' outline-none w-[80%] py-1 px-3'
          placeholder='password'
          ref = {passwordRef}//we pass the useref here because we want to connect input to button 
          readOnly/>
          {/* readOnly make the field unwrittenable it means ypu cant write anything on input field */}
          <button  onClick={copypasswordtoclipboard} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>
         </div>  
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input 
            type="range" // range type ois used for the slider
            min={6} 
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) =>{setlength(e.target.value)}}//we are using setlength because we want to perform the opration on setlength
            />
            <label >length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumbersAllowed((prev)=>!prev)//this condition reverse the previous value 
            }}
            />
            <label htmlFor='numberInput '> numbers:</label>
            <input 
            type='checkbox'
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setcharAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
      
          </div>
        </div>
      </div>
    </>
  );
}


export default App
