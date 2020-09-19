import React, { useState } from 'react';
import Comment from 'components/PostComment'
import addPostComment from 'services/comments/addPostComment';
import deletePostComment from 'services/comments/deletePostComment';
import useComments from 'hooks/useComments';

export default function PostComments(props){

    const [ comment, setComment ] = useState({})
    const { comments } = useComments({'postid': props.postid, 'comment': comment})

    const clickSendComment = function(e){
        e.preventDefault()
        const user = document.querySelectorAll('#form-username-comment')[0].value
        const text = document.querySelectorAll('#form-text-comment')[0].value
        let valid = true

        if(!user || user.trim() === ''){  
            document.querySelectorAll('#form-username-comment')[0].classList.add('is-invalid')
            valid = false
        }else{
            document.querySelectorAll('#form-username-comment')[0].classList.remove('is-invalid')
        }
        if(!text || text.trim() === ''){
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

    const removeComment = function(id){
        deletePostComment(id)
        .then((comment) => {
            setComment(comment)
        })
        .catch((error) => { alert('Something wrong occurred when delete comment ' + id)})
    }
   
    return(
        <>    
            <section className='comments'>
                <form className='form-add-comment'>
                    <input className='form-control' type='text' placeholder='Nombre' id='form-username-comment'></input>
                    <textarea className='form-control' type='text' placeholder='Comentario...' id='form-text-comment'></textarea>
                    <button className='btn' onClick={clickSendComment}>Enviar</button>
                </form>
                <div className='list-comments'>    
                    { comments.map((comment) => <Comment id={comment.id} name={comment.username} date={comment.publicationDate} text={comment.comment} removeCommentAction={removeComment}/>) }
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
                   color: white;
                   background-color: var(--main-color);
                }

                .form-add-comment > button:hover{
                    background-color: var(--main-dark-color);
                    color: var(--links-hover-color);
                    border: solid 1px var(--links-hover-color);
                 }

                 .form-add-comment > input:focus, .form-add-comment > textarea:focus{
                    border-color: var(--links-color)!important;
                    box-shadow: 0 0 0 0.05rem var(--links-color)!important;
                 }
                
                @media screen and (min-width: 480px) {
                    .form-add-comment textarea{
                        height: 100px;
                    }
                }
            
            `}</style>
        </>);

}