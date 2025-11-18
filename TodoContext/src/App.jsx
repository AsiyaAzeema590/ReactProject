import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { ToDoProvider } from './Context'
import { ToDoForm } from './Components'
import TodoItem from './Components/ToDoItem'

function App() {
  const [todos,setTodos] = useState([])// we take a default value an empty array if it null then it will the problem thats why we take the empty array

  const addToDo = (todo) => {// here todo is not individual todo
    setTodos((prev) => [{id: Date.now(),...todo} , ...prev])//if directly write the todo then all the previous value will be delete thats why we do thisand ... is used to spread the value
  }

  const updateToDo = (id,todo) => {
       setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
       // todos is a array so prevtodo goes to the every element and if it id equal then we update the value and prevtodo is individual todo
  }
   const deleteToDo = (id) => {
        
    setTodos((prev) => prev.filter((todo) => todo.id != id ))
    //filter create the new array in which delete item will not include and which id is not equal then it will include that value if equal then it will not include that value
   }

   const toggleComplete = (id) => {
      setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed}:prevTodo))
      // we take the all value and overright the complete value 
   }

   // now we learn about local storage

   useEffect (() => {
       const todos = JSON.parse( localStorage.getItem("todos"))

       if (todos && todos.length > 0){// we check the todos have the length  or not and todos have length the perfrom the functionality
         setTodos(todos)
       } 
   }, []) 
   //in react local storage is directly available and every in local storage in string format so we need to convert data into json
   // we want to store the data on local storage but if we write the code here then it first get the date and we dont want it
   //thats why we write the functionality in other useEffect
   useEffect (() => {
      localStorage.setItem("todos", JSON.stringify(todos))//stringfy convert the data into string
   },[todos])

  return (
    // we need to wrap everything in todo provider and which value we want we use the value 
    <ToDoProvider value = {{todos,addToDo,updateToDo,deleteToDo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <ToDoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key = {todo.id}//if you dont use keys then performance degrade
                          className='w-full'>  
                           <TodoItem todo = {todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
       </ToDoProvider>
  )
}

export default App
