import React, { useContext } from 'react';
import DeviceContext from 'context/deviceContext';
import ColorModeChanger from 'components/ColorModeChanger';
import ProfileLogo from 'components/ProfileLogo';
import SocialList from 'components/SocialList';


export default function Header(){
	const deviceContext = useContext(DeviceContext);

	return (<>
			<header className="header text-center">
				<div className="navigation" >
					<React.Fragment>
					<div className="profile-section pt-lg-0">
						<React.Fragment>
							<ProfileLogo/>
							<SocialList/>
							{/*<ColorModeChanger />*/}
						</React.Fragment>
					</div>
						{deviceContext.isMobileOrTablet ? <hr className='post-header-separator'></hr> : null }
					</React.Fragment>
				</div>
			</header>
			<style jsx>{`
				.header{
					padding-top: 2rem;
					position: fixed;
				}

				.post-header-separator{
					border-top: 1px solid var(--main-dark-color);
					width: 55%;
					opacity: 0.3;
				}

				@media screen and (max-width: 992px) {
					.header{
						position: relative;
						height: 110px;
						padding-top: 1rem;
					}

					.profile-section{
						width: 100%;
						display: flex;
						flex-direction: row;
					}
				}
			`}</style>
			</>)
}

function BlogDescription(){
	return (<>
			<div className="bio mb-3">Hola mi nombre es Javier, soy Desarrollador de Software y te doy la bienvenida a mi blog personal.</div>
			<style jsx>{`
				.bio{
					color: black;
				}
			`}</style>
			</>)
}