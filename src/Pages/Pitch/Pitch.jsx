import React, { useState } from 'react';
import './Pitch.css';
import './wave2.gif';
import { PitchShifter } from 'soundtouchjs';

const Pitch = () => {

  //file

  const handleFiles = (event) => {
    const selectedFile = event.target.files[0];
    setIsPlaying(selectedFile);
  }

  const [isPlaying, setIsPlaying] = useState(null);

 const playAudio = () =>{
  const audioElement = document.getElementById('audio-element');

  if (isPlaying) {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }
 }

  return (
    <div className='pop'>
      {/* <h1>Pitch Changer</h1> */}
      <input type='file' accept='audio/*' onChange={handleFiles} />
      <button onClick={playAudio}>
        {isPlaying && !isPlaying.paused ? 'Pause' : 'Play'}
      </button>

      {isPlaying && (
        <audio id='audio-element' controls>
          <source src={URL.createObjectURL(isPlaying)} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default Pitch;