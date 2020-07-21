import { useState, useEffect } from 'react';
import getTreePostList from '../services/posts/getTreePostList';

export default function useTreePosts(){

  const [ error, setError ] = useState(null);
  const [ loading , setIsLoadedTree ] = useState(false);
  const [ posts , setPosts ] = useState([]);


  useEffect(function(){
    getTreePostList()
	    .then((result) => { setPosts(result); setIsLoadedTree(true);})
      .catch((error) => { setError(error); setIsLoadedTree(false);});
  }, []);


  return {error, loading, posts}

}