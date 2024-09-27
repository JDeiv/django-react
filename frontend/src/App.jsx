import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav'
import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="main" />} />
        <Route path="main" element={<MainPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="update" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
