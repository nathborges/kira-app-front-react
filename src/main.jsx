import React from 'react'
import ReactDOM from 'react-dom/client'
import Chatbot from './pages/Chatbot';
import Routes from './routes/Routes';
import './fonts/Kotex-Bold.ttf'
import './fonts/Kotex-Light.ttf'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
)
