import { createSelector } from 'reselect';

const getTodos = state => state.todos.todos;
const getFilter = state => state.todos.filter;

export const getFilteredToDos = createSelector([getTodos, getFilter],
    (getTodos, getFilter) => {
        switch (getFilter) {
            case 'Active':
                return getTodos.filter(todo => !todo.isCompleted);
            case 'Completed':
                return getTodos.filter(todo => todo.isCompleted);
            default:
                return getTodos;
        }
    }
);
