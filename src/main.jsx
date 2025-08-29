import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './outpot.css'
import App from './components/App/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
