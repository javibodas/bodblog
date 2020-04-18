import React, { useState } from 'react'
import Post from '../Post'
import ArticlesDesktopList from '../PostsDesktopList'

export default function DesktopVersion(props){

	const [ defaultPostId, setDefaultPostId ] = useState(1);

	const handleClickTreePost = function(id){
		setDefaultPostId(id)
	}

	return(<div className="row desktop">
					<div className="col-lg-9 col-12"><Post id={defaultPostId}/></div>
					<div className="col-lg-3 col-12 right-bar"><ArticlesDesktopList handleClickPost={handleClickTreePost}/></div>
			</div>);
}