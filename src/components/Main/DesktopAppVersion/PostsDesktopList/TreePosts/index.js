import React, { useState, useEffect } from 'react'
import { Link } from 'wouter'
import Error from 'components/ErrorData'
import Loading from 'components/LoadingData'
import useTreePosts from 'hooks/useTreePosts';

export default function TreeArticles(props){

  const { error, loading, posts } = useTreePosts();

  const createList = function() {
    const list = [];
    
    posts.map((year) => {
      const months_html = [];
      
      year.months.map((month) => {
        const articles_html = [];
        
        month.articles.map((article) => { articles_html.push(<Article id={article.id} link={article.link} title={article.title} handleClick={props.handleClickPost}/>) })
        
        months_html.push(<Month month={month.month} artics={articles_html} active={month.active}/>);
      
      })
      list.push(<Year year={year.year} months={months_html} active={year.active}/>);
    })

    return list;
  }

  if (error) {
    return <Error />;
  } else if (!loading) {
    return <Loading />;
  }else{
    return (<ul className="article-list">{createList()}</ul>);
  }
}

function Article(props){
    return (<li onClick={() => props.handleClick(props.id)}><Link className="article-link" to={'/post/' + props.id}> {props.title} </Link></li>);
}

function Month(props){
  return(<li><SpanClickable open={props.active} text={props.month} elements={props.artics}/></li>); 
}

function Year(props){
  return(<li><SpanClickable open={props.active} text={props.year} elements={props.months}/></li>);
}

function SpanClickable(props){

  const [ isOpen, setIsOpen ] = useState(0);
  const [ spanClass, setSpanClass ] = useState('');
  const [ ulClass , setUlClass ] = useState('');

  const handleClick = function(){
    if(isOpen){
      setIsOpen(0);
      setSpanClass('caret year-articles');
      setUlClass('nested'); 
    }else{
      setIsOpen(1)
      setSpanClass('caret year-articles caret-down');
      setUlClass('nested active');
    }
  }

  useEffect(function(){
    if(props.open){ 
      setIsOpen(1)
      setSpanClass('caret year-articles caret-down');
      setUlClass('nested active');
    }else{
      setIsOpen(0);
      setSpanClass('caret year-articles');
      setUlClass('nested');
    }
  }, []);

  return (<React.Fragment><span className={spanClass} onClick={handleClick}>{props.text}</span><ul className={ulClass}>{props.elements}</ul></React.Fragment>);
}