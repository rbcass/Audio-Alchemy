import React from 'react'
import './Home.css'
import './wave.gif'

const Home = () => {
  return (
    <div className='Home'>
        <div className='home-text'>
            <h2>Audio-Alchemy</h2>
            <h3>Change the elements of your audio file</h3>
            <input type='file' className='input-file'/>

        </div>
      
    </div>
  )
}

export default Home
