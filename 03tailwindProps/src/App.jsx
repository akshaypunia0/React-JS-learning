import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App(props) {

  // const array = [1, 2, 3]
  // let element = null;

  // for (let index = 0; index < array.length; index++) {
  //   element = array[index];
    
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-5'>Tailwind text</h1>
      <Card heading='About mac' btnText='Click me'/>
      <Card heading='About windows' />
    </>
  )
}

export default App
