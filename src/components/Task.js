import styled from "styled-components"

const Task = ({ task }) => {
    return (
        <MainTask>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </MainTask>
    )
}

export default Task

const MainTask = styled.div `
    background: f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
`