import React from 'react'
import { Router, Route } from 'wouter'
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import PostsList from 'components/PostsList'
import Post from 'components/Post'


export default function MobileVersion(props){

	return(<Router>
				<Route path="/">
					<>
						<Helmet>
							<title> Home | BoDDev </title>
						</Helmet>
						<Header />
						<div className="mobile">
							<div className="sections-wrapper">
								<section className="blog-list px-1 py-5">
									<div className="container article-mobile-list">
										<PostsList />
									</div>
								</section>
							</div>
						</div>
						<style jsx>{`
							.article-list a, .article-mobile-list a{
								cursor: pointer;
								text-decoration: none;
								color: var(--main-dark-color);
							  }
							  
							  .article-list a:hover, .article-mobile-list a:hover{
								color: var(--links-color);
								text-decoration: underline;
							  }
						`}</style>
					</>
				</Route>
				<Route path="/post/:id">
					{params => 
						<>
							<Helmet>
								<title> {params.id} | BoDDev </title>
							</Helmet>
							<Header />
							<div className="row desktop">
								<div className="col-lg-9 col-12"> <Post id={params.id}/> </div>
							</div>
						</>
					}
				</Route>
			</Router>);
}