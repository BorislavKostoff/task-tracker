import { useState } from "react"
import styled from 'styled-components'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"

function App() {
  const [showAddForm, setShowAddForm] = useState(false)
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

//Add tasks
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <Container>
      <Header title="Task Tracker" onOpen={() => setShowAddForm(!showAddForm)} showOpen={showAddForm} />
      {showAddForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0
        ? <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        : 'No Tasks to do!'
      }
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