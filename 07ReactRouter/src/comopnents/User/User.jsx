import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    <div className='bg-gray-600 text-center text-white text-3xl m-auto p-4'>
        User: {id}
    </div>
  )
}

export default User