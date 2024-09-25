import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


export default function ToDoLine(props) {
  const [editValue, setEditValue] = useState(props.todo.value);
  const [isEdit, setIsEdit] = useState(false);

  function IsEditing() {
    setIsEdit(true);
  }

  function takeEditingToDo(e) {
    if (e.key === 'Enter') {
      props.updateToDo(props.index, editValue);
      setIsEdit(false);
    }
  }
             
  return (
    <ToDoLineBody key={props.index}>
      <div className='todo-body' isCompleted={props.todo.isCompleted}>
        <input className='todo-body__checkbox' type='checkbox' checked={props.todo.isCompleted} onChange={() => props.changeToDoCompleted(props.index)}></input>
        {isEdit ? (<input type='text' value={editValue}
          onChange={(e) => { setEditValue(e.target.value) }}
          onKeyDown={takeEditingToDo}
          autoFocus
          onBlur={() => setIsEdit(false)}></input>) :
          (<div className='todo-body__div' style={{textDecoration: props.todo.isCompleted ? "line-through" : "none"}}
            onDoubleClick={IsEditing}>
            {props.todo.value}</div>
          )
        }
      </div>
      <button className='closed-button' onClick={() => props.deleteToDo(props.index)}>X</button>
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
    
    /* position; */
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

