import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateToDo, toggleToDoComplete, deleteToDo } from '../store/todosSlice';
import cn from 'classnames';
import { baseTheme } from '../styles/theme'


export default function ToDoLine({ id, todo }) {
  const dispatch = useDispatch();

  const [editValue, setEditValue] = useState(todo.value);
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdateToDo = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    dispatch(updateToDo({ id, newValue: editValue }));
    setIsEdit(false);
  }

  const handleToggleToDoComplete = () => {
    dispatch(toggleToDoComplete({ todo }));
  }

  const handleDeleteToDo = () => {
    dispatch(deleteToDo({ id: todo.id }));
  }

  function changeIsEdit() {
    setIsEdit(!isEdit);
  }

  const changeEditValue = (e) => {
    setEditValue(e.target.value)
  }

  return (
    <ToDoLineBody >
      <div className={cn('todo-body',{ reset: isEdit,})} >
        <input
          className={cn('todo-body__checkbox',{
            hippen: isEdit,
          } )}
          type='checkbox'
          checked={todo.isCompleted}
          onChange={handleToggleToDoComplete}
        />
        {isEdit ? (
          <input
            autoFocus
            className='todo-body__update-input reset'
            type='text'
            value={editValue}
            onChange={changeEditValue}
            onKeyDown={handleUpdateToDo}
            onBlur={changeIsEdit}
          />
        ) : (
          <>
            <div className='todo-body__div-button' onDoubleClick={changeIsEdit}>
              <div
                className={cn('todo-body__div', {
                  completed: (todo.isCompleted),
                })}
                onDoubleClick={changeIsEdit}>
                {todo.value}
              </div>
              <button className='closed-button' onClick={handleDeleteToDo}>X</button>
            </div>

          </>
        )
        }
      </div>
    </ToDoLineBody>
  )
}

const ToDoLineBody = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  max-width: ${baseTheme.sizes.desctop};
  min-height: ${baseTheme.sizes.height};
  width: 100%;
  height: 100%;
  border:  ${baseTheme.border.grey};;

  .closed-button{
    opacity: 0;
    background-color: white;
    padding: ${baseTheme.padding.little};
   &:hover{
      cursor: pointer; 
    }
  }

  &:hover .closed-button{
      opacity: 1;
    }

  .todo-body{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    column-gap: 10px;
    padding: 0 ${baseTheme.padding.large};
    width: 100%;
    height: 100%;
    max-width: ${baseTheme.sizes.desctop};
  }

  .reset{
    appearance: none;

  }
  .todo-body__update-input{
    width: ${baseTheme.sizes.shirt_dectop};
    height: 39px;
  }
  .todo-body__update-input:focus {
    outline: none;
    border:  ${baseTheme.border.red};
  }

  .todo-body__checkbox{
    appearance: none;
    -webkit-appearance: none;
    display: flex;
    opacity: 1;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    border:  ${baseTheme.border.red};
    cursor: pointer;
  }

  .todo-body__checkbox:checked{
    background-color:${baseTheme.colors.light_pink};
  }
  
  .todo-body__checkbox:checked::after{
    content: '✓';
    position: absolute;
    transform: scale(1.5);
  }

  .hippen{
    opacity: 0;
  }
  .todo-body__div{
    display: flex;
    text-align: left;
    word-wrap: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    max-width: 100%;
    max-height: 100%;
  }

  .completed{
    text-decoration: line-through;
  }

  .todo-body__div-button{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

`

