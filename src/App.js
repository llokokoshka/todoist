import styled from 'styled-components';
import { useState } from 'react';



export default function App() {
  const [todos, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [param, setParam] = useState('All');

  let countOfTodos = 0;

  function takeTodo(e) {
    if (e.key === 'Enter' && todoValue) {
      setTodo([...todos, {
        value: todoValue,
        isCompleted: false
      }]);
      setTodoValue('');
    }
  };

  function correctCompleting(i) {
    const newTodos = [...todos];
    newTodos[i].isCompleted = !newTodos[i].isCompleted;
    setTodo(newTodos)
  }

  function clear(i) {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodo(newTodos);
  }

  function clearAll() {
    const newTodos = [...todos];
    let a = newTodos.length;
    let b = 0;
    while (b !== a) {
      if (newTodos[b].isCompleted === true) {
        newTodos.splice(b, 1);
        a--;
      } else {
        b++;
      }
    }
    setTodo(newTodos);
  }

  const filterTodos = todos.filter((todo) => {
    switch (param) {
      case 'All':
        return todo;
        break;
      case 'Active':
        return !todo.isCompleted;
        break;
      case 'Completed':
        return todo.isCompleted;
        break;
    }
    return todo;
  });

  function LiOfList() {
    return (
      <>
        {filterTodos.map((todo, i) => {
          return (
            <Li key={i}>
              <Task isCompleted={todo.isCompleted}>
                <input type='checkbox' checked={todo.isCompleted} onChange={() => correctCompleting(i)}></input>
                <div>{todo.value}</div>
              </Task>
              <XButton onClick={() => clear(i)}>X</XButton>
            </Li>
          )
        })
        }
      </>
    )
  }
  return (
    <Body>
      <Title>
        todos
      </Title>
      <Container>
        <InputField>
          <input type='text' value={todoValue}
            onChange={(e) => { setTodoValue(e.target.value) }}
            onKeyDown={takeTodo}
            placeholder='What needs to be done?'></input>
        </InputField>
        <TodoBody>
          <LiOfList />
        </TodoBody>
        <FooterBody>
          <div>
            {countOfTodos = filterTodos.length} items left
          </div>
          <FooterButtons>
            <ButtonInFooter active={param === 'All'} onClick={() => setParam('All')}>All</ButtonInFooter>
            <ButtonInFooter active={param === 'Active'} onClick={() => { setParam('Active'); }}>Active</ButtonInFooter>
            <ButtonInFooter active={param === 'Completed'} onClick={() => setParam('Completed')}>Completed</ButtonInFooter>
          </FooterButtons>
          <div>
            <ButtonClearCompleted onClick={() => clearAll()}>Clear completed</ButtonClearCompleted>
          </div>
        </FooterBody>
      </Container>
    </Body>
  );
}


const Body = styled.body`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  background-color: #f5f5f5;
  font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height:100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: 5px 3px 5px 1px rgba(0, 0, 0, 0.25);
  max-width: 550px;
  width: 100%;
  @media screen and (max-width: 390px){
    max-width: 260px;
  }
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #b83f45;
  margin-top: 40px;
  font-size: 120px;
  width: 100%;
  @media screen and (max-width: 390px){
    font-size: 80px;
  }
`

const InputField = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  input{
    width: 550px;
    height: 50px;
    padding-left: 7px;
  } 
  @media screen and (max-width: 390px){
    max-width: 260px;
  }
`
const TodoBody = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const XButton = styled.button`
  opacity: 0;
  background-color: white;
  padding: 3px;
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
  padding: 5px;
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