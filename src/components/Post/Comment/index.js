import React from 'react';

export default function Comment(props){

    return(
    <>
        <section className='comment'>
            <img className='img-username-comment' src={ props.img ? props.img : "/images/default-user-comment-img.png"}></img>
            <span className='username-comment'>{props.name}</span>
            <date className='date-comment'>{props.date}</date>
            <p className='text-comment'>{props.text}</p>
        </section>
        <style jsx>{`
        
           .comment{
            padding: 0.5rem 0 0.5rem 0;
            display: flex;
            flex-direction: column;
            }
            
            .date-comment{
                font-size: 12px;
            }
            
            .username-comment{
                font-size: 20px;
                font-weight: bold;
            }
            
            .img-username-comment{
                width: 40px !important;
                border-radius: 50%;
            }
            
            .text-comment{
                margin-top: 0.5rem;
            }
        
        `}</style>
    </>);

}