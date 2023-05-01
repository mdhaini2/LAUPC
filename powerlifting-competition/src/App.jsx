import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Squat from './pages/Squat'
import Bench from './pages/Bench'
import Deadlift from './pages/Deadlift'
import Admin from './pages/Admin'

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/squat" element={<Squat />} />
        <Route path="/bench" element={<Bench />} />
        <Route path="/deadlift" element={<Deadlift />} />
        <Route path="/lospolloshermanos" element={<Admin />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
