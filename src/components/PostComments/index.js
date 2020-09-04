import React, { useState, useEffect } from 'react';
import Comment from 'components/PostComment'
import getPostComments from 'services/comments/getPostComments';
import addPostComment from 'services/comments/addPostComment';
import useComments from 'hooks/useComments';

export default function PostComments(props){

    const [ comment, setComment ] = useState({})
    const { comments } = useComments({'postid': props.postid, 'comment': comment})

    const clickSendComment = function(e){
        e.preventDefault()
        const user = document.querySelectorAll('#form-username-comment')[0].value
        const text = document.querySelectorAll('#form-text-comment')[0].value
        let valid = true

        if(!user || user.trim() == ''){  
            document.querySelectorAll('#form-username-comment')[0].classList.add('is-invalid')
            valid = false
        }else{
            document.querySelectorAll('#form-username-comment')[0].classList.remove('is-invalid')
        }
        if(!text || text.trim() == ''){
            document.querySelectorAll('#form-text-comment')[0].classList.add('is-invalid')
            valid = false
        }else{
            document.querySelectorAll('#form-text-comment')[0].classList.remove('is-invalid')
        }
        if(!valid) return

        document.querySelectorAll('#form-username-comment')[0].value = ''
        document.querySelectorAll('#form-text-comment')[0].value = ''
        
        addPostComment(props.postid, { 'username' : user, 'comment' : text })
        .then((result) => { 
            setComment(result);
        })
        .catch((error) => console.log('Error while adding comment to post ' + props.postid + ' - ' + error))
    }
   
    return(
        <>    
            <section className='comments'>
                <form className='form-add-comment'>
                    <input className='form-control' type='text' placeholder='Nombre' id='form-username-comment'></input>
                    <textarea className='form-control' type='text' placeholder='Comentario...' id='form-text-comment'></textarea>
                    <button className='btn btn-primary' onClick={clickSendComment}>Enviar</button>
                </form>
                <div className='list-comments'>    
                    { comments.map((comment) => <Comment name={comment.username} date={comment.publicationDate} text={comment.comment}/>) }
                </div>
            </section>
            <style jsx>{`
                
                .comments{
                    padding: 1rem 0 1rem 0;
                }
                
                .list-comments{
                    padding-top: 1rem;
                }
                
                .form-add-comment{
                    display: flex;
                    flex-direction: column;
                }
                
                .form-add-comment > *{
                    margin: 5px 0 5px 0;
                }
                
                .form-add-comment > button{
                   width: 100px;
                   background-color: var(--main-color)
                }

                .form-add-comment > button:hover{
                    width: 100px;
                    background-color: var(--main-dark-color)
                 }
                
                @media screen and (min-width: 480px) {
                    .form-add-comment textarea{
                        height: 100px;
                    }
                }
            
            `}</style>
        </>);

}