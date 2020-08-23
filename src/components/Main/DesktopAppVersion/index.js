import React, { useState } from 'react'
import { Router, Route } from 'wouter'
import Post from 'components/Post'
import ArticlesDesktopList from './PostsDesktopList'
import Labels from './Labels';
import PostsList from 'components/PostsList'

export default function DesktopVersion(props){

	const [ isLabelList, setIsLabelList ] = useState(false);
	const [ label, setLabel ] = useState('');

	const handleClickTreePost = function(id){
		setIsLabelList(false)
		//setDefaultPostId(id)
	}

	const handleClickLabel = function(label){
		setIsLabelList(true)
		setLabel(label)
	}

	return(<Router>
				<Route path='/'>
					<div className="row desktop">
						<div className="col-lg-9 col-12">
							<Post id={''}/>
						</div>
						<div className="col-lg-3 col-12 right-bar">
							<ArticlesDesktopList />
							<Labels />
						</div>
					</div>
				</Route>
				<Route path='/post/:id'>
					{params => 
						<div className="row desktop">
							<div className="col-lg-9 col-12">
								<Post id={params.id}/>
							</div>
							<div className="col-lg-3 col-12 right-bar">
								<ArticlesDesktopList />
								<Labels />
							</div>
						</div>
					}
				</Route>
				<Route path='/label/:id'>
					{params => 
						<div className="row desktop">
							<div className="col-lg-9 col-12">
										<div className="sections-wrapper">
											<h3>#{label}</h3>
											<section className="blog-list px-3 py-5 p-md-4">
												<div className="container article-mobile-list">
													<PostsList label={params.id} />
												</div>
											</section>
										</div>
							</div>
							<div className="col-lg-3 col-12 right-bar">
								<ArticlesDesktopList />
								<Labels />
							</div>
						</div>
					}
				</Route>
			</Router>);
}