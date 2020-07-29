import React, { useState, useEffect } from 'react';
import Error from 'components/ErrorData';
import Loading from 'components/LoadingData';
import getAllLabels from 'services/labels/getAllLabels';

export default function Labels(props){

    const [ labels, setLabels ] = useState([])
    const [ error, setError ] = useState(null);
    const [ isLoadedLabels, setIsLoadedLabels ] = useState(false);
    
    useEffect(function(){
        getAllLabels()
        .then((res) => { setLabels(res); setIsLoadedLabels(true); })
        .catch((error) => { setError(error); setIsLoadedLabels(false); })

    }, [])

    const handleClickLabel = () => {
        console.log('Link')
    }

    if(error){
		return <Error />;
	}else if(!isLoadedLabels){
		return <Loading />;
	}else{
        return(<div className="px-3 p-md-5">
        <div className="section-inner">
            <div className="heading py-2"><h4>Etiquetas</h4></div>
                    <div>{ labels.map((label) => <a onClick={() => props.handleClick(label.title)}>#{label.title}</a>)}</div>
        </div>
    </div>)
    }
}