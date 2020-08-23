import React, { useState } from 'react'
import { Router, Route } from 'wouter'
import Post from 'components/Post'
import ArticlesDesktopList from './PostsDesktopList'
import PostsList from 'components/PostsList'

export default function DesktopVersion(props){

	return(<Router>
				<Route path='/'>
					<div className="row desktop">
						<div className="col-lg-9 col-12">
							<Post id={''}/>
						</div>
						<div className="col-lg-3 col-12 right-bar">
							<ArticlesDesktopList />
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
							</div>
						</div>
					}
				</Route>
			</Router>);
}