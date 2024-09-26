import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ToDoLine from './components/ToDoLine';
import FooterLine from './components/FooterLine';
import ToDoForm from './components/ToDoForm';
import { getFilteredToDos } from './store/filterToDos';

export default function App() {
  const filteredToDos = useSelector(getFilteredToDos);

  return (
    <PageWrapper>
      <h1 className='title' >
        todos
      </h1>
      <div className='container'>
        <ToDoForm />
        <ul className='todo-main-body'>
          {filteredToDos.map((todo, index) => {
            return (
              <ToDoLine
                key={index}
                index={index}
                todo={todo}
              />
            )
          })}
        </ul>
        <FooterLine />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
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

  .todo-main-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; 
  }
`