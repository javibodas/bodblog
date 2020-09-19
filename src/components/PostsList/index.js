import React, { useState, useEffect } from 'react'
import Error from 'components/ErrorData'
import PostEntry from 'components/PostsListEntry';
import Loading from 'components/LoadingData'
import getPosts from 'services/posts/getPosts';
import getPostsByLabel from 'services/posts/getPostsByLabel'


export default function PostsList (props){

	const [error, setError ] = useState(null);
	const [isLoadedList, setIsLoadedList ] = useState(false);
	const [articles, setArticles ] = useState([]);

	const createList = function() {
		const list = [];
		articles.map((article, i) => {list.push(<PostEntry id={i} className="post-list-entry" title={article.title} publication_date={article.publicationTime} description={article.description} id={article.shortTitle} key={article.id}/>)})
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
  	} else {
		return(
	  		<>
				{!isLoadedList ? 
					<Loading /> 
				: 
					articles.map((article, i) => { 
						return <PostEntry id={i} className="post-list-entry" title={article.title} publication_date={article.publicationTime} description={article.description} id={article.shortTitle} key={article.id}/> 
					})
				}
	  		</>);
  	}
}