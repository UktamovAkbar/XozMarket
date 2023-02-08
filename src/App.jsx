import React from 'react'
import {Routes, Route } from 'react-router-dom' 
import Layout from './components/Layout'

const App = () => {
  return (
    <Routes>
        <Route path='layout' element={<Layout />}/>
    </Routes>
  )
}

export default App