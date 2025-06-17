import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Make sure this line is here
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)