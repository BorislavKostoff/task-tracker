import { useState } from "react"
import styled from 'styled-components'
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Task number 1',
        day: 'date of the task',
        reminder: true
    },
    {
        id: 2,
        text: 'Task number 2',
        day: 'date of the task',
        reminder: true
    },
    {
        id: 3,
        text: 'Task number 3',
        day: 'date of the task',
        reminder: false
    }
])

  return (
    <Container>
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks}/>
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