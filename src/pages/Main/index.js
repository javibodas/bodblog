import React, { useState, useEffect } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import DesktopVersion from 'pages/DesktopAppVersion'
import MobileVersion from 'pages/MobileAppVersion'

export default function Main(){

	const [ isMobileOrTablet, setIsMobileOrTablet ] = useState((window.innerWidth <= 992))

	useEffect(function(){
		const resizeListener = () => {
      		setIsMobileOrTablet((window.innerWidth <= 992))
    	};

		window.addEventListener('resize', resizeListener);
	}, []);

	if(isMobileOrTablet){
		return(<div className="main-wrapper">
					<Header />
					<MobileVersion />
					<Footer />
				</div>);
	}else{
		return(<div className="main-wrapper">
					<Header />
					<DesktopVersion />
					<Footer />
				</div>);
	}
}