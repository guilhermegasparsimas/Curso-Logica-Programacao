import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VetorComponent from './VetorComponent.jsx'
import dezValores from './dezValores.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <VetorComponent />
  </StrictMode>
)
