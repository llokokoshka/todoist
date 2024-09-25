import React from 'react';
import styled from 'styled-components';

export default function ToDoLine(props) {
  return (
    <Li key={props.index}>
      <Task isCompleted={props.todo.isCompleted}>
        <input type='checkbox' checked={props.todo.isCompleted} onChange={() => props.correctCompleting(props.index)}></input>
        <div>{props.todo.value}</div>
      </Task>
      <XButton onClick={() => props.clear(props.index)}>X</XButton>
    </Li>
  )
}

const XButton = styled.button`
  opacity: 0;
  background-color: white;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 3px;
  padding-bottom: 3px;
   &:hover{
      cursor: pointer; 
    }
`

const Li = styled.li`
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
  &:hover ${XButton}{
    opacity: 1;
  }
`
const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  column-gap: 10px;
  width: 100%;
  div {
    text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
    text-align: left;
  }
`
