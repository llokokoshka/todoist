import styled from 'styled-components';
import { useState } from 'react';
import ToDoLine from './components/ToDoLine';
import FooterLine from './components/FooterLine';



export default function App() {
  const [todos, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [param, setParam] = useState('All');

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
      case 'Active':
        return !todo.isCompleted;
      case 'Completed':
        return todo.isCompleted;
      default:
        return todo;
    }
  });


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
          {filterTodos.map((todo, index) => {
           return(
            <ToDoLine
              index={index}
              todo={todo}
              correctCompleting={correctCompleting}
              clear={clear}
            />
           ) 
          })}
        </TodoBody>
          <FooterLine 
            filterTodos={filterTodos}
            param={param}
            setParam={setParam}
            clearAll={clearAll}
          />
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