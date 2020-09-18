import React from 'react'
import { faHeart, faRssSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
	return (<footer className="footer text-center py-2 theme-bg-dark">
		   	    <small className="copyright">Designed with <FontAwesomeIcon icon={faHeart} color="red"/> by <a href="http://javibodas.github.io" target="_blank">Javier Gonzalez Bodas</a> - <a data-testid="rss-link" href="/rss"><FontAwesomeIcon icon={faRssSquare} color="orange"/></a></small>
		  	</footer>)
}