import {configureStore} from '@reduxjs/toolkit';//first you need to create store and implement configure in the file
import todoReducer from '../features/todo/todoSlices'
export const store = configureStore({
    reducer: todoReducer
})// we need to export this and it always take the object 
// the store should get the awareness of all reducers if we dont aware the reducers the store will not update the any value