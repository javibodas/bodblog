import React, { useState, useEffect } from 'react'
import hljs from 'highlight.js';
import Comment from './PostComments';
import Error from '../ErrorData';
import Loading from '../LoadingData';
import getPost from '../../services/posts/getPost';
import getHomeDefaultPost from '../../services/posts/getHomeDefaultPost';

export default function Post(props){

	const [error, setError ] = useState(null);
	const [isLoadedPost, setIsLoadedPost ] = useState(false);
	const [post, setPost ] = useState({});

	useEffect(function (){
		props.id == -1 ?
			getHomeDefaultPost()
			.then((result) => { setIsLoadedPost(true); setPost(result);})
			.catch((error) => { setIsLoadedPost(false); setError(error);})
		:
			getPost(props.id)
			.then((result) => { setIsLoadedPost(true); setPost(result);})
			.catch((error) => { setIsLoadedPost(false); setError(error);})
	
	}, [props.id]);

	useEffect(function (){
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}, [post])

	if(error){
		return <Error />;
	}else if(!isLoadedPost){
		return <Loading />;
	}else{
		return(<article className="blog-post px-3 py-5 p-md-5">
						<div className="container">
							 <header className="blog-post-header">
						    	<h2 className="title mb-2">{post.title}</h2>
						    	<div className="meta mb-3"><span className="date">Publicado {post.publication_time}</span></div>
					    	 </header>
				   			 <div className="blog-post-body" dangerouslySetInnerHTML={{__html: post.content}}>
				   			 </div>
				   		</div>
					   </article>);
	}	
}