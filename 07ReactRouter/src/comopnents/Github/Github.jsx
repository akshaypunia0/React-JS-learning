import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



let name = ''

function Github() {

  const [username, setUsername] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username);

  }

  const data = useLoaderData()
  return (
    <>
      <div className='w-full h-full bg-white '>
        <div className='w-full h-auto bg-gray-700 text-white m-2 flex flex-col sm:flex-row sm:w-1/2 sm:m-auto'>
          <div>
            <img src={data.avatar_url} alt="" />
          </div>

          <div className='flex flex-col m-auto p-4 text-2xl'>
            <p>Name: <span className='text-orange-500'>{data.name}</span></p>
            <p>Username: <span className='text-orange-500'>{data.login}</span></p>
            <p>Followers: <span className='text-orange-500'>{data.followers}</span></p>
            <p>ID: <span className='text-orange-500'>{data.id}</span></p>
            <p>Bio: <span className='text-orange-500'>{data.bio}</span></p>
          </div>
        </div>
      </div>


      <div className='w-full h-auto flex flex-col sm:flex-row bg-white text-center' >
        <div className='w-full text-center'>

          <input
            name="username"
            className='p-2 m-4 border-solid border-2 border-gray-500 rounded'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
          </input>
          <button type="submit" className='bg-orange-500 rounded py-2 px-4 m-2 w-auto hover:bg-orange-600' onClick={onSubmit}>Search</button>

        </div>
      </div>
    </>
  )
}

export default Github


export const getGithubData = async () => {

  const response = await fetch(`https://api.github.com/users/akshaypunia0`);


  return response.json();
}