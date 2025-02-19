import { BrowserRouter, Router } from 'react-router-dom'
import './App.css'

import AppRoutes from './routes/Router'

function App () {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
