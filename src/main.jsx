import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AmountProvider } from './pages/amountComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmountProvider>
      <App />
    </AmountProvider>
  </StrictMode>,
)
