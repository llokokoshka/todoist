import React from 'react';
import styled from 'styled-components';

export default function FooterLine(props) {
  return (
    <FooterLineBody>
      <div>
        {props.filterTodos.length} items left
      </div>
      <div className='footer-buttons-block'>
        <button className='footer-button' active={props.param === 'All'} onClick={() => props.setParam('All')}>All</button>
        <button className='footer-button' active={props.param === 'Active'} onClick={() => props.setParam('Active')}>Active </button>
        <button className='footer-button' active={props.param === 'Completed'} onClick={() => props.setParam('Completed')}>Completed</button>
      </div>
      <div>
        <button className='clean-button' onClick={() => props.clearAll()}>Clear completed</button>
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
    border: ${(props) => (props.active ? "1px solid #b83f45" : "none")};
    border-radius: 3px;  
    &:hover {
          background-color: #FFFAFA;
          border: 1px solid transparent;
          
          border-color: #b83f45;
          cursor: pointer; 
      }
  }
  .clean-button{
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: ${(props) => (props.active ? "b83f45" : "white")};
    &:hover {
        background-color: #FFFAFA;
        text-decoration: underline;
        cursor: pointer; 
    }
    &:active{
        background: #FFFAFA;
    }
  }

`