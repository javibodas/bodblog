import React, { useState, useEffect } from 'react'
import { Link } from 'wouter'
import Error from '../ErrorData'
import Loading from '../LoadingData'

export default function TreeArticles(props){

  const [ error, setError ] = useState(null);
  const [ isLoadedTree , setIsLoadedTree ] = useState(false);
  const [ articles , setArticles ] = useState([]);

  const createList = function() {
    let list = []; 

    for(var y of articles){
        let months_html = [];
        let months_articles = y.months;        

        for(var m of months_articles){
            let articles_html = [];
            let articles_title = m.articles;
            
            for(var a of articles_title){
              articles_html.push(<Article id={a.id} link={a.link} title={a.title} handleClick={props.handleClickPost}/>);
            }

          months_html.push(<Month month={m.month} artics={articles_html} active={m.active}/>);
        }

      list.push(<Year year={y.year} months={months_html} active={y.active}/>);
    }
    return list;
  }

  useEffect(function(){
    
    fetch('https://api-bodblog.herokuapp.com/articles/tree')
    	.then(res => res.json())
	    .then(function(result){
          setArticles(result);
          setIsLoadedTree(true);
        })
      .catch(function(error){
        setError(error);
        setIsLoadedTree(false);
    });
      
  }, []);

  if (error) {
    return <Error />;
  } else if (!isLoadedTree) {
    return <Loading />;
  }else{
    return (<ul className="article-list">{createList()}</ul>);
  }
}

function Article(props){
    return (<li onClick={() => props.handleClick(props.id)}><Link to={'/post/' + props.id}> {props.title} </Link></li>);
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