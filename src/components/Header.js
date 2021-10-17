import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Header({ title }) {
    const onClick = () => {
        console.log('clicked')
    }

    return (
        <HeadHeader>
            <h1>{title}</h1>
            <Button
            color='green'
            text='Add'
            onClick={onClick}
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