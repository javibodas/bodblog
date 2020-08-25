import React, { useState } from 'react'
import { Router, Route } from 'wouter'
import TreePosts from 'components/TreePosts'
import Labels from 'components/Labels';
import PostsList from 'components/PostsList'
import Post from 'components/Post'

export default function DesktopVersion(props){

	return(<Router>
				<Route path='/'>
					<div className="row desktop">
						<div className="col-lg-9 col-12">
							<Post id={''}/>
						</div>
						<div className="col-lg-3 col-12 right-bar">
							<TreePosts />
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
								<TreePosts />
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
											<h3>#{params.id}</h3>
											<section className="blog-list px-3 py-5 p-md-4">
												<div className="container article-mobile-list">
													<PostsList label={params.id} />
												</div>
											</section>
										</div>
							</div>
							<div className="col-lg-3 col-12 right-bar">
								<TreePosts />
								<Labels />
							</div>
						</div>
					}
				</Route>
			</Router>);
}