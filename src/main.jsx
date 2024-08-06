import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StoreProvider } from './store/StoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provide the store context to the entire application */}
    <StoreProvider>
      <App />
    </StoreProvider>
    
  </React.StrictMode>,
)
