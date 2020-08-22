import React from 'react';
import styled from 'styled-components'

const LabelStyled = styled.a`
    cursor: pointer;

    :hover{
        color: blue;
    }
`

export default function Label(props){
    return (<LabelStyled onClick={() => props.handleClick(props.label)}>#{props.label}</LabelStyled>)
}