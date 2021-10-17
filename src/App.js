import styled from 'styled-components'
import Header from './components/Header'

function App() {
  return (
    <Container>
      <Header title="Task Tracker"/>
    </Container>
  );
}

export default App

const Container = styled.div`
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
`