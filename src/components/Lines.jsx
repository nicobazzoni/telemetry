import React from 'react';

const Lines = () => {
  return (
    <div className="relative mt-4 h-screen w-full flex items-center justify-center bg-stone-50 overflow-hidden ">

      {/* Background Circle */}
      <div className="hidden md:block h-screen w-full absolute border-2 mb-3 rounded-full border-rose-200 border-dotted animate-rotate z-0">
        <div className="top-0 left-4 w-full h-full flex items-center justify-center">
          <div className="h-screen w-full border-2 rounded-full border-indigo-100 border-dotted animate-slowRotate"></div>
        </div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center px-4 md:px-0 p-2  space-y-4 mt-5">
        <h4 className="text-center text-sm md:text-lg  p-2 font-medium mt-8">
        "Telemetry" is an electrifying fusion of synth-heavy melodies and thunderous 808 beats that beckon listeners into a rhythmic trance. Each track is a dance of contrasts—moments of devout introspection are juxtaposed against vivacious braggadocio, all wrapped up in psychedelic soundscapes that stimulate the senses. Dive into the intricate wordplay and metaphors that serve as the pulse, while the catchy, dance-worthy beats form the heartbeat. This EP isn't just music—it's a multi-layered experience where reverence meets rebellion, and the ethereal dances with the earthly.
        </h4>

        {/* Two Small Circles */}
        <div className="w-24 h-24 md:w-32 md:h-32 border-2 rounded-full border-slate-600 border-dotted animate-rotate relative mb-2">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 border-2 rounded-full border-slate-500 border-dotted animate-ping"></div>
          </div>
        </div>

        <div className="w-24 h-24 md:w-32 md:h-32 border-2 rounded-full border-rose-500 border-dotted animate-rotate relative mb-2">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 border-2 animate-ping rounded-full border-slate-500 border-dotted "></div>
          </div>
        </div>
   

        <a href="https://soundcloud.com/nicoroc/sets/telemetry" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-rose-200 underline-none">Listen on SoundCloud</a>
      </div>

    </div>
  )
}

export default Lines;
