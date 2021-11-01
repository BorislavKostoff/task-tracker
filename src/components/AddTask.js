import { useState } from "react"
import styled from "styled-components"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add task!')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormControl>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </FormControl>
            <FormControl>
                <label>Date & Time</label>
                <input
                    type='text'
                    placeholder='Add Date & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </FormControl>
            <FormControlCheck>
                <label>Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </FormControlCheck>
            <ButtonSave type='submit' value='Save Task' />
        </Form>
    )
}

export default AddTask

const Form = styled.form`

`

const FormControl = styled.div`
    margin: 20px 0;
    label {
        display: block;
    }
    input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }

`

const FormControlCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
        flex: 1;
    }
    input {
        flex: 2;
        height: 20px;
    }

`

const ButtonSave = styled.input`
    display: inline-block;
    width: 100%;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
`