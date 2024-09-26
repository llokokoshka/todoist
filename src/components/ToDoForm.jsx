import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { takeTodo, checkedAllToDos } from '../store/actions';

export default function ToDoForm(){
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('');

    const handlerTakeToDo = (e) => {
        if (e.key === 'Enter' && todoValue) {
          dispatch(takeTodo({
            value: todoValue,
            isCompleted: false
          }));
          setTodoValue('');
        }
      };

      const handlerCheckedAllToDos = () => {
        dispatch(checkedAllToDos());
      };

    return(
        <ToDoBody>
            <div className='todo-input__arrow' onClick={handlerCheckedAllToDos}>✔</div>
            <input className='todo-input__field' type='text' value={todoValue}
            onChange={(e) => { setTodoValue(e.target.value) }}
            onKeyDown={handlerTakeToDo}
            placeholder='What needs to be done?'></input>
        </ToDoBody>
    )
}

const ToDoBody = styled.div` 
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
    width: 550px;
    height: 50px;
    padding-left: 7px;
  }

`
