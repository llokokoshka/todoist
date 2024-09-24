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
    while (b != a) {
      if (newTodos[b].isCompleted == true) {
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
            <li>
              <input type='checkbox' checked={todo.isCompleted} onChange={() => correctCompleting(i)}></input>
              <div>{todo.value}</div>
              <button onClick={() => clear(i)}>X</button>
            </li>
          )
        })
        }
      </>
    )
  }
  return (
    <Body>
      <Container>
        <Title>
          todos
        </Title>
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
          <div>
            <button onClick={() => setParam('All')}>All</button>
            <button onClick={() => setParam('Active')}>Active</button>
            <button onClick={() => setParam('Completed')}>Completed</button>
          </div>
          <div>
            <button onClick={() => clearAll()}>Clear completed</button>
          </div>
        </FooterBody>
      </Container>
    </Body>
  );
}

const Body = styled.body`
  * {
    margin: 0 auto;
    padding: 0;
    border: 0;
  }

  background-color: #f5f5f5;
	font-family: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	color: #111111;
	font-weight: 300;
`

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0;
  justify-content: space-between;
  flex-direction: column;
  max-width: 550px;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #b83f45;
`

const InputField = styled.div`
  display: flex;
  justify-content: center;
  input{
    width: 100%;
  } 
`
const TodoBody = styled.ul`
    display: flex;
    margin: 0 auto;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`