import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className='bg-blue-100 flex flex-wrap mx-10 py-2 my-5 justify-center rounded-xl'>
        <button className='rounded-xl px-6 m-2 shadow-lg'
        style={{background: "red"}} onClick={() => setColor("red")}
        >Red</button>

        <button className='rounded-xl px-6 m-2 py-1'
        style={{background: "green"}} onClick={() => setColor("green")}
        >Green</button>

        <button className='rounded-xl px-6 m-2'
        style={{background: "blue"}} onClick={() => setColor("blue")}
        >blue</button>

        <button className='rounded-xl px-6 m-2'
        style={{background: "yellow"}} onClick={() => setColor("yellow")}
        >yellow</button>
        
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-blue-500'>
        
      </div>
    </div>
  )
}

export default App
