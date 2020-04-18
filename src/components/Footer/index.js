import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
	return (<footer className="footer text-center py-2 theme-bg-dark">
		   	    <small className="copyright">Designed with <FontAwesomeIcon icon={faHeart} color="red"/> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
		  	</footer>)
}