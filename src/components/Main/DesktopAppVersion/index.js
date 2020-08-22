import React, { useState } from 'react'
import Post from 'components/Post'
import ArticlesDesktopList from './PostsDesktopList'
import Labels from './Labels';
import PostsList from 'components/PostsList'

export default function DesktopVersion(props){

	const [ defaultPostId, setDefaultPostId ] = useState(-1);
	const [ isLabelList, setIsLabelList ] = useState(false);
	const [ label, setLabel ] = useState('');

	const handleClickTreePost = function(id){
		setIsLabelList(false)
		setDefaultPostId(id)
	}

	const handleClickLabel = function(label){
		setIsLabelList(true)
		setLabel(label)
	}

	return(<div className="row desktop">
					<div className="col-lg-9 col-12">
						{	isLabelList ?
								<div className="sections-wrapper">
									<h3>#{label}</h3>
									<section className="blog-list px-3 py-5 p-md-4">
										<div className="container article-mobile-list">
											<PostsList label={label} />
										</div>
									</section>
								</div>
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