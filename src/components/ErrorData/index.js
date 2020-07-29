import React from 'react'

export default function Error(props){
	return(<div><h2>Ups! Ha habido algún problema al recoger los datos. {props.msg}</h2></div>);
}