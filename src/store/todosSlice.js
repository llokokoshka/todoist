import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  filter: 'All',
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const uniqueID = `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      state.todos.push({ id: uniqueID, value: action.payload, isCompleted: false },);
    },

    updateToDo: (state, action) => {
      const { id, newValue } = action.payload;
      state.todos.forEach((todo) => {
        if (id === todo.id) {
          todo.value = newValue;
        }
      })
    },

    changeToDoCompleted: (state, action) => {
      const { todo } = action.payload;

      state.todos.forEach((myTodo) => {
        if (todo.id === myTodo.id) {
          myTodo.isCompleted = !myTodo.isCompleted;
        }
      })
    },

    deleteToDo: (state, action) => {
      const {id} = action.payload;
      console.log(id);
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },

    clearAllCompletedToDos: (state) => {
      state.todos = state.todos.filter(todo => !todo.isCompleted);
    },
    checkedAllToDos: (state) => {
      const areAllCompleted = state.todos.every(todo => todo.isCompleted);
      state.todos = state.todos.map(todo => ({ ...todo, isCompleted: !areAllCompleted }));
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  }
})

export const {
  addTodo,
  updateToDo,
  changeToDoCompleted,
  deleteToDo,
  clearAllCompletedToDos,
  checkedAllToDos,
  changeFilter,
} = todosSlice.actions;

export default todosSlice.reducer;