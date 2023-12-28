import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StateWrap } from './context/stateWrap.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateWrap >
    <App />
    </StateWrap>
    
  </React.StrictMode>
)
