import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Header({ title, onOpen, showOpen }) {
    return (
        <HeadHeader>
            <h1>{title}</h1>
                <Button
                    color={showOpen ? 'red' : 'green'}
                    text={showOpen ? 'Close' : 'Open'}
                    onClick={onOpen}
                />
        </HeadHeader>
    )
}

export default Header

const HeadHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`