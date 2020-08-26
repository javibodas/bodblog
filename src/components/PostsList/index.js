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
	return(<div className="item mb-5"><div className="media"><div className="media-body"><h3 className="title mb-1"><Link href={'/post/' + props.id}>{props.title}</Link></h3><div className="meta mb-1"><span className="date">Publicado {props.publication_date}</span></div><div className="intro">{props.description}</div><Link href={'/post/' + props.id}> Leer más &rarr;</Link></div></div></div>);
}