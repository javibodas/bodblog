import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function SocialList(){
	const SIZE="lg"; 

	return (<>
				<ul className="social-list list-inline mx-auto">
			        <li className="list-inline-item"><a data-testid="twitter-link" href="https://twitter.com/BodasJavier"><FontAwesomeIcon icon={faTwitter} size={SIZE}/></a></li>
			        <li className="list-inline-item"><a data-testid="linkedin-link" href="https://www.linkedin.com/in/javier-gonz%C3%A1lez-bodas-70a59787/"><FontAwesomeIcon icon={faLinkedin} size={SIZE}/></a></li>
			        <li className="list-inline-item"><a data-testid="github-link" href="https://github.com/javibodas"><FontAwesomeIcon icon={faGithubAlt} size={SIZE}/></a></li>
			        <li className="list-inline-item"><a data-testid="mail-link" href="mailto:gonzalezbodasjavier@yahoo.es"><FontAwesomeIcon icon={faEnvelope} size={SIZE}/></a></li>
			    </ul>
				<style jsx>{`
					.social-list{
						font-size: 1.1rem;
						padding: 1rem 0 1rem 0;
					}
					.social-list li a{
						color: var(--social-color)
					}
					.social-list li a:hover{
						color: var(--links-hover-color)
					}
					
					.social-list li{
						display: block;
						padding: 0.5rem 0 0.5rem 0;
						margin-right: .5rem
					}

					@media screen and (max-width: 992px) {
						.social-list li{
							display: inline;
							padding: 0.5rem 0.25rem 0.25rem 0.5rem;
						}

						.social-list{
							margin: auto 0 auto 130px !important;
						}
					}
					@media screen and (max-width: 480px){
					}
				`}</style>
			</>);
}