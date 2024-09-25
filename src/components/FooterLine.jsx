import React from 'react';
import styled from 'styled-components';

export default function FooterLine(props) {
    return(
    <FooterBody>
      <div>
          {props.filterTodos.length} items left
      </div>
      <FooterButtons>
          <ButtonInFooter active={props.param === 'All'} onClick={() => props.setParam('All')}>All</ButtonInFooter>
          <ButtonInFooter active={props.param === 'Active'} onClick={() => props.setParam('Active')}>Active</ButtonInFooter>
          <ButtonInFooter active={props.param === 'Completed'} onClick={() => props.setParam('Completed')}>Completed</ButtonInFooter>
      </FooterButtons>
      <div>
          <ButtonClearCompleted onClick={() => props.clearAll()}>Clear completed</ButtonClearCompleted>
      </div>
    </FooterBody>
    )
}

const FooterBody = styled.div`
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
`

const FooterButtons = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`

const ButtonInFooter = styled.button`
  padding: 5px;
  background-color: white;
  border: ${(props) => (props.active ? "1px solid #b83f45" : "none")};
  border-radius: 3px;  
  &:hover {
        background-color: #FFFAFA;
        border: 1px solid transparent;
        
        border-color: #b83f45;
        cursor: pointer; 
    }
`

const ButtonClearCompleted = styled.button`
    padding: 5px;
  background-color: ${(props) => (props.active ? "b83f45" : "white")};
    &:hover {
        background-color: #FFFAFA;
        text-decoration: underline;
        cursor: pointer; 
    }
    &:active{
        background: #FFFAFA;
    }
`