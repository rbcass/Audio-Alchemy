import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {GiCrossMark} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='home'>
        <div className='cover'>
      <nav className='navbar'>
        <ul>
            <li><Link to ="/">Pitch</Link></li>
            <li><Link to ="/BPM">BPM</Link></li>
            <li><Link to ="/Effects">Effects</Link></li>
        </ul>
        <div className='cross-container'>
       <GiCrossMark className='cross'/>
       </div>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
