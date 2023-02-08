import React from 'react'
import {Routes, Route } from 'react-router-dom' 
import Layout from './components/Layout'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Routes>
        <Route path='layout' element={<Layout />}/>
        <Route path='navbar' element={<Navbar/>}/>
    </Routes>
  )
}
export default App;