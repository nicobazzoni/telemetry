import React from 'react';

const Bio = () => {
    return (
        <div className="flex justify-center items-center mt-4"> 
            <div className="bio relative w-64 h-96 overflow-hidden">
                <img src="src/assets/_DSC8108.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
                <div className="bio-text absolute bottom-4 right-11 text-white">
                    <h1 className="text-xl font-bold">n i c o r o c</h1>
                    <p className="mt-2">r a p p e r <hr /> n y c</p>
                </div>
            </div>
        </div>
    )
}

export default Bio;
