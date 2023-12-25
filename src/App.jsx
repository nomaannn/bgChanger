import { useState } from 'react'

import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("lightgrey")

  return (
    <>
      <div className=' w-screen h-screen' style={{ backgroundColor: backgroundColor }}>
        <button
          className='bg-red-500 text-white m-2 rounded-md px-4 py-2'
          onClick={() => setBackgroundColor("red")}
        >Red</button>
        <button
          className='bg-green-500 text-white m-2 rounded-md px-4 py-2'
          onClick={() => setBackgroundColor("green")}
        >Green</button>
        <button
          className='bg-blue-500 text-white m-2 rounded-md px-4 py-2'
          onClick={() => setBackgroundColor("blue")}
        >Blue</button>

        <button
          className='bg-pink-200  m-2 rounded-md px-4 py-2'
          onClick={() => setBackgroundColor("pink")}
        >Pink</button>
        <button
          className='bg-green-200 text-white m-2 rounded-md px-4 py-2'
          onClick={() => setBackgroundColor("lightgreen")}
        >Light Green</button>
      </div>
    </>
  )
}

export default App
