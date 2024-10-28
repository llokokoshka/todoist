import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, clearAllCompletedToDos } from '../store/todosSlice';
import cn from 'classnames'

const valuesOfFilter = ['All', 'Active', 'Completed'];

export default function FooterLine() {
  const dispatch = useDispatch();

  const { todos, filter } = useSelector(state => state.todos);

  const handlerChangeFilter = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };

  const countOfNecessaryItems = todos.filter((todo) => {
    return !todo.isCompleted;
  })

  const handlerClearAllCompletedToDos = () => {
    dispatch(clearAllCompletedToDos());
  };
  const printValue=(value)=>{
    if (value === 'All')
      return 'Все';
    if (value === 'Active')
      return 'Активные';
    if (value === 'Completed')
      return 'Завершенные';

  }

  return (
    <FooterLineBody>
      <div>
        {countOfNecessaryItems.length} осталось задач
      </div>
      <div className='footer-buttons-block'>
        {
          valuesOfFilter.map((value) => {
            return (
              <button
                key={value}
                className={cn('footer-button', {
                  active: filter === value,
                })}
                onClick={() => handlerChangeFilter(value)}
              >
                {printValue(value)}
              </button>
            )
          })
        }
      </div>
      <div>
        <button className='clean-button' onClick={handlerClearAllCompletedToDos}>Очистить выполненное</button>
      </div>
    </FooterLineBody>
  )
}

const FooterLineBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({theme}) => theme.padding.large};

  @media screen and (max-width: 390px){
    flex-direction: column;
    row-gap: 10px;
  }
  .footer-buttons-block{
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }

  .footer-button{
    padding: ${({theme}) => theme.padding.normal};
    background-color: white;
    border: 1px solid transparent;
    border-radius: ${({theme}) => theme.padding.little};  
  }
  
  .footer-button:hover{
    background-color:${({theme}) => theme.colors.light_pink};
    cursor: pointer; 
  }

  .clean-button{
    padding: ${({theme}) => theme.padding.normal};
    background-color: white;
    &:hover {
        text-decoration: underline;
        cursor: pointer; 
    }
  }

  .active {
    border: ${({theme}) => theme.border.red};
  }
`