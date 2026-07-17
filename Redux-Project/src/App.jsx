import React from 'react'
import { fetchUnsplashImages,fetchPexelsVideos } from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen w-full font-mono bg-cyan-500 text-3xl font-bold underline'>
      Application
      <button className="py-2 px-4 border-2 m-3 border-yellow-400 rounded-xl cursor-pointer hover:bg-amber-300 hover:scale-105" onClick={async () => {
        const data = await fetchUnsplashImages('cats', 1, 10);
        console.log(data.results);
      }
      }>Get Photos</button>

       <button className="py-2 px-4 border-2 m-3 border-cyan-400 rounded-xl cursor-pointer hover:bg-green-300 hover:scale-105" onClick={async () => {
        const data = await fetchPexelsVideos('cats', 1, 10);
        console.log(data.videos);
      }
      }>Get Videos</button>
    </div>
  )
}

export default App
