import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  filter: 'All',
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    addTodo: {
      prepare(data) {
        return {
          payload: {
            value: data,
            uniqueID: Math.random(),
          }
        }
      },
      reducer(state, action) {
        state.todos.push({
          id: action.payload.uniqueID,
          value: action.payload.value,
          isCompleted: false,
        },);
      }
    },

    updateToDo: (state, action) => {
      const { id, newValue } = action.payload;
      state.todos.forEach((todo) => {
        if (id === todo.id) {
          todo.value = newValue;
        }
      })
    },

    toggleToDoComplete: (state, action) => {
      const { todo } = action.payload;

      state.todos.forEach((myTodo) => {
        if (todo.id === myTodo.id) {
          myTodo.isCompleted = !myTodo.isCompleted;
        }
      })
    },

    deleteToDo: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },

    clearAllCompletedToDos: (state) => {
      state.todos = state.todos.filter(todo => !todo.isCompleted);
    },
    toggleAllToDoCompletion: (state) => {
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
  toggleToDoComplete,
  deleteToDo,
  clearAllCompletedToDos,
  toggleAllToDoCompletion,
  changeFilter,
} = todosSlice.actions;

export default todosSlice.reducer;