import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { GiCrossMark } from 'react-icons/gi'

const Navbar = () => {

    //location of route for css attribute
    const location = useLocation();
    const isActive = (route) => route === location.pathname;


    return (
        <div className='home'>
            <div className='cover'>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <Link to="/Pitch" style={{ color: isActive('/Pitch') ? 'blue' : 'inherit' }}

                            //hover property

                            onMouseEnter={(e) => {
                                if (!isActive('/Pitch')) {
                                  e.target.style.color = 'red'; 
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive('/Pitch')) {
                                  e.target.style.color = 'inherit';
                                }
                              }}
                              
                              >Pitch</Link>
                            </li>







                        <li>
                            <Link to="/BPM" style={{ color: isActive('/BPM') ? 'blue' : 'inherit' }} 
                            
                            //css hover wasnt working so had to go the long way
                            onMouseEnter={(e) => {
                                if (!isActive('/BPM')) {
                                  e.target.style.color = 'red'; 
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive('/BPM')) {
                                  e.target.style.color = 'inherit';
                                }
                              }}
                              >BPM</Link>
                            </li>




                        <li>
                            <Link to="/Effects" style={{ color: isActive('/Effects') ? 'blue' : 'inherit' }}  
                            
                            onMouseEnter={(e) => {
                                if (!isActive('/Effects')) {
                                  e.target.style.color = 'red'; 
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive('/Effects')) {
                                  e.target.style.color = 'inherit';
                                }
                              }}
                              
                              >Effects</Link>
                            </li>
                            
                    </ul>
                    <div className='cross-container'>
                        <GiCrossMark className='cross' />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
