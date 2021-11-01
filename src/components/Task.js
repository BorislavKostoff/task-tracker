import { FaTimes } from 'react-icons/fa'
import styled from "styled-components"

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <MainTask task={task} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <DeleteButton onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </MainTask>
    )
}

export default Task

const MainTask = styled.div `
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    border-left: ${props => props.task.reminder ? '5px solid red' : '5px solid green'};
`

const DeleteButton = styled(FaTimes)`
    color: red;
    cursor: pointer;
`