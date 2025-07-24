
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './Component/Header'

import Dashboarda from './Component/Dashboard'
import Incidents from './Component/Incidents'
import Incidents2 from './Component/Incidents2'
import Incidents3 from './Component/Incidents3'
import Incidents4 from './Component/Incidents4'
import Activities from './Component/Activities'
import Locations from './Component/Location'
import Documents from './Component/Documents'
import Cypher from './Component/Cypher'
import Finised from "./Component/Finised";


function App() {


  return (
    <>
     

 
<BrowserRouter>
 <Header/>
<Routes>
  <Route path="/Dashboard" element={<Dashboarda/>} />
  <Route path="/Incidents" element={ <Incidents/>}/>
   <Route path="/Incidents2" element={ <Incidents2/>}/>
   <Route path="/Incidents3" element={ <Incidents3/>}/> 
    <Route path="/Incidents4" element={ <Incidents4/>}/> 
  <Route path="/Locations" element={<Locations/>} />
  <Route  path="/Activities" element={<Activities/>} />
  <Route  path="/Documents" element={<Documents/>} />
  <Route  path="/Cypher AI" element={<Cypher/>} />
    <Route  path="/Finised" element={<Finised/>} />
</Routes>
</BrowserRouter>


    </>
  )
}

export default App




