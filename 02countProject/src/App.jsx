import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  let addValue = () => {

    if (counter < 20) {
      setCounter(counter + 1);
    }
    else{
      document.getElementById('1').innerHTML = 'counter is greater than 20'
    }
    
    // console.log(counter)
  }

  let removeValue = () => {

    if (counter > 0) {
      setCounter(counter - 1);

    }
    
    // console.log(counter);
  }


  return (
    <>
      <div id="root">
        <div id='1'>Count 1 {counter}</div>
        <div>Count 2 {counter}</div>
        <div>Count 3 {counter}</div>

        <footer>Footer {counter}</footer>

        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
