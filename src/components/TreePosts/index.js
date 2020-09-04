import React from 'react'
import { Link } from 'wouter'
import Error from 'components/ErrorData'
import Loading from 'components/LoadingData'
import SpanClickable from 'components/SpanClickable';
import useTreePosts from 'hooks/useTreePosts';

export default function TreePosts(props){

  const { error, loading, posts } = useTreePosts();

  const createList = function() {
    const list = [];
    
    posts.map((year) => {
      const months_html = [];
      
      year.months.map((month) => {
        const articles_html = [];
        
        month.articles.map((article) => { articles_html.push(<Article id={article.shortTitle} link={article.link} title={article.title} key={article.id}/>) })
        
        months_html.push(<Month month={month.month} artics={articles_html} active={month.active} key={month.month}/>);
      
      })
      list.push(<Year year={year.year} months={months_html} active={year.active} key={year.year}/>);
    })

    return list;
  }

  if (error) {
    return <Error />;
  } else{
    return (<div className="px-3 p-md-5">
              <div className="section-inner">
                <div className="heading py-2"><h4>Articulos</h4></div>
                {!loading ? <Loading /> : <ul className="article-list">{createList()}</ul>}
              </div>
            </div>);
  }
}

function Article(props){
    return (<><li><Link className="article-link" to={'/post/' + props.id}> {props.title} </Link></li>
            <style jsx>{`
              .article-link{
                font-size: 11px;
                font-family: Courier New;
                color: black;
              }
              .article-link:hover{
                color: var(--links-hover-color);
              }
            `}</style>
          </>);
}

function Month(props){
  return(<li><SpanClickable open={props.active} text={props.month} elements={props.artics} /></li> ); 
}

function Year(props){
  return(<li><SpanClickable open={props.active} text={props.year} elements={props.months} /></li>);
}