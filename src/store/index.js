import { configureStore } from "@reduxjs/toolkit";
import todoReduser from './todosSlice';

export const store = configureStore({
   reducer: {
      todos: todoReduser,
   }
})
