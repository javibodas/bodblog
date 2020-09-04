import React, { useState, useEffect } from 'react'
import { Link } from 'wouter'
import Error from 'components/ErrorData'
import Loading from 'components/LoadingData'
import getPosts from 'services/posts/getPosts';
import getPostsByLabel from 'services/posts/getPostsByLabel'


export default function PostsList (props){

	const [error, setError ] = useState(null);
	const [isLoadedList, setIsLoadedList ] = useState(false);
	const [articles, setArticles ] = useState([]);

	const createList = function() {
		const list = [];
		articles.map((article) => {list.push(<PostEntry title={article.title} publication_date={article.publication_time} description={article.description} id={article.shortTitle} key={article.id}/>)})
		return list;
	}

	useEffect(function(){
		props.label ?
			getPostsByLabel(props.label)
			.then((result) => { setArticles(result); setIsLoadedList(true); })
		  	.catch((error) => { setError(error); setIsLoadedList(true); })
		:
			getPosts()
		  	.then((result) => { setArticles(result); setIsLoadedList(true); })
		  	.catch((error) => { setError(error); setIsLoadedList(true); })

	}, []);

	if (error) {
		return <Error />;
  	} else if (!isLoadedList) {
		return <Loading />;
  	} else if(isLoadedList) {
	  return(createList());
  	}
}

function PostEntry(props){
	return(<>
				<div className="item mb-5">
					<div className="media">
						<Link href={'/post/' + props.id}>
							<div className="post-list">
									<h3 className="post-list-title mb-1">{props.title}</h3>
									<div className="post-list-date mb-1"><span className="date">Publicado {props.publication_date}</span></div>
									<div className="post-list-description">{props.description}</div>
							</div>
						</Link>
					</div>
				</div>
				<style jsx>{`
					.post-list{
						padding: 0.75rem;
					}
					.post-list:hover, .post-list:active{
						background-color: #F5F5F5;
						border-radius: 10px;
					}
					.post-list:hover a{
						text-decoration: none;
					}
					.post-list:hover .post-list-title{
						color: var(--links-color);
					}

					.post-list-title{
						color: var(--title-color);
					}

					.post-list-description{
						color: black;
					}

					@media screen and (max-width: 992px) {
						.post-list-title{
							font-size: 18px;
						}
	
						.post-list-description{
							font-size: 13px;
						}
					}

					.post-list-date{
						color:#8f8f8f;
						font-size:0.8125rem
					}
				`}</style>
			</>);
}