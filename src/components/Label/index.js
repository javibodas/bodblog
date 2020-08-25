import React from 'react';
import { Link } from 'wouter'
import styled from 'styled-components'

const LabelStyled = styled.a`
    :hover{
        color: blue;
        cursor: pointer;
    }
`

export default function Label(props){
    return (<LabelStyled><Link to={'/label/' + props.label}>#{props.label}</Link></LabelStyled>)
}