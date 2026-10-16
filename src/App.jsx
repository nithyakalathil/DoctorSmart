import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

import { BrowserRouter,Routes,Route } from 'react-router'
import PatientList from './components/Patient-List'

function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/register" element="{<Register/>}"></Route>
  <Route path="/" element="<Login/>"></Route>
  <Route path="/list" element="<PatientList/>"></Route>

</Routes>
</BrowserRouter>
      

    </>
  )
}

export default App