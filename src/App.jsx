
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path='layout' element={<Layout />} />
      <Route path='/' element={<Navbar />} />

    </Routes>
  )
}
export default App

