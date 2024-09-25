import React from 'react';
import styled from 'styled-components';

export default function FooterLine(props) {
  

  const countOfNecessaryItems = props.todos.filter((todo)=>{
    return !todo.isCompleted;
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
  padding: 7px  !important; 
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
    padding: 5px;
    background-color: white;
    border-radius: 3px;  
  }
  
  .footer-button:hover{
    background-color: #ffe7e7;
    cursor: pointer; 
  }

  .clean-button{
    padding: 5px;
    background-color: white;
    &:hover {
        text-decoration: underline;
        cursor: pointer; 
    }
  }
`