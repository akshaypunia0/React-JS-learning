import React, {useContext} from 'react'
import counterContext from '../Context/Context'

const Component1 = () => {

    const value = useContext(counterContext)

  return (
    <>
    <div>Component1 component</div>
    <div>{value.count}</div>
    </>
  )
}

export default Component1