import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BackgroundComponents from './components/BackgroundComponents.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundComponents />
    <App />
  </StrictMode>,
)
