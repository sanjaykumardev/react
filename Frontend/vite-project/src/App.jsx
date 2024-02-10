

import Home from "./pages/home"
import {Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Routes>
      <Route exact path="/"  element={<Home />}/>

   </Routes>
    </>
  )
}

export default App
