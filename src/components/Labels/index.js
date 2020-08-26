import React, { useState, useEffect } from 'react';
import Error from 'components/ErrorData';
import Loading from 'components/LoadingData';
import Label from 'components/Label';
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

    if(error){
		return <Error />;
	}else if(!isLoadedLabels){
		return <Loading />;
	}else{
        return(<>
                    <div className="px-3 p-md-5">
                        <div className="section-inner">
                            <div className="heading py-2"><h4>Etiquetas</h4></div>
                            <div className='labels-list'>{ labels.map((label) => <Label label={label.title} key={label.id}/>)}</div>
                        </div>
                    </div>
                    <style jsx>{`
                        .labels-list{
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            grid-auto-rows: minmax(10px, auto);
                            width: 100%;
                        }
                        .labels-list > a {
                            padding: 0 0.3rem 0 0.3rem;
                        }
                    `}</style>
            </>)
    }
}