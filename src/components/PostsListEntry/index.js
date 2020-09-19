import React from 'react';
import { Link } from 'wouter'

export default function PostEntry(props){
	return(<>
				<div className="item mb-5">
					<div className="media">
						<Link href={'/post/' + props.id}>
							<div className="post-entry">
									<h3 className="post-entry-title mb-1">{props.title}</h3>
									<div className="post-entry-date mb-1"><span className="date">Publicado {props.publication_date}</span></div>
									<div className="post-entry-description">{props.description}</div>
							</div>
						</Link>
					</div>
				</div>
				<style jsx>{`
					.post-entry{
						padding: 0.75rem;
					}
					.post-entry:hover, .post-entry:active{
						background-color: #F5F5F5;
						border-radius: 10px;
						cursor: pointer;
					}
					.post-entry:hover a{
						text-decoration: none;
					}
					.post-entry:hover .post-entry-title{
						color: var(--links-color);
					}

					.post-entry-title{
						color: var(--title-color);
					}

					.post-entry-description{
						color: black;
					}

					@media screen and (max-width: 992px) {
						.post-entry-title{
							font-size: 18px;
						}
	
						.post-entry-description{
							font-size: 13px;
						}
					}

					.post-entry-date{
						color:#8f8f8f;
						font-size:0.8125rem
					}
				`}</style>
			</>);
}