import React from 'react';
import styled from 'styled-components';

export default function FooterLine(props) {


  const countOfNecessaryItems = props.filterTodos.filter((todo)=>{
      switch (props.filter){
        case 'All':
          return !todo.isCompleted;
        default:
          return todo;
      }
  })
  return (
    <FooterLineBody>
      <div>
        {countOfNecessaryItems.length} items left
      </div>
      <div className='footer-buttons-block'>
        <button className='footer-button' 
         style={{ border: (props.filter === 'All') ? "1px solid #b83f45" : "none"}}
         onClick={() => props.setFilter('All')}>All</button>
        <button className='footer-button' 
        style={{ border: (props.filter === 'Active') ? "1px solid #b83f45" : "none"}}
        onClick={() => props.setFilter('Active')}>Active </button>
        <button className='footer-button' 
        style={{ border: (props.filter === 'Completed') ? "1px solid #b83f45" : "none"}}
        onClick={() => props.setFilter('Completed')}>Completed</button>
      </div>
      <div>
        <button className='clean-button' onClick={() => props.clearAllCompletedToDos()}>Clear completed</button>
      </div>
    </FooterLineBody>
  )
}

const FooterLineBody  = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
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
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    border-radius: 3px;  
  }
  
  .footer-button:hover{
    background-color: #ffe7e7;
    cursor: pointer; 
  }

  .clean-button{
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    &:hover {
        text-decoration: underline;
        cursor: pointer; 
    }
  }
`