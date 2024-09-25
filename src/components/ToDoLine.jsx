import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


export default function ToDoLine(props) {
  const [editValue, setEditValue] = useState(props.todo.value);
  const [isEdit, setIsEdit] = useState(false);

  function IsEditing(){
    setIsEdit(true);
  }

  function takeEditingToDo(e){
    if (e.key === 'Enter'){
      props.updateToDo(props.index, editValue);
      setIsEdit(false);
    }
  }

  return (
    <ToDoLineBody key={props.index}>
      <div className='todo-body' isCompleted={props.todo.isCompleted}>
        <input type='checkbox' checked={props.todo.isCompleted} onChange={() => props.changeToDoCompleted(props.index)}></input>
       { isEdit ? ( <input type='text' value={editValue} 
                     onChange={(e) => { setEditValue(e.target.value) }}
                      onKeyDown={takeEditingToDo}
                      autoFocus
                      onBlur={()=>setIsEdit(false)}></input>):
        (<div className='todo-body__div' 
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
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid transparent;
  border-color: #f5f5f5;

  .closed-button{
    opacity: 0;
    background-color: white;
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 3px;
    padding-bottom: 3px;
   &:hover{
      opacity: 1;
      cursor: pointer; 
    }
  }

  .todo-body{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    column-gap: 10px;
    width: 100%;
  }

  .todo-body__div{
    text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
    text-align: left;
  }

`

