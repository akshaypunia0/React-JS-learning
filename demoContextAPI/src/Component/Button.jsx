import React, { useContext } from 'react'
import Component1 from './Component1'
import counterContext from '../Context/Context'

const Button = () => {

    const value = useContext(counterContext)

  return (
    <>
    <button onClick={() => value.setCount((count) => count + 1)} ><span><Component1 /></span>I'm a button</button>
    </>
    
  )
}

export default Button