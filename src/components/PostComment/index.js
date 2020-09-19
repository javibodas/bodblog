import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Comment(props){

    return(
    <>
        <section className='comment'>
            <div className='comment-header'>
                <div className='comment-info'>
                    <img className='img-username-comment' src={ props.img ? props.img : "/images/default-user-comment-img.png"}></img>
                    <span className='username-comment'>{props.name}</span>
                    <date className='date-comment'>{props.date}</date>
                </div>
                <span className='delete-icon'><FontAwesomeIcon icon={faTrashAlt} onClick={() => props.removeCommentAction(props.id)}/></span>
            </div>
            <p className='text-comment'>{props.text}</p>
        </section>
        <style jsx>{`
        
           .comment{
                padding: 1rem 1rem 1rem 1rem;
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                background-color: #faf8f7;
            }

            .comment-header{
                display: flex;
                flex-direction: row;
            }
            .comment-info{
                display: flex;
                flex-direction: column;
                width: 95%;
            }
            
            .date-comment{
                color:#8f8f8f;
			    font-size:0.725rem
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

            .delete-icon > svg{
                opacity: 0.5;
            }
            .delete-icon > svg:hover{
                cursor: pointer;
                color: red;
                opacity: 1;
            }
        
        `}</style>
    </>);

}