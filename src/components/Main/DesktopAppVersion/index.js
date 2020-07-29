import React, { useState } from 'react'
import Post from 'components/Post'
import ArticlesDesktopList from './PostsDesktopList'
import Labels from './Labels';
import PostsList from 'components/PostsList'

export default function DesktopVersion(props){

	const [ defaultPostId, setDefaultPostId ] = useState(-1);
	const [ isLabelList, setLabelList ] = useState(false);
	const [ label, setLabel ] = useState('');

	const handleClickTreePost = function(id){
		setLabelList(false)
		setDefaultPostId(id)
	}

	const handleClickLabel = function(label){
		setLabelList(true)
		setLabel(label)
	}

	return(<div className="row desktop">
					<div className="col-lg-9 col-12">
						{	isLabelList ?
								<PostsList label={label} />
							:
								<Post id={defaultPostId}/>
						}
					</div>
					<div className="col-lg-3 col-12 right-bar">
						<ArticlesDesktopList handleClickPost={handleClickTreePost}/>
						<Labels handleClick={handleClickLabel}/>
					</div>
			</div>);
}