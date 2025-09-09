import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "todo msg",
            completed : false, 
        }//we make the object of each todo and each todo will have the these functionality we store the todos in the array
    ],

    addToDo: (todo) => {},//we only write the name of function and what will we the pass in these function here and define it in another place
    updateToDo: (id,todo) => {},
    deleteToDo: (id) => {},
    toggleCompleted: (id) => {id}
})

export const useToDo = () => {
    return useContext(ToDoContext)//when you use useContext you need to give context which you are talking about
}

export const  ToDoProvider = ToDoContext.Provider