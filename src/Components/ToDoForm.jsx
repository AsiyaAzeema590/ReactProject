import React, { useState } from 'react'
import { useToDo } from '../Context';

function ToDoForm() {
    
    const [todo,setTodo] = useState("")

    const {addTodo} = useToDo()

    const add = (e) => {
       e.preventDefault()

       if( !todo) return

       addTodo({  todo  ,completed : false})// we pass the value as a object because we spread it amf if field and value name same then the we need to write only one name
       setTodo("")
       }

    return (
        <form  onSubmit = {add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}// we connect the value with state
                onChange={(e) => setTodo(e.target.value)}//
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default ToDoForm
