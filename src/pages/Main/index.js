import React, { useState, useEffect, useContext } from 'react'
import DeviceContext from 'context/deviceContext';
import Header from 'components/Header'
import Footer from 'components/Footer'
import DesktopVersion from 'pages/DesktopAppVersion'
import MobileVersion from 'pages/MobileAppVersion'

export default function Main(props){

	const deviceContext = useContext(DeviceContext);

	return(<>
				<div className="main-wrapper white-mode">
					{deviceContext.isMobileOrTablet ? <MobileVersion /> : <DesktopVersion />}
					<Footer />
				</div>
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