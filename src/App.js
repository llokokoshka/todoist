import styled from 'styled-components';
import { useState } from 'react';
import ToDoLine from './components/ToDoLine';
import FooterLine from './components/FooterLine';

export default function App() {
  const [todos, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [filter, setFilter] = useState('All');

  function takeTodo(e) {
    if (e.key === 'Enter' && todoValue) {
      setTodo([...todos, {
        value: todoValue,
        isCompleted: false
      }]);
      setTodoValue('');
    }
  };

  function updateToDo(index, newValueOfTodo){
    const newTodos =[...todos];
    newTodos[index].value = newValueOfTodo;
    setTodo(newTodos);
  }

  function changeToDoCompleted(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodo(newTodos)
  }

  function deleteToDo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  }

  function clearAllCompletedToDos() {
    const newArrOfToDos = todos.filter((todo)=>{
      return !todo.isCompleted;
    })
    setTodo(newArrOfToDos);
  }

  const filterTodos = todos.filter((todo) => {
    switch (filter) {
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

  function checkedAllToDos(){
    const areAllCompleted = todos.every(todo =>todo.isCompleted);
    const newArrTodos = todos.map(todo =>({
      ...todo,
      isCompleted: !areAllCompleted,
    }))
    setTodo(newArrTodos);
  }

  return (
    <PageWrapper>
      <h1 className='title' >
        todos
      </h1>
      <div className='container'>
        <div className='todo-input'>
          <div className='todo-input__arrow' onClick={checkedAllToDos}>✔</div>
          <input className='todo-input__field' type='text' value={todoValue}
            onChange={(e) => { setTodoValue(e.target.value) }}
            onKeyDown={takeTodo}
            placeholder='What needs to be done?'></input>
        </div>
        <ul className='todo-main-body'>
          {filterTodos.map((todo, index) => {
            return (
              <ToDoLine
                index={index}
                todo={todo}
                changeToDoCompleted={changeToDoCompleted}
                updateToDo={updateToDo}
                deleteToDo={deleteToDo}
              />
            )
          })}
        </ul>
        <FooterLine
          todos={todos}
          filterTodos={filterTodos}
          filter={filter}
          setFilter={setFilter}
          clearAllCompletedToDos={clearAllCompletedToDos}
        />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.body`
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

  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    box-shadow: 5px 3px 5px 1px rgba(0, 0, 0, 0.25);
    max-width: 550px;
    /* padding: 0 10px 5px; */
    width: 100%;
    @media screen and (max-width: 390px){
      max-width: 260px;
    }
  }

  .title{
    display: flex;
    justify-content: center;
    color: #b83f45;
    margin-top: 40px;
    font-size: 120px;
    width: 100%;
    @media screen and (max-width: 390px){
      font-size: 80px;
    }
  }
  
  .todo-input{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 390px){
      max-width: 260px;
    }
  }

  .todo-input__arrow{
    transform: scale(2);
    margin: 0 15px;
    &:hover{
      cursor: pointer; 
    }
  }

  .todo-input__field{
    width: 550px;
    height: 50px;
    padding-left: 7px;
  }

  .todo-main-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 6px 0; */
    /* gap: 5px; */
    width: 100%; 
  }
`