import React, { useState } from 'react';

function Lyrics() {
    const svgUrls = [
        "src/assets/svg/untitled.svg",
        "src/assets/svg/face.JPG",
        // "src/assets/svg/song3.svg",
        // ... add more SVG URLs as needed
    ];

    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const handleTap = () => {
        if (currentSongIndex < svgUrls.length - 1) {
            setCurrentSongIndex(prevIndex => prevIndex + 1);
        } else {
            setCurrentSongIndex(0);  // wrap back to the first song
        }
    }

    return (
        <div className="flex relative flex-col items-center justify-center h-screen" onClick={handleTap} style={{ cursor: 'pointer' }}>
            <p>Tap to view next song</p>
            <div className=' flex right-2
             items-center justify-center w-full h-full'>
                <iframe 
                    src={svgUrls[currentSongIndex]} 
                    width='100%'
                    height="800" 
                    allow="autoplay">
                </iframe>
            </div>
        </div>
    );
}

export default Lyrics;
