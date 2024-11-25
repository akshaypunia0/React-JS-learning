import React from 'react'

function GithubForm() {

  function onSubmit(formData) {
    const username = formData.get('username');
    console.log(username);
    
    
  }

  return (
    <div className='text-center'>
      <form className='bg-white' action={onSubmit}>
        <input name="username" className='p-2 m-4 border-solid border-2 border-gray-500 rounded'></input>
        <button type="submit" className='bg-orange-500 rounded py-2 px-4 m-2 w-auto hover:bg-orange-600' >Search</button>
      </form>
    </div>
  )
}

export default GithubForm