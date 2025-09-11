import { useState } from 'react'
import Home from './Home'
import { Routes, Route } from "react-router-dom"
import Properties from './Properties'
import RegisterPage from './Register'
import Boglanish from './Conttact'
import LoginPage from './Login'
import Favourite from './Favourite'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Properties" element={<Properties/>} />
      <Route path="/RegisterPage" element={<RegisterPage/>} />
      <Route path="/Contacts" element={<Boglanish/>} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path="/Favourite" element={<Favourite/>} />
    </Routes>
  )
}

export default App
