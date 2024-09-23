import styled from 'styled-components';
import { useState } from 'react';

let numberOfItems = 2;

export default function App() {
 const [todo, setTodo] = useState('');

  function takeTodo(e){
    setTodo( 
      e.target.value,);
  }

  return (
    <Body>
      <Container>
        <Title>
          todos
        </Title>
        <InputField>
          <input type='text' value={todo} onChange={takeTodo} placeholder='What needs to be done?'></input>
        </InputField>
        <TodoBody>

          <input type="checkbox"></input>
          <div>{todo}</div>
          <button>X</button>
      </TodoBody>
        <FooterBody>
          <div>
            {numberOfItems} items left
          </div>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <div>
            <button>Clear completed</button>
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
const TodoBody = styled.div`
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