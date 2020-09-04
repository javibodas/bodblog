import React, { useState, useEffect } from 'react';

const DeviceContext = React.createContext({
    isMobileOrTablet: false
});

export function DeviceContextProvider({children}){
    const [ isMobile, setIsMobile ] = useState((window.innerWidth <= 992))

    useEffect(function(){
		const resizeListener = () => {
        setIsMobile((window.innerWidth <= 992))
    };

		window.addEventListener('resize', resizeListener);
    }, []);
    
    return(<DeviceContext.Provider value={{isMobileOrTablet: isMobile}}>{children}</DeviceContext.Provider>)

}

export default DeviceContext;