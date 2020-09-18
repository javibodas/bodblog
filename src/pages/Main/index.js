import React, { useContext } from 'react'
import { Switch, Route } from "wouter";
import DeviceContext from 'context/deviceContext';
import Footer from 'components/Footer'
import DesktopVersion from 'pages/DesktopAppVersion'
import MobileVersion from 'pages/MobileAppVersion'
import RssFeedPage from 'pages/RssFeedPage';
import Error from 'components/ErrorData'

export default function Main(props){

	const deviceContext = useContext(DeviceContext);

	return(<>
				<Switch>
					<Route path="/rss">
						<RssFeedPage></RssFeedPage>
					</Route>
					<Route path='/error'>
							<Error />
					</Route>
					<Route path="/:rest*">
						<div className="main-wrapper white-mode">
							{deviceContext.isMobileOrTablet ? <MobileVersion /> : <DesktopVersion />}
							<Footer />
						</div>
					</Route>
				</Switch>
				<style jsx>{`
					.main-wrapper{
						overflow: hidden;
					}

					.white-mode{
						background-color: white;
					}
					.black-mode{
						background-color: black;
						color: white;
					}
				`}</style>
			</>)
}