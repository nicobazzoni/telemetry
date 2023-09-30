import React from 'react';
import Song from './Song'; // adjust the path as needed

import song1 from '../assets/bandit.wav';
import song2 from '../assets/goeasy.wav';
import song3 from '../assets/ndrangeta.wav';
import song4 from '../assets/possessed.wav';
import song5 from '../assets/darkchamber.wav';
import song6 from '../assets/closer.wav';


const songs = [
    { src: song1, title: 'bandit' },
    { src: song2, title: 'go easy' },
    { src: song3, title: 'ndrangeta' },
    { src: song4, title: 'possessed' },
    { src: song5, title: ' dark chamber' },
    { src: song6, title: 'closer' },
   
  ];
  
  const SongList = () => {
    return (
        <div className='relative space-y-2'>
            
            {/* Rotating Circle with lowest z-index */}
            <div className="h-screen w-full absolute border-2 rounded-full border-rose-200 border-dotted animate-rotate ml-44 z-0">
                <div className="top-0 left-4 w-full h-full flex items-center justify-center">
                    <div className="h-screen w-full border-2 rounded-full border-indigo-100
                     border-dotted animate-slowRotate"></div>
                </div>
            </div>
            
            {/* Song List with higher z-index */}
            <div className="z-10 relative">
                {songs.map((song, index) => (
                    <Song key={index} src={song.src} title={song.title} className='z-10 relative' />
                ))}
            </div>
        </div>
    );
}

export default SongList;


