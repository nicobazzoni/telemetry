import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SongList from './components/SongList.jsx'
import Lines from './components/Lines'
import Climate from './components/Climate'
import Bio from './components/Bio'
import Images from './components/Images'
import Lyrics from './components/Lyrics'
import Footer from './components/Footer'



function App() {


  return (
    <>
      <div className='p-1 bg-white-50 text-black-50 font-mono overflow-x-hidden'>
      
      <h1 className='mb-2 border-t'>n i c o r o c</h1>
        <h1 className='border border-white text-stone-800 bg-stone-100'>   t e l e m e t r y </h1>
     
   
 
     <SongList />
      <Lines /> 
      <Bio />
      <Images />
      {/* <Lyrics /> */}
      <Climate />
      < Footer />
     
  
      </div>
    </>
  )
}

export default App
