import React from 'react'
import styled from 'styled-components'

function Button({ text, color, onClick }) {
    return (
        <ButtonWrap color={color} onClick={onClick}>
            {text}
        </ButtonWrap>
    )
}

Button.defaultProps = {
    color: 'black'
}

export default Button

const ButtonWrap = styled.button`
    display: inline-block;
    background: ${props => props.color};
    color: white;
    border: none;
    padding: 10px 20px;
    margin 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
`