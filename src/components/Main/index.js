import React, { useState, useEffect } from 'react'
import Footer from 'components/Footer'
import DesktopVersion from './DesktopAppVersion'
import MobileVersion from './MobileAppVersion'

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
					<MobileVersion />
					<Footer />
				</div>);
	}else{
		return(<div className="main-wrapper">
					<DesktopVersion />
					<Footer />
				</div>);
	}
}