import React from 'react'
import { useLoaderData } from 'react-router-dom'
import GithubForm from '../GithubForm/GithubForm'

function Github() {

    const data = useLoaderData()
  return (
    <>
    <div className='w-full h-full bg-white '>
        <div className='w-1/2 h-auto bg-gray-700 text-white m-auto flex flex-col sm:flex-row'>
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
    <div className='w-1/2 h-auto flex flex-col sm:flex-row' >
      <GithubForm />
    </div>
    </>
  )
}

export default Github

let username = "akshaypunia0"


export const getGithubData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    return response.json();
}