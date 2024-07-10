import { useCallback, useState, useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //userref hook

  const passwordRef = useRef(null)

  const copyPassToClipboard = () => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 6);

    window.navigator.clipboard.writeText(password)
  }

  const passwordGenerator = useCallback( () => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllow) str += '0123456789'
    if (charAllow) str += '!@#$%&(){}[]'

    for (let index = 1; index <= length; index++) {
      let randomNum = Math.floor(Math.random() * str.length + 1)
      // console.log(finalPass);

      pass += str.charAt(randomNum);
      // console.log(pass);

      
    }
    
    setPassword(pass)


  }, [length, numberAllow, charAllow, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='bg-gray-600 w-full max-w-md mx-auto shadow-md rounded-lg my-12 py-4 px-4 text-orange-500'>
        <h1 className='text-white text-center text-xl pb-4'>Password generator</h1>
        <div className='rounded-lg flex overflow-hidden mb-4 shadow'>
          <input
            type='text'
            placeholder='password'
            value={password}
            className='outline-none w-full py-2 px-4'
            readOnly
            ref={passwordRef}

          />
          <button className='bg-blue-500 px-4 text-white 
          hover:bg-violet-600'
          onClick={copyPassToClipboard}
          >Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={50}
              className='cursor-pointer'
              value={length}
              onChange={(e) => {setLength(e.target.value)}}


            />
            <label htmlFor="">Length: ({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}

            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
