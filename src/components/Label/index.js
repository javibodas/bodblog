import React from 'react';
import { Link } from 'wouter'

export default function Label(props){
    return (
        <>
        <Link className='label-link' to={'/label/' + props.label}>#{props.label}</Link>
        <style jsx>{`

            .label-link{
                font-family: Courier New;
                font-size: 12px;
                position: relative;
            }
            .label-link:hover{
                color: #414b77;
                cursor: pointer;
            }
        
        `}</style>
        </>
        )
}