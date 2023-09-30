
import React, { useState } from 'react';
import './Pitch.css';
import './wave2.gif';
import { PitchShifter } from 'soundtouchjs';

const Pitch = () => {
  const [pitch, setPitch] = useState(1.0);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [pitchedAudioBuffer, setPitchedAudioBuffer] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const audioContext = new AudioContext();
      const arrayBuffer = await file.arrayBuffer();

      audioContext.decodeAudioData(arrayBuffer, (decodedAudio) => {
        setAudioBuffer(decodedAudio);

        const shifter = new PitchShifter(audioContext.sampleRate);
        shifter.pitch = pitch;

        const outputBuffer = shifter.process(decodedAudio);

        setPitchedAudioBuffer(outputBuffer);
      });
    }
  };

  const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleAudioPlay = () => {
    if (pitchedAudioBuffer) {
        const audioContext = new AudioContext();
        const audioSource = audioContext.createBufferSource();
        audioSource.buffer = pitchedAudioBuffer;
    
        // Connect the audio source to the destination (speakers)
        audioSource.connect(audioContext.destination);
    
        // Start playing the audio
        audioSource.start();
    }
  };

  return (
    <div className='pop'>
      {/* <h1>Pitch Changer</h1> */}
      <input type="file" accept="audio/*" onChange={handleFileUpload} />
      <input
        type="range"
        min="0.5"
        max="2.0"
        step="0.01"
        value={pitch}
        onChange={handlePitchChange}
      />
      <span>{pitch.toFixed(2)}</span>

      <button onClick={handleAudioPlay}>Play Pitched Audio</button>

      {pitchedAudioBuffer && (
        <a
          href={URL.createObjectURL(
            new Blob([pitchedAudioBuffer.getChannelData(0)], { type: 'audio/wav' })
          )}
          download="pitched_audio.wav"
        >
          Download Pitched Audio
        </a>
      )}
    </div>
  );
};

export default Pitch;