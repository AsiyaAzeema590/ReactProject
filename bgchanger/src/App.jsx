import { useState } from 'react'
import './App.css'

function App() {
  const [color , setcolor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-3 rounded-3xl ">
            <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor:"red"}}>red</button>
             // in this we are using arrow function because arrow function want a function not the return value
            <button onClick={()=>setcolor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>setcolor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=>setcolor("pink")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"pink"}}>pink</button>
             <button onClick={()=>setcolor("orange")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"orange"}}>orange</button>
               <button onClick={()=>setcolor("skyblue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
               style={{backgroundColor:"skyblue"}}>skyblue</button>
          </div>
        </div>
      </div>  
    </>
  )
}

export default App
