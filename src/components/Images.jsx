import React from 'react'
import tel from '../assets/telemetry.png';
import god from '../assets/GOD.png'; 
import budda from '../assets/budda.png';
import float from '../assets/float.png';
import angel from '../assets/angel.png'
import mob from '../assets/mob.png'

const Images = () => {
  return (
    <div>
             <div className="flex flex-wrap justify-center mt-2">
    <img src={tel} className="w-5/6 md:w-1/2 lg:w-1/3 max-w-xs md:max-w-sm lg:max-w-md m-2" alt="tel" />
    <img src={god} className="w-5/6 md:w-1/2 lg:w-1/3 max-w-xs md:max-w-sm lg:max-w-md m-2" alt="god" />
    <img src={budda} className="w-5/6 md:w-1/2 lg:w-1/3 max-w-xs md:max-w-sm lg:max-w-md m-2" alt="budda" />
    <img src={angel} className="w-5/6 md:w-1/2 lg:w-1/3 max-w-xs md:max-w-sm lg:max-w-md m-2" alt="angel" />
    <img src={float} className="w-5/6 md:w-1/2 lg:w-1/3 max-w-xs md:max-w-sm lg:max-w-md m-2" alt="float" />
    <img src={mob} className="w-5/6 md:w-1/2 lg:w-1/3 max-w-xs md:max-w-sm lg:max-w-md m-2" alt="mob" />
</div>
    </div>
  )
}

export default Images