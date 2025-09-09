import { useState } from 'react'
import Home from './Home'
import { Routes, Route } from "react-router-dom"
import Properties from './Properties'
import RegisterPage from './Register'
import Boglanish from './Conttact'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Properties" element={<Properties/>} />
      <Route path="/RegisterPage" element={<RegisterPage/>} />
      <Route path="/Contacts" element={<Boglanish/>} />
    </Routes>
  )
}

export default App
