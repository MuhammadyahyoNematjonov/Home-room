import { useState } from 'react'
import Home from './Home'
import { Routes, Route } from "react-router-dom"
import Properties from './Properties'
import RegisterPage from './Register'
import Boglanish from './Conttact'
import LoginPage from './Login'
import Favourite from './Favourite'
import PropertiesPage from './MY-PROPETI'
import AddPropertyForm from './xarita'
import ProfilePage from './Profile'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Properties" element={<Properties/>} />
      <Route path="/RegisterPage" element={<RegisterPage/>} />
      <Route path="/Contacts" element={<Boglanish/>} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path="/Favourite" element={<Favourite/>} />
      <Route path="/my-pp" element={<PropertiesPage/>} />
      <Route path="/my" element={<AddPropertyForm/>} />
      <Route path="/profile" element={<ProfilePage/>} />
</Routes>
  )
}

export default App
