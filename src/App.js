import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <div>
       <Router>
       <Navbar/>
        <Routes>
            <Route exact path='/' Component={Home}>
            </Route>
        </Routes>
       </Router>
      
    </div>
  )
}

export default App

