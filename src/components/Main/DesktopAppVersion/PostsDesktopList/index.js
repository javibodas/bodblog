import React from 'react'
import TreeArticles from './TreePosts'

export default function ArticlesDesktopList(props){
    return (<div className="px-3 p-md-5">
              <div className="section-inner">
                  <div className="heading py-2"><h4>Articulos</h4></div>
                  <TreeArticles />
                </div>
            </div>);
}

