import { useState, useEffect } from 'react';
import getPostComments from 'services/comments/getPostComments'

export default function useComments({postid, comment}){

    const [ comments , setComments ] = useState([]);

    useEffect(function(){
        getPostComments(postid)
	    .then((result) => { setComments(result) })
        .catch((error) => { console.log('Error while load comments of post' + postid + ' - ' + error)});
    }, [postid, comment]);
  
  
    return { comments }
  
  }