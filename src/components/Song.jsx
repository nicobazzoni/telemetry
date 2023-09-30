import React, { useState, useRef } from 'react';

const Song = ({ src, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(src));
  
    const togglePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div className='space-y-2 mt-3 '>
     
      
        <button className='border space-y-2 rounded-full p-2 font-mono  ' onClick={togglePlayPause}>
          {isPlaying ? 'Pause' :  title}
        </button>
      </div>
    );
  }
  
    export default Song;