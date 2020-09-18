import React, { useEffect, useState } from 'react';
import getRssFeed from 'services/rss/rssfeed';


export default function RssFeedPage(props){

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(function(){
        getRssFeed()
        .then((rssfeed) => { console.log(rssfeed); setData(rssfeed); setLoading(true) })
        .catch((error) => { setLoading(false); console.log(error) })


    }, [])

    return(<pre className="xml-body">
            {loading ? data : null}
            </pre>)
}