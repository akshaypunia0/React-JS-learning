import React, { useState } from 'react'

function GithubForm() {

  const [username, setUsername] = useState('akshaypunia0')

  function onSubmit(e) {

    e.preventDefault()
    
    // console.log(username);
    // console.log("Akshay chaudhary");
    
    
    
  }

  return (
    <div className='text-center bg-white'>
      
        <input 
        name="username" 
        className='p-2 m-4 border-solid border-2 border-gray-500 rounded'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        >
        </input>
        <button type="submit" className='bg-orange-500 rounded py-2 px-4 m-2 w-auto hover:bg-orange-600' onClick={onSubmit}>Search</button>
      
    </div>
  )
}

export default GithubForm