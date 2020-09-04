import React, { useState, useEffect } from 'react'
import hljs from 'highlight.js';
import Label from 'components/Label';
import PostComments from 'components/PostComments';
import Error from 'components/ErrorData';
import Loading from 'components/LoadingData';
import getPost from 'services/posts/getPost';
import getHomeDefaultPost from 'services/posts/getHomeDefaultPost';

export default function Post(props){

	const [error, setError ] = useState(null);
	const [isLoadedPost, setIsLoadedPost ] = useState(false);
	const [post, setPost ] = useState({});

	useEffect(function (){
		if(props.id == ''){
			getHomeDefaultPost()
			.then((result) => { console.log(result); setPost(result); setIsLoadedPost(true);})
			.catch((error) => { setError(error); setIsLoadedPost(false);})
		}else{
			getPost(props.id)
			.then((result) => { setPost(result); setIsLoadedPost(true);})
			.catch((error) => { setError(error); setIsLoadedPost(false);})
		}
	}, [props.id]);

	useEffect(function (){
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}, [post])

	if(error){
		return <Error />;
	}else if(!isLoadedPost){
		return (<article className="blog-post px-3 py-5 p-md-5">
					<div className="container"><Loading /></div>
				</article>);
	}else{
		return(
			<>
				<article className="blog-post px-3 py-5 p-md-5">
					<div className="container">
						<header className="blog-post-header">
						    	<h2 className="title mb-2">{post.title}</h2>
						    	<div className="meta mb-3"><span className="date">Publicado {post.publication_time}</span></div>
								<div className="post-labels mb-3">
									{post.labels.map((label) => <Label label={label} key={label}/>)}
								</div>
					    </header>
				   		<section className="blog-post-body" dangerouslySetInnerHTML={{__html: post.content}}></section>
						<hr className='post-comment-separator'></hr>
						<section>
							<PostComments postid={post.id}/>
						</section>
				   	</div>
				</article>
				<style jsx>{`
					.blog-post-body{
						text-align: justify;
					}
					.post-comment-separator{
						border-top: 3px solid var(--main-dark-color);
						width: 75%;
						margin-top: 3rem;
						padding-bottom: 1rem;
						opacity: 0.65;
					}

					@media screen and (max-width: 992px) {
						.post-comment-separator{
							border-top: 1px solid var(--main-dark-color);
							opacity: 0.3;
						}
					}

					.blog-post-body a{
						color: var(--links-color)!important;
					}

					.meta{
						color:#8f8f8f;
						font-size:0.8125rem
					}

					.post-labels > a:hover{
						color: var(--links-hover-color)
					}
					
				
				`}</style>
			</>);
	}	
}