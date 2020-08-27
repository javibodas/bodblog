import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Header(){
	return (<header className="header text-center">
				<nav className="navbar navbar-expand-lg navbar-dark" >
					<React.Fragment>
						<ButtonHome/><Navigation/>
					</React.Fragment>
				</nav>
			</header>)
}

function ButtonHome(){
	return (<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>);
}

function Navigation(){
	return(<div id="navigation" className="collapse navbar-collapse flex-column" ><React.Fragment><ProfileSection/></React.Fragment></div>)
}

function ProfileSection(){
	return (<div className="profile-section pt-3 pt-lg-0"><React.Fragment><ProfileImage/><BlogDescription/><SocialList/></React.Fragment></div>)
}

function ProfileImage(){
	return (<img className="profile-image mb-3 rounded-circle mx-auto" src={process.env.PUBLIC_URL + '/images/profile.png'} alt="image" />)
}

function BlogDescription(){
	return (<div className="bio mb-3">Hola mi nombre es Javier, soy Desarrollador de Software y te doy la bienvenida a mi blog personal.</div>)
}

function SocialList(){
	return (<ul className="social-list list-inline py-3 mx-auto">
			            <li className="list-inline-item"><a data-testid="twitter-link" href="https://twitter.com/BodasJavier"><FontAwesomeIcon icon={faTwitter}/></a></li>
			            <li className="list-inline-item"><a data-testid="linkedin-link" href="https://www.linkedin.com/in/javier-gonz%C3%A1lez-bodas-70a59787/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
			            <li className="list-inline-item"><a data-testid="github-link" href="https://github.com/javibodas"><FontAwesomeIcon icon={faGithubAlt}/></a></li>
			            <li className="list-inline-item"><a data-testid="mail-link" href="mailto:gonzalezbodasjavier@yahoo.es"><FontAwesomeIcon icon={faEnvelope}/></a></li>
			        </ul>);
}