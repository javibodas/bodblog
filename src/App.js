import React from 'react';
import Main from 'pages/Main'
import { DeviceContextProvider } from 'context/deviceContext';
import './App.css';


export default function App() {

  return (<DeviceContextProvider>
            <Main />
          </DeviceContextProvider>);
}
