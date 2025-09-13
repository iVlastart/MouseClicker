import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/notFound.tsx'
import { Version } from './pages/version.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/version' element={<Version />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
  
)
