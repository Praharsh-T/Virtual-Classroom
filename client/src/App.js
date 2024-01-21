import React from 'react'
import {Router,Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'


const App = ()=> {
  return (
    <Router>
<Route path='/dashboard' Component={Dashboard}/>
<Route path='/login' Component={Login}/>

<Dashboard/>
<Login/>


    </Router>
  
  )
}

export default App