import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateToDo, changeToDoCompleted, deleteToDo } from '../store/todosSlice';

export default function ToDoLine({id, todo}) {
  const dispatch = useDispatch();

  const [editValue, setEditValue] = useState(todo.value);
  const [isEdit, setIsEdit] = useState(false);

  const handlerUpdateToDo = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    dispatch(updateToDo({ id, newValue: editValue }));
    setIsEdit(false);
  }

  const handlerChangeToDoCompleted = () => {
    dispatch(changeToDoCompleted({todo}));
  }

  const handlerDeleteToDo = () => {
    dispatch(deleteToDo({id: todo.id}));
  }

  function changeIsEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <ToDoLineBody >
      <div className='todo-body'>
        
        {isEdit ? (
          <input
            type='text'
            value={editValue}
            autoFocus
            onChange={(e) => { setEditValue(e.target.value) }}
            onKeyDown={handlerUpdateToDo}
            onBlur={changeIsEdit}
          />
        ) : (
          <>
            <input
          className='todo-body__checkbox'
          type='checkbox'
          checked={todo.isCompleted}
          onChange={handlerChangeToDoCompleted}
        />
         <div
            className='todo-body__div'
            style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
            onDoubleClick={changeIsEdit}>
            {todo.value}
          </div>
          <button className='closed-button' onClick={handlerDeleteToDo}>X</button>
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
  align-items: flex-start;
  flex-direction: row;
  max-width: 550px;
  width: 100%;
  border: 1px solid #f5f5f5;

  .closed-button{
    opacity: 0;
    background-color: white;
    padding: 3px;
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
    padding: 7px; 
    width: 100%;
    max-width: 550px;
  }

  .todo-body__checkbox{
    appearance: none;
    -webkit-appearance: none;
    border-radius: 50%;
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    border: 1px solid #b83f45;
    cursor: pointer;
  }
  .todo-body__checkbox:checked{
    background-color:#ffe7e7;
  }
  .todo-body__checkbox:checked::after{
    content: '✓';
    position: absolute;
    transform: scale(1.5) translate(33%, 15%);
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

`

