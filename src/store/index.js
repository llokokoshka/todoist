import { configureStore } from "@reduxjs/toolkit";
import todoReduser from './actions';

export const store = configureStore({
    reducer:{
       todos: todoReduser,
    }
  })
  