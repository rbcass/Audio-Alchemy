import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home/Home'
import Pitch from './Pages/Pitch/Pitch'

const App = () => {
  return (
    <div>
       <Router>
       <Navbar/>
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/Pitch' Component={Pitch}/>


        </Routes>
       </Router>
      
    </div>
  )
}

export default App

