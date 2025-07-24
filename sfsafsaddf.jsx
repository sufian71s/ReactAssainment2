
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navber from './Component/Navber'
import H from './Component/Home';
import About from './Component/About';
import Contect from './Component/Contect';
import SignUp from './Component/SignUp';
import Error from './Component/Error';
import './App.css'

function App() {
  return (
    <>


 
<BrowserRouter>
 <Navber/>
<Routes>
  <Route path="/Home" element={<Home/>} />
  <Route path="/About" element={ <About/>}/>
  <Route path="/Contect" element={<Contect/>} />
  <Route  path="/SignUp" element={<SignUp/>} />
  <Route path="*" element={<Error/>}/>
</Routes>
</BrowserRouter>





    <Header/>
    <Dashboarda/>
    <Incidents/>
    <Location/>
    <Activities/>
    <Documents/>
    <Cypher/>

    </>
  )
}

export default App
