import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateToDo, changeToDoCompleted, deleteToDo } from '../store/actions';

export default function ToDoLine({ index, todo }) {
  const dispatch = useDispatch();

  const [editValue, setEditValue] = useState(todo.value);
  const [isEdit, setIsEdit] = useState(false);

  const handlerUpdateToDo = (e) => {
    if (e.key === 'Enter') {
      dispatch(updateToDo({ index, newValueOfTodo: editValue }));
      setIsEdit(false);
    }
  }

  const handlerChangeToDoCompleted = () => {
    dispatch(changeToDoCompleted(index));
  }

  const handlerDeleteToDo = () => {
    dispatch(deleteToDo(index));
  }

  function changeIsEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <ToDoLineBody key={index}>
      <div className='todo-body' isCompleted={todo.isCompleted}>
        <input className='todo-body__checkbox' type='checkbox' checked={todo.isCompleted} onChange={handlerChangeToDoCompleted}></input>
        {isEdit ? (<input type='text' value={editValue}
          onChange={(e) => {setEditValue(e.target.value)}}
          onKeyDown={handlerUpdateToDo}
          autoFocus
          onBlur={changeIsEdit}></input>) :
          (<div className='todo-body__div' style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
            onDoubleClick={changeIsEdit}>
            {todo.value}</div>
          )
        }
      </div>
      <button className='closed-button' onClick={handlerDeleteToDo}>X</button>
    </ToDoLineBody>
  )
}

const ToDoLineBody = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  border: 1px solid #f5f5f5 !important;

  .closed-button{
    opacity: 0;
    background-color: white;
    padding: 3px !important;
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
    padding: 7px !important;
    width: 100%;
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
    text-align: left;
  }

`

