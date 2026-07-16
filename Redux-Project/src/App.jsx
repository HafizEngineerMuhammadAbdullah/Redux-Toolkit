import React from 'react'
import { fetchUnsplashImages } from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen w-full font-mono bg-cyan-500 text-3xl font-bold underline'>
      Application
      <button className="py-2 px-4 border-2 border-e-red-950 rounded-xl cursor-pointer hover:bg-amber-300 hover:scale-105" onClick={async () => {
        const data = await fetchUnsplashImages('cats', 1, 10);
        console.log(data);
      }
      }>Get Photos</button>
    </div>
  )
}

export default App
