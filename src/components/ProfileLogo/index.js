import React, { useContext } from 'react';
import DeviceContext from 'context/deviceContext';

export default function ProfileLogo(){
	const LOGO_TEXT = '{ JaBoDev }'
	const deviceContext = useContext(DeviceContext);
	const positionLogo = {"DESKTOP": {points: "100,10 25,60 25,140 100,185 175,140 175,60 100,10", xText: "100", yText: "105", svgHeight: "210", svgWidth: "100%", viewBox: "0 0 200 200"},
						 "MOBILE": {points: "50,5 0,37 0,85 50,110 95,85 95,37 50,5", xText: "47", yText: "62.5", svgHeight: "100", svgWidth: "170", viewBox: "0 0 130 130"}};


	return (<>
			<div className="profile-logo">
				<a href={deviceContext.isMobileOrTablet ? "/" : "https://javibodas.github.io"}>
					<svg xmlns="http://www.w3.org/2000/svg" className="logo-svg" viewBox={deviceContext.isMobileOrTablet ? positionLogo["MOBILE"].viewBox :  positionLogo["DESKTOP"].viewBox} preserveAspectRatio="xMidYMax" width={deviceContext.isMobileOrTablet ? positionLogo["MOBILE"].svgWidth :  positionLogo["DESKTOP"].svgWidth} height={deviceContext.isMobileOrTablet ? positionLogo["MOBILE"].svgHeight :  positionLogo["DESKTOP"].svgHeight}>
						<polygon points={deviceContext.isMobileOrTablet ? positionLogo["MOBILE"].points :  positionLogo["DESKTOP"].points}></polygon>
						<text x={deviceContext.isMobileOrTablet ? positionLogo["MOBILE"].xText :  positionLogo["DESKTOP"].xText} y={deviceContext.isMobileOrTablet ? positionLogo["MOBILE"].yText :  positionLogo["DESKTOP"].yText}>{LOGO_TEXT}</text>
					</svg>
				</a>
        	</div>
			<style jsx>{`
				.profile-image{
					max-height: 150px;
				}

				.profile-logo{
					position: relative;
					width: 60%;
					height: 100%;
					margin: 0 auto;
				}

				@media screen and (max-width: 1280px) {
					.profile-logo{
						width: 80%;
					}
				}

				@media screen and (max-width: 992px) {
					.profile-logo{
						width: 2%;
						margin: 0 0 0 0;
					}
				}

				.logo-svg{
					height: auto;
				}
				.profile-logo polygon{
					fill:white;
					stroke:#658361;
					stroke-width:7;
				}
	
				.profile-logo text{
					font-size: 20px;
					text-anchor: middle;
					fill: #658361;
					font-weight: bold;
					font-family: monospace;
				}
	
				.logo-svg:hover polygon{
					cursor: pointer;
					stroke: #66DF2E!important;
				}

				.logo-svg:hover text{
					fill: #66DF2E;
				}

				@media screen and (max-width: 992px) {
					.profile-logo text{
						font-size: 14px;
					}

					.profile-logo polygon{
						stroke-width:4;
					}
				}
			`}</style>
		</>)
}