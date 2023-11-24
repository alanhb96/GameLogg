import { useState } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
