import React from 'react'
import { Router, Route } from 'wouter'
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import TreePosts from 'components/TreePosts'
import Labels from 'components/Labels';
import PostsList from 'components/PostsList'
import Post from 'components/Post'

export default function DesktopVersion(props){

	return(<Router>
				<div className="row desktop">
					<div className="col-lg-2 col-12">
						<Header />
					</div>
					<div className="col-lg-7 col-12">
						<Route path='/'>
							<>
								<Helmet>
									<title> Home | BoDDev </title>
									<meta name='description' content='Prueba description' />
								</Helmet>
								<Post id={''}/>
							</>
						</Route>
						<Route path='/post/:id'>
							{params => 
								<>
									<Helmet>
										<title> {params.id} | BoDDev </title>
										<meta name='description' content='Prueba description' />
									</Helmet>
									<Post id={params.id}/>
								</>
							}
						</Route>
						<Route path='/label/:id'>
							{params => 
								<>
									<Helmet>
										<title> Posts de {params.id} | BoDDev </title>
										<meta name='description' content='Prueba description' />
									</Helmet>
									<div className="sections-wrapper">
											<section className='label-title px-3 py-5 p-md-4'><h3>#{params.id}</h3></section>
											<section className="blog-list px-1 py-5 p-md-4">
												<div className="container article-mobile-list">
													<PostsList label={params.id} />
												</div>
											</section>
									</div>
									<style jsx>{`
										.label-title{
											font-family: Courier New;
											color: var(--social-color);
										}
									`}</style>
								</>
							}
						</Route>
					</div>
					<div className="col-lg-3 col-12 right-bar">
						<TreePosts />
						<Labels />
					</div>
				</div>
			</Router>);
}