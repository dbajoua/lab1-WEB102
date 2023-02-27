/*  IN MAIN, WE HAVE CODE SO WE CAN DISPLAY APP ON BROWSER. */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*
  THIS IS HOW WE CAN DISPLAY APP ON BROWSER.
  This createRoot method lets us create a root section to display
  react components inside a browser DOM node. The root of our react 
  applications is in the App component.  
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
