import React, { useState, useEffect } from 'react'
import { Router, Route } from 'wouter'
import ArticleMobileList from '../PostsMobileList'
import Post from '../Post'


export default function MobileVersion(props){

	const [ postId , setPostId ] = useState(0)

	useEffect(function(){

	});

	return(<Router>
				<Route path="/">
					<div className="mobile">
						<div className="sections-wrapper">
							<section className="blog-list px-3 py-5 p-md-4">
								<div className="container article-mobile-list">
									<ArticleMobileList />
								</div>
							</section>
						</div>
					</div>
				</Route>
				<Route path="/post/:id">
					{params => <div className="row desktop">
						<div className="col-lg-9 col-12"> <Post id={params.id}/> </div>
					</div>
					}
				</Route>
			</Router>);
}