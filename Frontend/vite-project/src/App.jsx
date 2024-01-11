import { useState } from 'react'
import Register from './pages/register'
import Login from "./pages/login"
import Home from './pages/home'
import {Route, Routes } from 'react-router-dom'
import Formpage from  "./pages/formpage";
function App() {


  return (
    <>
    <Routes>
      <Route exact path="/"  element={<Home />}/>
      <Route  path="/login"  element={<Login />}/>
      <Route  path="/register" element={<Register/>} />
      <Route  path="/formpage" element={<Formpage/>} />

   </Routes>
    </>
  )
}

export default App
