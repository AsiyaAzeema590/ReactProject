import { createSlice, nanoid } from "@reduxjs/toolkit"; // we will first need this method we want to genrate unique 
// sp we called the nanoid function this function generate the unique id

const initialState = {// we first identify the initialstate in store and it take the default value so we take the object we it can hold lots of multiple values
       todos: [{id : 1, text: "hello world"}]
}

export const todoSlice = createSlice({
     name: 'todo',// name is the property of reduxtoolkit
     initialState ,// we can define the initialstate here but define it above is the best practice
     reducers:{// reducers are the functionality and property
         
      // in context api we always declare the function but never define it but here we both define and declare the function
       // whenever you define the funcyion you have the access of syntax and action
       // state are the values which function hold but action are the value which will come next
      addTodo:(state,action) => {
            const todo = {
               id : nanoid,
               text : action.payload,//it will give the textwhich user want o sent
            }
            state.todos.push(todo)//this will push the todo in the array
      }, // we can define these function here or outside but if you define it outside you need to pass the reference here
        removeTodo:(state,action) => {
         state.todos = state.todos.filter((todo) => todo.id != action.payload)// this code match the id if id does not match then it will not include the value
        },
     }
})
// reducers does not import like this it always import in two part
 export const {addTodo,removeTodo} = todoSlice.actions
 export default todoSlice.reducer// we need to always export the reducer because they will use in the components