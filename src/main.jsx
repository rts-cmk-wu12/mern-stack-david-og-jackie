import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Details from './details.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* routes */}
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
  </StrictMode>,
)
