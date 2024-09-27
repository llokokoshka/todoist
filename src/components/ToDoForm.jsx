import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, checkedAllToDos } from '../store/todosSlice';

export default function ToDoForm() {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');

  const handlerTakeToDo = (event) => {
    event.preventDefault();
    if (!todoValue.trim()) {
      return;
    }
    dispatch(addTodo(todoValue));
    setTodoValue('');
  };

  const handlerCheckedAllToDos = () => {
    dispatch(checkedAllToDos());
  };

  const changeTodoValue = (e)=>{
    setTodoValue(e.target.value)
  }
  return (
    <ToDoBody onSubmit={handlerTakeToDo}>
      <div className='todo-input__arrow' onClick={handlerCheckedAllToDos}>✔</div>
      <input
        className='todo-input__field' type='text' value={todoValue}
        onChange={changeTodoValue}
        placeholder='What needs to be done?'
      />
    </ToDoBody>
  )
}

const ToDoBody = styled.form` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 390px){
      max-width: 260px;
    }

  .todo-input__arrow{
    transform: scale(2);
    margin: 0 15px;
    &:hover{
      cursor: pointer; 
    }
  }

  .todo-input__field{
    width: 505px;
    height: 50px;
    padding-left: 7px;
  }

`
