import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/index'
import './index.css'
import { AuthContextProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <Routes/>
    </AuthContextProvider>
  </React.StrictMode>,
)
