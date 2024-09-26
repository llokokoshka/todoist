import { createSlice } from '@reduxjs/toolkit'

const   initialState = {
  todos: [],
  filter: 'All',
}


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    takeTodo: (state, action) =>{
        state.todos.push(action.payload);
    },
    updateToDo:(state, action) =>{
        const {index, newValueOfTodo} = action.payload;
        state.todos[index].value = newValueOfTodo;
    },
    changeToDoCompleted:(state, action) =>{
        const index = action.payload;
        state.todos[index].isCompleted = !state.todos[index].isCompleted;
    },
    deleteToDo:(state, action) =>{
        const index = action.payload;
        state.todos.splice(index, 1);
    },
    clearAllCompletedToDos:(state) =>{
       return state.todos.filter(todo => !todo.isCompleted);
    },
    checkedAllToDos:(state) =>{
        const areAllCompleted = state.every(todo =>todo.isCompleted);
        return state.todos.map(todo => ({...todo, isCompleted: !areAllCompleted}));
    },
    changeFilter: (state, action) =>{
      state.filter = action.payload;
    },
  }
})

export const {  takeTodo, 
                updateToDo, 
                changeToDoCompleted, 
                deleteToDo, 
                clearAllCompletedToDos, 
                checkedAllToDos, 
                changeFilter } = todosSlice.actions;

export default todosSlice.reducer;