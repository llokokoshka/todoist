import styled from 'styled-components';
import ContainerOfToDos from './components/ContainerOfToDos'

export default function App() {

  return (
    <PageWrapper>
      <h1 className='title' >
        todos
      </h1>
      <ContainerOfToDos />
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
`