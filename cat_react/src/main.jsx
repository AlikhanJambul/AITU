import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './reset.css'
import './components/Pages/style/components/button.css'
import './components/Pages/style/components/card.css'
import './components/Pages/style/components/list.css'
import './components/Pages/style/components/nav.css'
import './components/Pages/style/layout/container.css'
import './components/Pages/style/layout/header.css'
import './components/Pages/style/layout/poster.css'
import './components/Pages/style/layout/section.css'
import './components/Pages/style/layout/footer.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
